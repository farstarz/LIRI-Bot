# LIRI-Bot

LIRI-Bot helps you find more information about some your most favourite things to do.
You can search for the following using LIRI-Bot:
1. Concert-this
2. Spotify-this-song
3. Movie-this
4. Do-what-it-says

## Concert-this
This option lets to search for concerts of any artist of your choice. It prints and logs the following information about the concert:
- Venue
- Location
- Date
It also logs the same information to log.txt file for historical purpose along with the user choice and input.

## Spotify-this-song
This option uses the spotify api to get data about the track the user searches for. It prints the following information about the track:
- name of the song
- album of the song
- artists
- preview link to spotify song
It also logs the same information to log.txt file for historical purpose along with the user choice and input.

## Movie-this
This option uses the OMDB api to get the data about the movie user searched for. It prints the following information about the track:
- Title
- year
- IMDB Rating
- Rotten Tomatoes Rating
- Country of Production
- Language
- Plot of the movie
- Actors
It also logs the same information to log.txt file for historical purpose along with the user choice and input.

## Do-what-it-say
This options checks the file random.txt and splice it into an array by delimiting the text at ",". 
It takes the zero index of the array as the command and first index as the command parameter and execute the command.
It also logs the same information to log.txt file for historical purpose along with the user choice and input.