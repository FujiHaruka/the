'use strict'
/**
 * Compound tow locales
 * @function toCompoundLocale
 * @param {Object}
 * @private
 * @memberOf module:@the-/loc.helpers
 * @returns {Object}
 */
const { flatten } = require('objnest')

/** @lends toCompoundLocale */
function toCompoundLocale(src) {
  return Object.assign(
    {},
    ...Object.keys(src)
      .reduce((kv, lang) => {
        const data = flatten(src[lang])
        return [
          ...kv,
          ...Object.keys(data).map((name) => [`${name}*${lang}`, data[name]]),
        ]
      }, [])
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, v]) => ({
        [k]: v,
      })),
  )
}

module.exports = toCompoundLocale
