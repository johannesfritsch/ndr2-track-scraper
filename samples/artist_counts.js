db.tracks.mapReduce(
  function(){ 
    emit(this.artist, 1); 
  }, 
  function(key, values){ 
    return Array.sum(values);  
  }, { 
    out: 'artist_counts' 
  }
);