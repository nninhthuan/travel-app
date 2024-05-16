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
    document.querySelector('.departing-date').textContent = `${data.country} trip is ${twoGapsDate} days away`;
  }
 
}