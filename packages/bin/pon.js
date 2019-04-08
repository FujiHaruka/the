/**
 * As pon tasks
 * @module @the-/bin/pon
 * @returns {function} Task function
 */
'use strict'

const theBin = require('./lib/create')
const { isProduction } = require('@the-/check')
const chalk = require('chalk')

/** @lends theBinPonTasks */
const theBinPonTasks = {
  test(targets) {
    return async function task(ctx) {
      const { logger } = ctx
      const subLogger = logger.withoutPrefix ? logger.withoutPrefix() : logger
      for (const [cmd, { guide, dev, version }] of Object.entries(targets)) {
        const skip = dev && isProduction()
        if (skip) {
          continue
        }
        const bin = theBin(cmd, { guide })
        const ok = await bin.verify({ version })
        const name = [bin.cmd, version].filter(Boolean).map((c) => String(c).trim()).join(' ')
        if (ok) {
          subLogger.trace(`${chalk.green('✓')}\`${name}\``)
        } else {
          subLogger.trace(`${chalk.red('✖')}\`${name}\``)
          subLogger.error(`[the-bin] ${name} is required but missing. ${guide}`)
          process.exit(1)
        }
      }
    }
  }
}

module.exports = theBinPonTasks
