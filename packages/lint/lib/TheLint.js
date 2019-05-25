'use strict'
/**
 * Lint runner
 * @memberof module:@the-/lint
 * @class TheLint
 */
const aglob = require('aglob')
const { canWriteAsync, readFileAsync, statAsync } = require('asfs')
const colorprint = require('colorprint')
const path = require('path')
const { inspect } = require('util')
const LintCache = require('./helpers/LintCache')
const debug = require('debug')('the:lint')

const relativePath = (f) => path.relative(process.cwd(), f)

/** @lends module:@the-/lint.TheLint */
class TheLint {
  static logErrorReports(filename, reports) {
    const INDENT = ' '
    colorprint.error(
      `${reports.length} lint errors found on ${relativePath(filename)}`,
    )
    for (const { checkerName = 'Anonymous', message, options } of reports) {
      colorprint.errorDetail(INDENT, `${message} ( ${relativePath(filename)} )`)
      const tracing = Object.entries({
        checker: checkerName,
        ...options,
      })
      for (const [key, value] of tracing) {
        colorprint.errorDetail(
          INDENT,
          INDENT,
          `${key.padEnd(8)} : ${inspect(value)}`,
        )
      }
      colorprint.errorDetail('')
      colorprint.errorDetail('')
    }
  }

  constructor(config = {}) {
    const { cacheFile = 'node_modules/.cache/the-lint/cache.json' } = config
    this.checkers = {}
    this.cache = new LintCache(cacheFile)
  }

  /**
   * Add checker
   * @param {string} pattern - Target filename patter
   * @param {Function} checker - Lint checker
   */
  add(pattern, checker) {
    const byObj = arguments.length === 0 && typeof arguments[0] === 'object'
    if (byObj) {
      for (const [pattern, checker] of Object.entries(arguments[0])) {
        this.add(pattern, checker)
      }
      return
    }
    this.checkers[pattern] = this.checkers[pattern] || []
    this.checkers[pattern].push(checker)
  }

  shouldSkipContent(content) {
    // Using golang format
    // https://github.com/golang/go/issues/13560
    return /\/\/ Code generated by .* DO NOT EDIT/i.test(content)
  }

  async checkFile(filename, checkers) {
    const reports = []
    const cacheKey = [
      filename,
      Object.values(checkers)
        .map((c) => c.name)
        .join('&'),
    ].join('~')
    const shouldSkipFile = await this.shouldSkipFile(filename, { cacheKey })
    if (shouldSkipFile) {
      debug('Skip', filename)
      return reports
    }

    const content = String(await readFileAsync(filename))
    if (this.shouldSkipContent(content)) {
      return reports
    }
    for (const checker of checkers) {
      await checker({
        content,
        filename,
        report(message, options = {}) {
          reports.push({
            checkerName: checker.name,
            content,
            filename,
            message,
            options,
          })
        },
      })
    }
    const success = reports.length === 0
    if (success) {
      await this.cache.set(cacheKey, { at: new Date().getTime() })
    } else {
      await this.cache.del(cacheKey)
    }
    return reports
  }

  async clearCache() {
    await this.cache.clear()
  }

  /**
   * Run all checkers
   * @returns {Promise<Object<string, Array>>}
   */
  async run() {
    const errorReports = {}
    for (const [pattern, checkers] of Object.entries(this.checkers)) {
      const filenames = await aglob(pattern)
      if (filenames.length === 0) {
        console.warn(`[TheLint] No file matched for pattern: "${pattern}"`)
      }
      const reported = await Promise.all(
        filenames.map(async (filename) => {
          const reports = await this.checkFile(filename, checkers)
          return { filename, reports }
        }),
      )
      for (const { filename, reports } of reported) {
        if (reports.length === 0) {
          continue
        }
        errorReports[filename] = reports
      }
    }
    return errorReports
  }

  async shouldSkipFile(filename, { cacheKey }) {
    const stat = await statAsync(filename).catch(() => null)
    if (!stat) {
      return false
    }
    const canWrite = await canWriteAsync(filename)
    if (!canWrite) {
      return true
    }
    const cached = await this.cache.get(cacheKey)
    if (!cached) {
      return false
    }
    return new Date(cached.at) >= new Date(stat.mtime)
  }
}

module.exports = TheLint
