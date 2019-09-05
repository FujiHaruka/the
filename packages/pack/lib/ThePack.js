'use strict'

const msgpack = require('msgpack-lite')
const Converters = require('./Converters')

const isBrowser = () =>
  typeof window !== 'undefined' && typeof document !== 'undefined'

/**
 * Pack handler
 * @memberof module:@the-/pack
 * @class ThePack
 */
class ThePack {
  constructor(options = {}) {
    this.decode = this.decode.bind(this)
    this.encode = this.encode.bind(this)
    const {
      converter = isBrowser()
        ? Converters.UInt8ArrayConverter
        : Converters.NoopConverter,
    } = options
    this.converter = converter
  }

  /**
   * Bind methods
   * @returns {Object}
   */
  bind() {
    return {
      decode: this.decode.bind(this),
      encode: this.encode.bind(this),
    }
  }

  /**
   * Decode buffer
   * @param {Buffer|ArrayBuffer} buffer - Buffer to decode
   * @returns {*} Decoded data
   */
  decode(buffer) {
    if (buffer === null) {
      return buffer
    }

    const { converter } = this
    try {
      const decoding = converter(buffer)
      return msgpack.decode(decoding)
    } catch (e) {
      const isBuffer =
        buffer instanceof ArrayBuffer || buffer instanceof Uint8Array
      if (!isBuffer) {
        return buffer
      }

      throw new Error(
        `[ThePack] Failed to decode buffer: ${buffer} (reason ${e.message})`,
      )
    }
  }

  /**
   * Encode data into buffer
   * @param {*} data - Encoded data
   * @returns {Buffer|ArrayBuffer} Encoded buffer
   */
  encode(data) {
    if (data === null) {
      return null
    }

    const { converter } = this
    try {
      const encoded = msgpack.encode(data)
      return converter(encoded)
    } catch (e) {
      throw new Error(`[ThePack] Failed to encode data: ${e.message}`)
    }
  }
}

module.exports = ThePack
