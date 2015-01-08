db.tracks.mapReduce( 
  function(){  
    emit(this.artist + ' - ' + this.title, 1);  
  },  
  function(key, values){  
    return Array.sum(values);   
  }, {  
    out: 'title_counts'  
  } 
);