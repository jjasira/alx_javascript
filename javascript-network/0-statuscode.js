const request = require("request");
const url = process.argv[2];

const getStatus = (url) => {
  request(url, (error, response) => {
    if (error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.log(`code: ${response.statusCode}`);
    }
  });
};

getStatus(url);
