export const addDays = (date, days) => {
  var date = new Date(date);
  date.setDate(date.getDate() + days);
  return date.toLocaleDateString();
};
