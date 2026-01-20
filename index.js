/**
 * @typedef {import('./iso6393.js').Type} Type
 * @typedef {import('./iso6393.js').Scope} Scope
 * @typedef {import('./iso6393.js').Language} Language
 */

const {iso6393} = require('./iso6393.js')
const {iso6393To1} = require('./iso6393-to-1.js')
const {iso6393To2B} = require('./iso6393-to-2b.js')
const {iso6393To2T} = require('./iso6393-to-2t.js')

module.exports = {iso6393, iso6393To1, iso6393To2B, iso6393To2T}
