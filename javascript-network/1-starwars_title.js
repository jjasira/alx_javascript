const request = require("request");

const getMovieTitle = (movieId) => {
  const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error(`Error: ${error.message}`);
    } else if (response.statusCode !== 200) {
      console.error(`Error: Unexpected status code ${response.statusCode}`);
    } else {
      try {
        const movieData = JSON.parse(body);
        console.log(`${movieData.title}`);
      } catch (parseError) {
        console.error(`Error parsing JSON: ${parseError.message}`);
      }
    }
  });
};

const movieId = process.argv[2];
getMovieTitle(movieId);
