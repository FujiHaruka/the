'use strict'
/**
 * Make object keys to lower
 * @memberof module:@the-/util-db
 * @function toLowerKeys
 * @param {Object} obj
 * @returns {Object}
 */
const { snakecase } = require('stringcase')

/** @lends module:@the-/util-db.toLowerKeys */
function toLowerKeys(obj = {}) {
  return Object.keys(obj).reduce(
    (result, name) => ({
      ...result,
      [snakecase(name).toLowerCase()]: obj[name],
    }),
    {},
  )
}

module.exports = toLowerKeys
