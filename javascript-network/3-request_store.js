const request = require("request");
const fs = require("fs");

const fetchAndSaveWebpage = (url, path) => {
  request(url, (error, reponse, body) => {
    if (error) {
      console.error(`Error: ${error.message}`);
    } else if (response.statusCode !== 200) {
      console.error(`Error: Unexpected status code ${response.statusCode}`);
    } else {
      try {
        fs.writeFileSync(path, body, "utf-8");
        console.log(`Webpage content saved to ${path}`);
      } catch (writeError) {
        console.error(`Error writing to file: ${writeError.message}`);
      }
    }
  });
};

const url = process.argv[2];
const path = process.argv[3];
fetchAndSaveWebpage(url, path);
