'use strict'

/**
 * Find randomly
 * @memberof module:@the-/util-array
 * @function shuffleSort
 * @returns {function()}
 * @example
 *   [1,2,3].sort(shuffleSort())
 */
/** @lends module:@the-/util-array.shuffleSort */
function shuffleSort() {
  if (arguments.length > 2) {
    throw new Error('[shuffleSort] Invalid args.')
  }

  return function sort() {
    return Math.random() > 0.5 ? 1 : -1
  }
}

module.exports = shuffleSort
