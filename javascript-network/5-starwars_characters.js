const request = require("request");

const getMovieCast = (movieId) => {
  const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error(`Error: ${error.message}`);
    } else if (response.statusCode !== 200) {
      console.error(`Error: Unexpected status code ${response.statusCode}`);
    } else {
      try {
        const movieData = JSON.parse(body);
        const characterUrls = movieData.characters;

        characterUrls.forEach((charcterUrl) => {
          request(
            characterUrl,
            (characterError, characterResponse, characterBody) => {
              if (characterError) {
                console.error(
                  `Error fetching character: ${characterError.message}`
                );
              } else if (characterResponse.statusCode !== 200) {
                console.error(
                  `Error: Unexpected status code ${characterResponse.statusCode}`
                );
              } else {
                try {
                  const characterData = JSON.parse(characterBody);
                  console.log(characterData.name);
                } catch (characterParseError) {
                  console.error(
                    `Error parsing character JSON: ${characterParseError.message}`
                  );
                }
              }
            }
          );
        });
      } catch (parseError) {
        console.error(`Error parsing movie JSON: ${parseError.message}`);
      }
    }
  });
};

const movieId = process.argv[2];
getMovieCast(movieId);
