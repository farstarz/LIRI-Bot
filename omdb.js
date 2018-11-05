const request = require('request');
const fs = require('fs');
let movieThis = function(title){
  let url = `http://www.omdbapi.com/?apikey=trilogy&t=${title}`;
  // console.log(url);
  let data = {};
  request.get(url, (err,response,body)=>{
    if (!err && response.statusCode === 200) {
      let resp = JSON.parse(body);
      // console.log(resp);
      data = {title: resp.Title,
              year: resp.Year,
              iMDB: resp.imdbRating,
              rottenT: resp.Ratings[1].Value,
              country: resp.Country,
              language: resp.Language,
              plot: resp.Plot,
              actors: resp.Actors
      };
      console.log(data);
      fs.appendFile('./log.txt','\n Movie-this: ' +title +', response is: ', 'utf8', err=>{
        if(err) throw err;
      });
      let temp = JSON.stringify(data);
      fs.appendFile('./log.txt', temp, 'utf8', err=>{
        if(err) throw err;
      });
      return data;
    }else{
      console.log(err);
      return 0;
    }
  });
  // console.log(data);  
  
}

module.exports = movieThis;
