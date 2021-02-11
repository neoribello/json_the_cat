const request = require('request');

const args = process.argv.slice(2);
const breed = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  } else if (!error) {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});