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
      let rottenTomatoes = '';
      resp.Ratings.forEach(rating=>{
        if(rating.Source ==='Rotten Tomatoes'){
          rottenTomatoes = rating.Value;
          return rating.Value;
        }else{
          rottenTomatoes = rating.Value;
          return "N/A";
        }
      });
      // console.log(resp.Ratings[1].Source);
      data = {title: resp.Title,
              year: resp.Year,
              iMDB: resp.imdbRating,
              rottenT: rottenTomatoes,
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
