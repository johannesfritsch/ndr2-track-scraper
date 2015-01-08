var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ndr2');

var Track = mongoose.model('Track', { 
  playedAt: Date,
  artist: String,
  title: String
});

trackService = function() {
  return {
    exists: function(trackData, callback){
      Track.find({ playedAt: trackData.playedAt }, function(err, tracks) {
        callback(null, tracks.length > 0);
      });
    },
    create: function(trackData, callback){
      Track.create(trackData, function(err, track){
        callback(err, trackData);
      })
    }
  }
}

module.exports = trackService;