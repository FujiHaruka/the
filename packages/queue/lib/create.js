/**
 * Create a TheQueue instance
 * @memberof module:@the-/queue
 * @function create
 * @param {...*} args
 * @returns {TheQueue}
 */
'use strict'

const TheQueue = require('./TheQueue')

/** @lends module:@the-/queue.create */
function create(...args) {
  return new TheQueue(...args)
}

module.exports = create
