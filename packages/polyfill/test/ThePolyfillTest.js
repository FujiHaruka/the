'use strict'
/**
 * Test for ThePolyfill.
 * Runs with mocha.
 */
const { equal, ok } = require('assert').strict
const ThePolyfill = require('../lib/ThePolyfill')

describe('the-polyfill', () => {
  before(() => {})

  after(() => {})

  it('Do test', () => {
    ok(ThePolyfill)

    const polyfill = new ThePolyfill()
    const bound = polyfill.bind()
    bound()
  })

  it('Fake proxy', () => {
    const Proxy = require('proxy-polyfill/src/proxy')
    const p = new Proxy({ a: 1 })
    ok(p)
    p.x = 1
    Object.assign(p, { z: 2 })
    equal(p.x, 1)
    equal(p.z, 2)
  })
})

/* global describe, before, after, it */
