/**
 * Mixin for assert
 * @memberof module:@the-/rtc.constants.mixins
 * @function assertMix
 * @param {function} Class
 * @returns {function} Class
 */
'use strict'

/** @lends module:@the-/rtc.constants.mixins.assertMix */
function assertMix(Class) {
  class AssertMixed extends Class {
    assertHasRoom() {
      if (!this.room) {
        throw new Error(`[TheRTCClient] Needs to join room`)
      }
    }

    assertNotHasRoom() {
      if (this.room) {
        throw new Error(`[TheRTCClient] Already to joined to room`)
      }
    }
  }

  return AssertMixed
}

module.exports = assertMix
