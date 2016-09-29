var fromRoman = require('crockpot-fromRoman')
var toEnglish = require('crockpot-toEnglish')

var crockPot = {
  'roman': {
    'toEnglish': function(numeral){
      // TODO: since decimals are our proxy -- how can we keep from
      // repeating references to code?  Look up testing assertion libraries:
        // ex:  '.toBe.equal'

      var temp = fromRoman(numeral);// converts numeral to decimal integer
      return toEnglish(temp); // converts decimal integer to english
    }
  }
}
