export default function formatDate(date) {
  // Convert to Date object
  const dateObject = new Date(date);

  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const formattedDate = dateObject.toLocaleDateString('en-UK', options);

  return formattedDate;
}