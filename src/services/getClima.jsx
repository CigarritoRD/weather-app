export const getClima = async (pais, ciudad) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=59bfd0f9eb3416d13f2060a840559984&units=metric&lang=ES`
  );
  const data = await res.json();
  return data;
};
