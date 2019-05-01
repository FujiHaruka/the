/**
 * withBusy mixin
 * @function withBusy
 * @param {function} Class - Class to mix
 * @returns {function} Mixed class
 */
'use strict'

const asleep = require('asleep')
const asClassMixin = require('./helpers/asClassMixin')
const asMethodWrap = require('./helpers/asMethodWrap')
const injectProperties = require('./helpers/injectProperties')

/** @lends withBusy */
const withBusy = asClassMixin((Class) => {
  injectProperties(Class, {
    /**
     * Wait busy for
     * @param {number} duration
     * @returns {Promise<undefined>}
     */
    async busyFor(duration = 0) {
      this.set({ busy: true })
      await asleep(duration)
      this.set({ busy: false })
    },
    /**
     * Set busy true while task active
     * @param {Function} task
     * @returns {Promise<undefined>}
     */
    async busyWhile(task) {
      this.set({ busy: true })
      try {
        return await task.call(this)
      } finally {
        this.set({ busy: false })
      }
    },
    /**
     * Is busy or not
     * @returns {boolean}
     */
    isBusy() {
      return this.get('busy')
    },
    /**
     * Wait while busy
     * @returns {Promise<undefined>}
     */
    async waitWhileBusy() {
      await asleep(1)
      while (this.isBusy()) {
        await asleep(1)
      }
    },
  })
})

module.exports = Object.assign(
  withBusy,
  /** @lends withBusy */
  {
    sequential: asMethodWrap((method) => {
      return async function busyWhileWrap(...args) {
        await this.waitWhileBusy()
        return method.apply(this, args)
      }
    }),
    while: asMethodWrap((method) => {
      return async function busyWhileWrap(...args) {
        return this.busyWhile(async () => method.apply(this, args))
      }
    }),
  },
)
