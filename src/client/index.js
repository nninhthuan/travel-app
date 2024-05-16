import './styles/base.scss';
import './styles/input.scss';
import './styles/main.scss';
import './styles/nav-bar.scss';
import './styles/section.scss';
import './media/paris.png';

import { getGeoNames } from "./js/app";

const serverURL = 'http://localhost:8000';
let apiKeyWeather, apiKeyPixabay;

//by default, must hide result container no-result
document.querySelector('.result-container').style.display = 'none';
document.querySelector('.no-result').textContent = 'Please type both input to get data...';

const submitBtn = document.querySelector('.submit-button');
submitBtn.addEventListener('click', () => {
  const country = document.querySelector('.search-input').value;
  const departingDate = document.querySelector('.departing').value;

  if(!departingDate || departingDate === '') {
    document.querySelector('.result-container').style.display = 'none';
    
    document.querySelector('.no-result').textContent = 'Please type date for departing date...';
    document.querySelector('.no-result').style.color = 'red';
    document.querySelector('.no-result').style.display = 'block';
    return;
  }
  const geoNamesApi = `http://api.geonames.org/postalCodeSearch?placename=${country}&username=thuan123_`;
  const geoNamesObj = {
    geoNamesApi: geoNamesApi,
    apiKeyWeather: apiKeyWeather,
    country: country,
    apiKeyPixabay: apiKeyPixabay,
    departingDate: departingDate
  }
  getGeoNames(geoNamesObj);
});

//Get API Key of weatherbit from local server
fetch(`${serverURL}/weatherbit-apikey`, {method: 'GET'})
.then(res => res.text())
.then(data => {
  apiKeyWeather = data;
});

//Get API Key of Pixabay from local server
fetch(`${serverURL}/pixabay-apikey`, {method: 'GET'})
.then(res => res.text())
.then(data => {
  apiKeyPixabay = data;
});