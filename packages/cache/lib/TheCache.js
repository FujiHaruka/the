'use strict'
/**
 * @memberof module:@the-/cache
 * @class TheCache
 * @augments LRUCache
 * @see https://github.com/isaacs/node-lru-cache#readme
 */
const LRUCache = require('lru-cache')

/** @lends module:@the-/cache.TheCache */
class TheCache extends LRUCache {}

module.exports = TheCache
