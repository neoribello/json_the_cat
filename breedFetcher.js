const request = require('request');


const fetchBreedDescription = function(breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
    }
    const data = JSON.parse(body);
    //if the breed exists
    if (data[0]) {
      //null removes the error created in input.js | callback acts as the display
      callback(null, data[0].description);
    } else {
      callback(null, `Can't find the breed ${breed}`);
    }
  });
};

module.exports = { fetchBreedDescription };