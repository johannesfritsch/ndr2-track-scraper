var logger = require('./lib/logger');
var UrlGenerator = require('./lib/ndrUrlGenerator');
var PageDownloader = require('./lib/pageDownloader');
var TracksParser = require('./lib/ndrTracksParser');
var TrackService = require('./lib/trackService');

startAt = new Date(2013, 7, 5, 19, 0);

var urlGenerator = new UrlGenerator(startAt);
var trackService = new TrackService();

var pageDownloader = new PageDownloader(urlGenerator);
pageDownloader.documentReady(function(doc){
  var tracksParser = new TracksParser(doc);
  tracksParser.trackParsed(function(trackData){
    logger.info(trackData);
    trackService.exists(trackData, function(err, exists){
      if(err) return logger.error('Could not check track duplicity');
      if(exists) return;
      trackService.create(trackData, function(err, track){ 
        if(err) return logger.error('Could not check track duplicity');
      });
    });
  });
  tracksParser.start();
});
pageDownloader.start();