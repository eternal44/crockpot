var toEnglish = require('crockpot-toEnglish')
var toRoman = require('crockpot-toRoman')
var fromRoman = require('crockpot-fromRoman')
var fromEnglish = require('crockpot-fromEnglish')

var crockPot = {
  'roman': {
    'toEnglish': function (numeral) {
      var temp = fromRoman(numeral)
      return toEnglish(temp)
    },
    'toDecimal': function (numeral) {
      return fromRoman(numeral)
    }
  },
  'decimal': {
    'toRoman': function (num) {
      return toRoman(num)
    },
    'toEnglish': function (num) {
      return toEnglish(num)
    }
  },
  'english': {
    'toDecimal': function (string) {
      return fromEnglish(string)
    },
    'toRoman': function (string) {
      var temp = fromEnglish(string)
      return toRoman(temp)
    }
  }
}

module.exports = crockPot
