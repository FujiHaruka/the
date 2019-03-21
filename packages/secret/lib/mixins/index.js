// Code generated by coz. DO NOT EDIT.
/**
 * Mix functions
 * @module mixins
 */
'use strict'

const cryptoMix_ = require('./cryptoMix')
const lockMix_ = require('./lockMix')

// `module.exports` overrides these `exports.*`, but still needs them for lebab (https://github.com/lebab/lebab)
exports.cryptoMix = cryptoMix_
exports.lockMix = lockMix_

module.exports = {
  cryptoMix: cryptoMix_,
  lockMix: lockMix_,
}
