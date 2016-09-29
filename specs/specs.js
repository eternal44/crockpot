var expect = require('chai').expect;
var crockpot = require('../index');

var testParams = require('./testList')

describe('roman to decimal |', function(){
  testParams.decimalNumeral.forEach(function(param){
    it('translates ' + param.numeral + ' to decimal', function(){
      expect(crockpot.roman.toDecimal(param.numeral)).to.equal(param.decimal);
    })
  })

  it('handles wrong object types', function(){
    expect(crockpot.roman.toDecimal("horse")).to.equal(null);
  })
});

describe('decimal to roman |', function(){
  testParams.decimalNumeral.forEach(function(param){
    it('translates ' + param.decimal + ' to numeral', function(){
      expect(crockpot.decimal.toRoman(param.decimal)).to.equal(param.numeral);
    })
  })

  it('handles wrong object types', function(){
    expect(crockpot.decimal.toRoman("horse")).to.equal(null);
  })
});

describe('decimal to roman |', function(){
  testParams.numeralEnglish.forEach(function(param){
    it('translates ' + param.numeral + ' to numeral', function(){
      expect(crockpot.roman.toEnglish(param.numeral)).to.equal(param.english);
    })
  })
})

describe('roman to engish |', function(){
  testParams.numeralEnglish.forEach(function(param){
    it('translates ' + param.numeral + ' to numeral', function(){
      expect(crockpot.roman.toEnglish(param.numeral)).to.equal(param.english);
    })
  })
})

describe('decimal to engish |', function(){
  testParams.decimalEnglish.forEach(function(param){
    it('translates ' + param.decimal + ' to numeral', function(){
      expect(crockpot.decimal.toEnglish(param.decimal)).to.equal(param.english);
    })
  })
})

