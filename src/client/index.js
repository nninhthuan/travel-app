import './styles/base.scss';
import './styles/input.scss';
import './styles/main.scss';
import './styles/nav-bar.scss';
import './styles/section.scss';
import './media/paris.png';

import { getGeoNames } from "./js/app";

const serverURL = 'http://localhost:8000';
let apiKey;
const submitBtn = document.querySelector('.submit-button');
submitBtn.addEventListener('click', () => {
  const country = document.querySelector('.search-input').value;
  const departingDate = document.querySelector('.departing').value;

  const geoNamesApi = `http://api.geonames.org/postalCodeSearch?placename=${country}&username=thuan123_`;
  getGeoNames(geoNamesApi, apiKey);
});

//Get API Key of weatherbit from local server
fetch(`${serverURL}/weatherbit-apikey`, {method: 'GET'})
.then(res => res.text())
.then(data => {
  apiKey = data;
})