'use strict'
/**
 * Detect iOS or not
 * @memberof module:@the-/check
 * @function isiOS
 * @returns {boolean}
 */
const Bowser = require('bowser')
const getUserAgent = require('./helpers/getUserAgent')

/** @lends module:@the-/check.isiOS */
function isiOS(options = {}) {
  const { userAgent = getUserAgent() } = options
  if (!userAgent) {
    return false
  }
  const browser = Bowser.getParser(userAgent)
  return browser.isOS('iOS')
}

isiOS.webview = (options = {}) => {
  const { userAgent = getUserAgent() } = options
  const browser = Bowser.getParser(userAgent)
  if (!isiOS({ userAgent })) {
    return false
  }
  const isSafari = browser.isBrowser('Safari')
  const version = browser.getBrowserVersion()
  // ios webview detected as safari without version
  // https://github.com/lancedikson/bowser/issues/222#issuecomment-400822271
  return !!isSafari && !version
}

module.exports = isiOS
