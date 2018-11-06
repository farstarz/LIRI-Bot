const fs = require('fs');
const spotifyThis = require('./spotify.js');
const movieThis = require('./omdb.js');
const eventThis = require('./eventThis.js');
let doIt = function(){
  let read = fs.readFile('./random.txt', 'utf8', (err, data)=>{
    if(!err){
      let array = data.split(',');
      if(array[0] === 'Movie-this'){
        return movieThis(array[1]);
      }
      if(array[0] === 'Spotify-this-song'){
        return spotifyThis(array[1]);
      }
      if(array[0] === 'Concert-this'){
        return eventThis(array[1]);
      }
      console.log(array);

    }else{
      console.log(err);
    }
  });
}

module.exports = doIt;