'use strict'

const { TheCtrl } = require('@the-/controller')
const { withAuthorized } = require('@the-/mixin-controller')

async function tryExample() {
  class MyCtrl extends withAuthorized(TheCtrl) {
    /* ... */
  }
}

tryExample().catch((err) => console.error(err))