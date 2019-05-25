'use strict'
/**
 * Alias of {@link module:@the-/store}
 * @memberof module:@the-/store
 * @function create
 */
const create = require('./create')
const helpers = require('./helpers')
const TheStore = require('./TheStore')

const lib = create.bind(create)

// `module.exports` overrides these `exports.*`, but still needs them for lebab (https://github.com/lebab/lebab)
exports.TheStore = TheStore
exports.helpers = helpers
exports.create = create

module.exports = Object.assign(lib, {
  TheStore,
  create,
  helpers,
})
