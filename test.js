const assert = require('node:assert/strict')
const test = require('node:test')
const {iso6393} = require('./index.js')

test('iso6393', function () {
  assert.ok(Array.isArray(iso6393), 'should be an `array`')

  const eng = iso6393.find((d) => d.iso6393 === 'eng')

  assert(eng, 'should contain `eng`')

  assert.equal(eng.iso6393, 'eng', 'should have a 639-3 code')
  assert.equal(eng.iso6392B, 'eng', 'should have a 639-2B code')
  assert.equal(eng.iso6392T, 'eng', 'should have a 639-2T code')
  assert.equal(eng.iso6391, 'en', 'should have a 639-1 code')
  assert.equal(eng.scope, 'individual', 'should have a scope')
  assert.equal(eng.type, 'living', 'should have a type')
  assert.equal(eng.name, 'English', 'should have a name')
})
