import moment from "moment";

export function convertToDate(departingDate) {
  const date = new Date(departingDate);
  let day, month, year;

  day = date.getDate();
  month = date.getMonth() + 1;
  year = date.getFullYear();

  return day.toString().padStart(2, '0') + '/'
  + month.toString().padStart(2, '0') + '/' + year;
}

export function isFutureDate(departingDate) {
  const date = new Date(departingDate);
  const now = new Date();

  if (date > now) {
    return true;
  }
  
  return false;
}

export function twoDaysGap(departingDate) {
  const date1 = moment(new Date(departingDate));
  const date2 = moment(new Date());

  const dayDiff = date2.diff(date1, 'days');

  return Math.abs(dayDiff);
}