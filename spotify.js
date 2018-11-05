var Spotify = require('node-spotify-api');
const fs = require('fs');
let spotifyThis = function(track){ 
  var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  });
  
  spotify.search({ type: 'track', query: track  }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    let allTracks = [];
    data.tracks.items.forEach(item => {
      let tempArtists = [];
      item.artists.forEach(artist=>{tempArtists.push(artist.name)});
      let response = {name: item.name,
                      album: item.album.name,
                      artists: tempArtists,
                      preview: item.preview_url
      }
      allTracks.push(response);
    });
    
    console.log(allTracks); 
    fs.appendFile('./log.txt','\n Spotify-this: ' +track +', response is: ', 'utf8', err=>{
      if(err) throw err;
    });
    let temp = JSON.stringify(allTracks);
    fs.appendFile('./log.txt', temp, 'utf8', err=>{
      if(err) throw err;
    });
    return allTracks;
  });
}

module.exports = spotifyThis;