/**
 * Searching by travel country, it will pull data 
 * include lat, long
 * It used to pass in getWeatherbit function
 * apikey will associate to get data from local server
 */
export async function getGeoNames(geoNamesApi, apiKey) {
  return await fetch(geoNamesApi, { method: 'GET'})
  .then(res => res.text())
  .then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'text/xml');

    const firstCode = xmlDoc.getElementsByTagName('code')[0];
    const lat = firstCode.getElementsByTagName('lat')[0].textContent;
    const lng = firstCode.getElementsByTagName('lng')[0].textContent;

    
    getWeatherbit(lat, lng, apiKey);
  });
}

export async function getWeatherbit(lat, lon, apiKey) {
  const weatherbitURL = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}`;
  return await fetch(weatherbitURL, { method: 'GET'})
  .then(res => res.json())
  .then(data => {
    console.log(data.data[0])
  });
}
