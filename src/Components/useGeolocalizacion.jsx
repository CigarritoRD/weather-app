import { useEffect, useState } from "react";

export function useGeolocalizacion() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("no podemos acceder a tu ubicacion");
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => setLocation(position.coords));
  }, []);

  return location;
}
