const fetchUserUrl = 'https://jsonplaceholder.typicode.com/todos?completed=true';
const request = require('request');
const https = require('https');

const fetchUser = () => {
    request(fetchUserUrl, (err, response, body) => {
        if (err) {
            throw new Error(err)
        } else {
            let users = JSON.parse(body);
              console.log(users);
            if (!users.length)
                Return;
        /*    request(`${fetchUserUrl}`, (err, response, results) => {
                if (err) {
                    throw new Error(err)
                } else {
                    console.log(results);
                }
            });*/
        }
    });
}
fetchUser();

/*
const https = require('https');

https.get(fetchUserUrl, (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
*/
