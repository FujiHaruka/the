'use strict'
/**
 * Test for changeExt.
 * Runs with mocha.
 */
const { equal } = require('assert').strict
const changeExt = require('../lib/changeExt')

describe('change-ext', () => {
  before(() => {})

  after(() => {})

  it('Do test', () => {
    equal(changeExt('hoge.txt', '.raw'), 'hoge.raw')
  })
})

/* global describe, before, after, it */
