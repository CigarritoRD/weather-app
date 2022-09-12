import { useState, useEffect } from "react";
import { getFetch } from "../Components/api";

const Home = () => {
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [weather, setWeather] = useState(null);
  const [fondo, setFondo] = useState("soleado");

  useEffect(() => {
    const iniciatFetch = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=london,UK&appid=59bfd0f9eb3416d13f2060a840559984&units=metric&lang=ES`;
      const res = await fetch(url);
      const data = await res.json();
      setWeather(data);
      const fondoDePantalla = data.weather[0].description;
      setFondo(fondoDePantalla);
    };
    iniciatFetch();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([pais, ciudad].includes("")) {
      console.log("campos vacios");
      return;
    }
    const data = await getFetch(ciudad, pais);
    setWeather(data);
    const fondoDePantalla = data.weather[0].description;
    setFondo(fondoDePantalla);
    console.log(fondoDePantalla);
  };

  return (
    <div className='h-screen w-full relative p-5 bg-black/40'>
      <img
        className='w-full object-cover object-center h-full top-0 left-0 absolute  -z-10'
        src={require(`../assets/fondos/${fondo}.jpg`)}
        alt=''
      />
      <div className='w-[80%] mx-auto'>
        <form
          className='text-2xl flex flex-col md:flex-row md:justify-center gap-2'
          onSubmit={handleSubmit}
          action=''
        >
          <select
            defaultValue='none'
            onChange={(e) => setPais(e.target.value)}
            className='bg-slate-200/60 text-slate-600 font-bold  rounded-lg py-2 px-2'
            name=''
            id=''
          >
            <option className='' disabled value='none'>
              --selecciona un pais--
            </option>
            <option value='DO'>Republica Dominicana</option>
            <option value='CA'>Canada</option>
            <option value='US'>Estados Unidos</option>
            <option value='MX'>Mexico</option>
            <option value='ES'>Espania</option>
            <option value='FR'>Francia</option>
            <option value='UK'>Reino Unido</option>
            <option value='AR'>Argentina</option>
            <option value='CO'>Colombia</option>
            <option value='CL'>Chile</option>
            <option value='VE'>Venezuela</option>
            <option value='PR'>Puerto Rico</option>
          </select>
          <input
            onChange={(e) => setCiudad(e.target.value)}
            className='text-slate-600 py-2 px-2 rounded-lg font-bold bg-white/60  placeholder-slate-600'
            type='text'
            name=''
            id=''
            placeholder='Ciudad'
          />
        </form>

        {weather?.cod === 200 ? (
          <div className=' py-10 mt-10 rounded-xl bg-black/40 max-w-[700px] mx-auto'>
            <div className=' z-20 w-full mx-auto text-center'>
              <h1 className='text-3xl text-slate-200'>{weather?.name}</h1>
              <h4 className='text-sm text-slate-200'>{`coordenadas: ${weather?.coord.lat}, ${weather?.coord.lon} `}</h4>
              <h2 className='text-[150px] font-bold text-slate-200'>
                {`${Math.floor(weather?.main.temp)}`}
                <span className='text-[100px]'>&#8451;</span>
              </h2>
              <p className=' py-4 text-slate-200 text-center text-xl px-5'>
                Se siente como: <span className='text-3xl'>{weather?.main.feels_like}&#8451;</span>{" "}
              </p>
              <div className='w-full flex-col flex  bg-slate-100/20'>
                <div className='flex items-center justify-center'>
                  <img
                    className='w-40'
                    src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                    alt=''
                  />

                  <h4 className='text-white font-medium text-3xl'>
                    {weather?.weather[0].description}
                  </h4>
                </div>
                <div className='flex justify-between w-full px-5'>
                  <p className='text-slate-200 text-xl'>Minima: {weather?.main.temp_min}℃</p>
                  <p className='text-slate-200 text-xl'>Maxima: {weather?.main.temp_max}℃</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
