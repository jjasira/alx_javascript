const request = require("request");
const movieId = process.argv[2];

request(
  `https://swapi-api.alx-tools.com/api/films/:${movieId}`,
  (error, response, body) => {
    if (error) {
      console.error(`Error: ${error.message}`);
    } else if (response.statusCode != 200) {
      console.log(`Error: Unexpected status code ${response.statusCode}`);
    } else {
      try {
        const movieData = JSON.parse(body);
        console.log(`Title: ${movieData.title}`);
      } catch (parseError) {
        console.error(`Error parsing JSON: ${parseError.message}`);
      }
    }
  }
);
