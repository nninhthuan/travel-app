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
  return 120;
}