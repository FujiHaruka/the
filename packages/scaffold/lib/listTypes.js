/**
 * @memberof module:@the-/scaffold
 * @function listTypes
 */
'use strict'

const { EOL } = require('os')

/** @lends module:@the-/scaffold.listTypes */
function listTypes(tmpls) {
  console.log(`${EOL}$ the-scaffold <type> <dest>${EOL}`)
  let types = Object.keys(tmpls)
    .map((type) => `  ${type}`)
    .join(EOL)
  console.log(`Available types: ${EOL}${EOL}${types}${EOL}`)
}

module.exports = listTypes
