const request = require('request');
const moment = require('moment');
const fs = require('fs');
let eventThis = function(artist){
  let url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  request.get(url, (err, response, body)=>{
    if(!err && response.statusCode === 200){
      let data = [];
      concertInfo = JSON.parse(body);
      console.log('in if statement');
      concertInfo.forEach(event=>{
        data.push({venue: event.venue.name,
                   location: event.venue.city+', '+event.venue.region+', '+event.venue.country,
                   date: moment(event.datetime).format('MM/DD/YYYY')});

      });
      // console.log(body);
      console.log(data);
      fs.appendFile('./log.txt','\n Concert-this: ' +artist +', response is: ', 'utf8', err=>{
        if(err) throw err;
      });
      let temp = JSON.stringify(data);
      fs.appendFile('./log.txt', temp, 'utf8', err=>{
        if(err) throw err;
      });
      return data;
    }else{
      console.log('errror',err);
      console.log('status code: ',response.statusCode);
    }
  });
}

module.exports = eventThis;