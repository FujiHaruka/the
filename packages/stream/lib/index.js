// Code generated by coz. DO NOT EDIT.
/**
 * @module @the-/stream
 * @version 15.4.5
 * @description Base of the streams
 * @typicalname stream
 * @license MIT
 */
'use strict'

const Consumer_ = require('./Consumer')
const Provider_ = require('./Provider')
const TheStream_ = require('./TheStream')
const helpers_ = require('./helpers')

// `module.exports` overrides these `exports.*`, but still needs them for lebab (https://github.com/lebab/lebab)
exports.Consumer = Consumer_
exports.Provider = Provider_
exports.TheStream = TheStream_
exports.helpers = helpers_

module.exports = {
  Consumer: Consumer_,
  Provider: Provider_,
  TheStream: TheStream_,
  helpers: helpers_,
}
