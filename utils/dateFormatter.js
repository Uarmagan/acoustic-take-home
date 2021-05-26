export const dateFormatter = (dateString) => {
  return new Intl.DateTimeFormat('en-US').format(new Date(dateString));
};
