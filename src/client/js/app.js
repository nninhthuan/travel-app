import { changeContent } from "./content";
/**
 * Searching by travel country, it will pull data 
 * include lat, long
 * It used to pass in getWeatherbit function
 * apikey will associate to get data from local server
 */
export async function getGeoNames(geoNamesObj) {
  return await fetch(geoNamesObj.geoNamesApi, { method: 'GET'})
  .then(res => res.text())
  .then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'text/xml');

    const firstCode = xmlDoc.getElementsByTagName('code')[0];
    const lat = firstCode.getElementsByTagName('lat')[0].textContent;
    const lng = firstCode.getElementsByTagName('lng')[0].textContent;

    const weatherbitObj = {
      lat: lat,
      lon: lng,
      apiKeyWeather: geoNamesObj.apiKeyWeather,
      country: geoNamesObj.country,
      apiKeyPixabay: geoNamesObj.apiKeyPixabay,
      departingDate: geoNamesObj.departingDate
    }
    
    getWeatherbit(weatherbitObj);
  });
}
//Get weather API data
export async function getWeatherbit(weatherbitObj) {
  const weatherbitURL = `https://api.weatherbit.io/v2.0/current?lat=${weatherbitObj.lat}&lon=${weatherbitObj.lon}&key=${weatherbitObj.apiKeyWeather}`;
  return await fetch(weatherbitURL, { method: 'GET'})
  .then(res => res.json())
  .then(data => {
    const pixabayObj = {
      country: weatherbitObj.country,
      apiKeyPixabay: weatherbitObj.apiKeyPixabay,
      departingDate: weatherbitObj.departingDate,
      weatherData: data.data[0],
    }
    getImagePixabay(pixabayObj)
  });
}

//Get Image given on country
export async function getImagePixabay(pixabayObj) {
  const pixabayURL = `https://pixabay.com/api/?key=${pixabayObj.apiKeyPixabay}&q=${pixabayObj.country}+capital&image_type=photo`;
  return await fetch(pixabayURL, { method: 'GET'})
  .then(res => res.json())
  .then(result => {
    const src = result.hits[0].webformatURL;

    const data = {
      src: src,
      country: pixabayObj.country,
      date: pixabayObj.departingDate,
      weatherData: pixabayObj.weatherData,
    }
    changeContent(data);
  });
}
