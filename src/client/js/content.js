import { convertToDate, isFutureDate, twoDaysGap } from "./date-utilities";

//Change content when 3 API have be ready
export function changeContent (data) {
  const date = convertToDate(data.date);
  const isFutureDay = isFutureDate(data.date);
  const twoGapsDate = twoDaysGap(data.date);

  console.log(data.weatherData)
  document.querySelector('.no-result').style.display = 'none';
  document.querySelector('.result-container').style.display = 'block';
  
  document.querySelector('.travel-country span').textContent = data.country; //Change travel, trip country
  document.querySelector('.departing-time span').textContent = date; //Change departing
  document.querySelector('.img img').src = data.src; //Change src image based on country

  if (isFutureDay) {
    //if the date is comming soon
    document.querySelector('.departing-date').textContent = `${data.country} trip is ${twoGapsDate} days away`;
    document.querySelector('.weather').innerHTML = 
    `<ul>
      <li>Temperature: ${data.weatherData.temp}</li>
      <li>Sunrise: ${data.weatherData.sunrise}</li>
      <li>Sunset: ${data.weatherData.sunset}</li>
      <li>Wind speed: ${data.weatherData.wind_spd}</li>
    </ul>`;
    document.querySelector('.weather ul').style.flexDirection = 'column';
    document.querySelector('.forecast').textContent = `Wind speed is forecasted is ${data.weatherData.wind_spd}`;
  } else {
    //if the date is past date
    document.querySelector('.departing-date').textContent = `${data.country}'s trip have been occured ${twoGapsDate} days ago`;
    document.querySelector('.weather').innerHTML = 
    `<ul>
      <li>Temperature: ${data.weatherData.temp}</li>
      <li>Wind speed: ${data.weatherData.wind_spd}</li>
    </ul>`;
    document.querySelector('.weather ul').style.flexDirection = 'column';
  }
}