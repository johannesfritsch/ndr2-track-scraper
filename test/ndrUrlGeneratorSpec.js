var chai = require('chai');
var expect = chai.expect;
var logger = require('../lib/logger');

var NdrUrlGenerator = require('../lib/ndrUrlGenerator');

describe('ndrUrlGenerator', function(){
  it('does not initialize without a date', function(){
  	expect(function(){ new NdrUrlGenerator(); }).to.throw();
  });

  it('initializes with a date', function(){
  	expect(function(){ new NdrUrlGenerator(new Date()); }).to.not.throw();
  });

  it('returns the startDate on first next call', function(){
  	var now = new Date();
  	var generator = new NdrUrlGenerator(now);
    var url = generator.next();
    expect(url).to.match(/^http:\/\/www.ndr.de\/ndr2\/programm\/titelliste1202.html/);
    expect(url).to.include(now.getFullYear().toString());
    expect(url).to.include(now.getMonth().toString());
    expect(url).to.include(now.getDate().toString());
    expect(url).to.include(now.getHours().toString());
  });

  it('returns the startDate plus one hour on second next call', function(){
  	var now = new Date(1984, 9, 17, 0,0,0);
  	var generator = new NdrUrlGenerator(now);
  	generator.next();
  	var nowPlusOne = new Date(now.valueOf());
    nowPlusOne.setHours(nowPlusOne.getHours() + 1);
    var url = generator.next();
  	expect(url).to.match(/^http:\/\/www.ndr.de\/ndr2\/programm\/titelliste1202.html/);
    expect(url).to.include(nowPlusOne.getFullYear().toString());
    expect(url).to.include(nowPlusOne.getMonth().toString());
    expect(url).to.include(nowPlusOne.getDate().toString());
    expect(url).to.include(nowPlusOne.getHours().toString());
  });

  it('never returns future date urls', function(){
    var now = new Date(3000, 1, 1);
    var generator = new NdrUrlGenerator(now);
    var url = generator.next();
    expect(url).to.be.null();
  });  
});