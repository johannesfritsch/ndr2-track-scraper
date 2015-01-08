var http = require('http');

pageDownloader = function(urlGenerator) {
  var documentReadyFunc;
  return {
    documentReady: function(cb) { 
      documentReadyFunc = cb
    },
    start: function(){
      while(url = urlGenerator.next()) {
        http.get(url, function(response) {
          if(response.statusCode == 200) {
            var html = '';
            response.on('data', function (chunk) {
              html += chunk;
            });
            response.on('end', function () {
              if(documentReadyFunc) {
                documentReadyFunc(html);
              }
            });
          }
        });
      }
    }
  }
}

module.exports = pageDownloader;