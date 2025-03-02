const sendAPIKeyWeatherBit = require('../controller');
const sendAPIKeyPixabay = require('../controller');

const body = {
  req: '',
  res: {
    send: () => {}
  }
}
const request = {
  body: {
    pixabay_apikey: ''
  },
  send: (pixabay_apikey) => {}
}
it('should return API Key for Pixabay', async () => {
  await sendAPIKeyPixabay(body, request);
});

it('should return API Key for WeatherBit', async () => {
  await sendAPIKeyWeatherBit(body, request);
});