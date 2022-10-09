import { useState, useEffect } from "react";
import { useGeolocalizacion } from "../Components/useGeolocalizacion";

export const useGetClima = () => {
  const [weather, setWeather] = useState("");
  const [fondo, setFondo] = useState("");

  const { latitude, longitude } = useGeolocalizacion();

  useEffect(() => {
    const iniciatFetch = async (latitud, longitud) => {
      if (latitude) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=59bfd0f9eb3416d13f2060a840559984&units=metric&lang=ES`;
        const res = await fetch(url);
        const data = await res.json();

        setWeather(data);
        const icon = data?.weather[0]?.icon ?? "02d";
        setFondo(icon);
      }
    };
    iniciatFetch(latitude, longitude);
  }, [latitude, longitude]);

  return { weather, fondo };
};
