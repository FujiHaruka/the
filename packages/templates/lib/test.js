/**
 * Define coz bud for readme
 * @function test
 * @returns {Object}
 */
'use strict'

const aglob = require('aglob')
const { ok } = require('assert')
const path = require('path')
const _tmpl = require('./_tmpl')

/** @lends test */
function test(config) {
  let { cjs = config.node, dest = process.cwd(), src } = config
  const TMPL_PATH = cjs ? _tmpl('cjs_test.hbs') : _tmpl('test.hbs')
  ok(!!src, 'config.src is required.')
  return aglob
    .sync(src)
    .filter((src) => path.basename(src) !== 'index.js')
    .filter((src) => path.basename(src) !== 'index.jsx')
    .filter((src) => !/^[\._\-]/.test(path.basename(src)))
    .filter((src) => {
      try {
        return !!require.resolve(src)
      } catch (e) {
        return false
      }
    })
    .map((src) => {
      const extname = path.extname(src)
      const basename = path.basename(src, extname)
      const suffix = 'Test'
      const name = String(basename)
      const varNameChanged = ['default'].includes(name)
      return {
        data: {
          name,
          relative: path.relative(dest, src).replace(extname, ''),
          varName: varNameChanged ? name + '_' : name,
          varNameChanged,
        },
        force: false,
        mkdirp: true,
        mode: '644',
        path: path.resolve(dest, basename + suffix + extname),
        tmpl: TMPL_PATH,
      }
    })
}

test.dir = function testDir(config) {
  const {
    cjs = config.node,
    dest = process.cwd(),
    ext = cjs ? '.js' : '.mjs',
    src,
  } = config
  const TMPL_PATH = cjs ? _tmpl('cjs_test.hbs') : _tmpl('test.hbs')
  ok(!!src, 'config.src is required.')
  let suffix = 'Test'
  return [].concat(src).map((src) => ({
    data: {
      name: path.basename(src),
      relative: path.relative(dest, src),
    },
    force: false,
    mkdirp: true,
    mode: '644',
    path: path.resolve(dest, path.basename(src) + suffix) + ext,
    tmpl: TMPL_PATH,
  }))
}

module.exports = test
