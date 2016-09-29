var toEnglish = require('crockpot-toEnglish')
var toRoman = require('crockpot-toRoman')
var fromRoman = require('crockpot-fromRoman');

var crockPot = {
  'roman': {
    'toEnglish': function(numeral) {
      var temp = fromRoman(numeral);
      return toEnglish(temp);
    },
    'toDecimal': function(numeral) {
      return fromRoman(numeral)
    }
  },
  'decimal': {
    'toRoman': function(num) {
      return toRoman(num)
    },
    'toEnglish': function(num) {
      var temp = toRoman(num)
      temp =  fromRoman(temp)
      return toEnglish(temp)
    }
  }
}

module.exports = crockPot
