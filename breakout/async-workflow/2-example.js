const request = require('request');

const getData = () => {
  let data = null;
  request('http://www.google.com', function (error, response, body) {
    // console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.

    data = body;
  });
  return data;
};

const data = getData();
console.log(data);

const getRandomNumber = () => {
  let randomNumber = null;
  setTimeout(() => {
    randomNumber = Math.ceil(Math.random() * 10);
  }, 3000);
  return randomNumber;
};

const randomNumber = getRandomNumber();
console.log(randomNumber);
