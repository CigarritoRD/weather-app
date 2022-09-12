export const getFetch = async (city, country) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=59bfd0f9eb3416d13f2060a840559984&units=metric&lang=ES`;
  const data = await fetch(url);
  const weather = await data.json();
  return weather;
};
