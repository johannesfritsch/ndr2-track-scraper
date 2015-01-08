var cheerio = require('cheerio');

tracksParser = function(doc) {
  var trackParsedFunc;
  return {
    trackParsed: function(cb) { 
      trackParsedFunc = cb
    },
    start: function(){
      var $ = cheerio.load(doc);
      var date = $('#playlist h2').text().trim().match(/([0-9][0-9]).([0-3][0-9]).([2][0][0-9][0-9])/);
      $('li.program').each(function(i, element){
        var time = $('strong.time', element).text().match(/([0-6][0-9]):([0-5][0-9])/);
        if(trackParsedFunc) {
          trackParsedFunc({
            playedAt: new Date(parseInt(date[3]), parseInt(date[2] - 1), parseInt(date[1]), parseInt(time[1]), parseInt(time[2])),
            artist: $('.details h3 span.artist', element).text(),
            title: $('.details h3 span.title', element).text()
          });
        }
      });
    }
  }
}

module.exports = tracksParser;