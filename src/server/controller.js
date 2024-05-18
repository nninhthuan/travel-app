const pixabay_apikey = '43873101-4d2e2dfcba092b00e7548a57e';
const weatherbit_apikey = '0fa1512f75ae4d4a83a2300568f6d981';

async function sendAPIKeyPixabay (req, res) {
  res.send(pixabay_apikey);
}

async function sendAPIKeyWeatherBit (req, res) {
  res.send(weatherbit_apikey);
}

module.exports = sendAPIKeyPixabay;
module.exports = sendAPIKeyWeatherBit;