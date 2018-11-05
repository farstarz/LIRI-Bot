require("dotenv").config();
const inquirer = require('inquirer');
const movieThis = require('./omdb.js');
const spotifyThis = require('./spotify.js');
const eventThis = require('./eventThis.js');
const doIt = require('./doIt.js');

inquirer
  .prompt([
    {
      name: 'whatToDo',
      message: 'What do you want to do?',
      type: 'checkbox',
      choices: ['Concert-this', 'Spotify-this-song', 'Movie-this', 'Do-what-it-says']
    }
  ])
  .then(response=>{
    console.log(response);
    if(response.whatToDo[0] === 'Movie-this'){
      inquirer
        .prompt([
          {
            name: 'keyword',
            type: 'input',
            message: 'Which Movie do you want to search for?'
          }
        ])
        .then((response)=>{
          return movieThis(response.keyword);
        });
      
    }
    if(response.whatToDo[0] === 'Spotify-this-song'){
      inquirer
        .prompt([
          {
            name: 'keyword',
            type: 'input',
            message: 'Which Song do you want to search for?'
          }
        ])
        .then((response)=>{
          return spotifyThis(response.keyword);
        });
    }
    if(response.whatToDo[0] === 'Concert-this'){
      inquirer
        .prompt([
          {
            name: 'keyword',
            type: 'input',
            message: 'Which Concert do you want to search for?'
          }
        ])
        .then((response)=>{
          return eventThis(response.keyword);
        });
    }
    if(response.whatToDo[0] === 'do-what-it-says'){
      return doIt();
    }
  });

// if(process.argv[2] === 'Movie-this'){
//   return movieThis(process.argv[3]);
// }
// if(process.argv[2] === 'Spotify-this-song'){
//   return spotifyThis(process.argv[3]);
// }
// if(process.argv[2] === 'Concert-this'){
//   return eventThis(process.argv[3]);
// }
// if(process.argv[2] === 'do-what-it-says'){
//   return doIt();
// }