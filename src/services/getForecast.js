export const getForecast = async (pais, ciudad) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad},${pais}&appid=59bfd0f9eb3416d13f2060a840559984&units=metric&lang=ES`;
  const data = await fetch(url);
  const res = await data.json();
  const { list } = res;

  const items = list.map((item) => {
    const { dt, main, weather } = item;

    const date = new Date(dt * 1000).toDateString();
    return { date, main, weather };
  });

  return items;
};
