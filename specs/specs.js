var expect = require('chai').expect
var crockpot = require('../index')

var testParams = require('./testList')

describe('roman to decimal |', function () {
  testParams.decimalNumeral.forEach(function (param) {
    it('translates ' + param.numeral + ' to decimal', function () {
      expect(crockpot.roman.toDecimal(param.numeral)).to.equal(param.decimal)
    })
  })

  it('handles wrong object types', function () {
    expect(crockpot.roman.toDecimal('horse')).to.equal(null)
  })
})

describe('decimal to roman |', function () {
  testParams.decimalNumeral.forEach(function (param) {
    it('translates ' + param.decimal + ' to numeral', function () {
      expect(crockpot.decimal.toRoman(param.decimal)).to.equal(param.numeral)
    })
  })

  it('handles wrong object types', function () {
    expect(crockpot.decimal.toRoman('horse')).to.equal(null)
  })
})

describe('roman to engish |', function () {
  testParams.numeralEnglish.forEach(function (param) {
    it('translates ' + param.numeral + ' to english', function () {
      expect(crockpot.roman.toEnglish(param.numeral)).to.equal(param.english)
    })
  })
})

describe('english to roman |', function () {
  testParams.numeralEnglish.forEach(function (param) {
    it('translates ' + param.english + ' to roman numerals', function () {
      expect(crockpot.english.toRoman(param.english)).to.equal(param.numeral)
    })
  })
})

describe('decimal to engish |', function () {
  testParams.decimalEnglish.forEach(function (param) {
    it('translates ' + param.decimal + ' to english', function () {
      expect(crockpot.decimal.toEnglish(param.decimal)).to.equal(param.english)
    })
  })
})

describe('english to decimal', function () {
  testParams.decimalEnglish.forEach(function (param) {
    it('translates ' + param.english + ' to decimal', function () {
      expect(crockpot.english.toDecimal(param.english)).to.equal(param.decimal)
    })
  })
})

describe('binary to english', function () {
  testParams.binaryDecimal.forEach(function (param) {
    it('translates ' + param.binary + ' to english', function () {
      expect(crockpot.binary.toEnglish(param.binary)).to.equal(param.english)
    })
  })
})

describe('english to binary', function () {
  testParams.binaryDecimal.forEach(function (param) {
    it('translates ' + param.english + ' to binary', function () {
      expect(crockpot.english.toBinary(param.english)).to.equal(param.binary)
    })
  })
})

