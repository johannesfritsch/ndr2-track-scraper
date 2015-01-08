var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var PageDownloader = require('../lib/pageDownloader');

describe('pageDownloader', function(){
  it('initializes with a urlGenerator', function(){
    urlGenerator = { next: function(){ return 'http://www.google.de' } }
    mockUrlGenerator = sinon.mock(urlGenerator);
    mockUrlGenerator.expects("next").once();

    pageDownloader = new PageDownloader(urlGenerator);
    pageDownloader.start();

    mockUrlGenerator.verify();
  });
});