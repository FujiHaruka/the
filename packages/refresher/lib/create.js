/**
 * Create a TheRefresher instance
 * @memberof module:@the-/refresher
 * @function create
 * @param {...*} args
 * @returns {TheRefresher}
 */
'use strict'

const TheRefresher = require('./TheRefresher')

/** @lends module:@the-/refresher.create */
function create(...args) {
  return new TheRefresher(...args)
}

module.exports = create
