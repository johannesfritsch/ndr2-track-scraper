var chai = require('chai');
var expect = chai.expect;

var logger = require('../lib/logger');

describe('logger', function(){

  it('is an object', function(){
    expect(logger).to.be.an('object');
  });

});