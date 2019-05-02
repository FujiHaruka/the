/**
 * Create a TheSeal instance
 * @memberof module:@the-/seal
 * @function create
 * @param {...*} args
 * @returns {TheSeal}
 */
'use strict'

const TheSeal = require('./TheSeal')

/** @lends module:@the-/seal.create */
function create(...args) {
  return new TheSeal(...args)
}

module.exports = create
