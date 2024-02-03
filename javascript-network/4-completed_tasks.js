const request = require("request");

const completedTasksByUser = (apiUrl) => {
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error(`Error: ${error.message}`);
    } else if (response.statusCode !== 200) {
      console.error(`Error: Unexpected status code ${response.statusCode}`);
    } else {
      try {
        const todos = JSON.parse(body);
        const completedTasksByUser = {};

        todos.forEach((todo) => {
          if (todo.completed) {
            if (completedTasksByUser[todo.userId]) {
              completedTasksByUser[todo.userId]++;
            } else {
              completedTasksByUser[todo.userId] = 1;
            }
          }
        });

        console.log(completedTasksByUser);
      } catch (parseError) {
        console.error(`Error parsing JSON: ${parseError.message}`);
      }
    }
  });
};

const apiUrl = process.argv[2];
completedTasksByUser(apiUrl);
