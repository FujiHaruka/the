/**
 * Scene
 * @function Scene
 * @param {Object} config
 * @returns {Object}
 */
'use strict'

const assert = require('assert')
const path = require('path')
const { snakecase } = require('stringcase')
const _tmpl = require('./_tmpl')

/** @lends Scene */
function Scene(config) {
  const { cjs = false, name } = config
  assert(name, 'name is required')

  const tmpl = _tmpl(cjs ? 'cjs_Scene.hbs' : 'Scene.hbs')
  return {
    data: {
      name: path.basename(name) + 'Scene',
      scopePath: snakecase(name).replace(/_/g, '.'),
    },
    force: false,
    mode: '644',
    path: `${name}Scene.js`,
    tmpl,
  }
}

module.exports = Scene
