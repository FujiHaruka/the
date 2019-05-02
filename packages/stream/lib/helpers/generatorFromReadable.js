/**
 * Create generator from readable
 * @memberof module:@the-/stream.helpers
 * @function generatorFromReadable
 */
'use strict'

/** @lends module:@the-/stream.generatorFromReadable */
function generatorFromReadable(readable) {
  const generator = {
    [Symbol.asyncIterator]: () => generator,
    next: async () => {
      if (readable.closed) {
        return { done: true, value: void 0 }
      }
      const { done, value } = await readable.read()
      return { done, value }
    },
  }
  return generator
}

module.exports = generatorFromReadable
