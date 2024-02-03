const request = require("request");

const countMoviesWithWedgeAntilles = (apiUrl) => {
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error(`Error: ${error.message}`);
    } else if (response.statusCode !== 200) {
      console.error(`Error: Unexpected status code ${response.statusCode}`);
    } else {
      try {
        const filmsData = JSON.parse(body);
        const moviesWithWedgeAntilles = filmsData.results.filter((film) =>
          film.characters.includes(
            "https://swapi-api.alx-tools.com/api/people/18/"
          )
        );
        console.log(`${moviesWithWedgeAntilles.length}`);
      } catch (parseError) {
        console.error(`Error parsing JSON: ${parseError.message}`);
      }
    }
  });
};

const apiUrl = process.argv[2];
countMoviesWithWedgeAntilles(apiUrl);
