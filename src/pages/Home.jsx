import { useState } from "react";
import { Alerta } from "../Components/Alerta";
import { useGetClima } from "../hooks/useGetClima";
import Form from "../Components/Form";
import { getClima } from "../services/getClima";
import { getForecast } from "../services/getForecast";
import Forecasts from "../Components/Forecasts";

const Home = () => {
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [clima, setClima] = useState("");
  const [fondoDeClima, setFondoDeClima] = useState("");
  const [climaDias, setClimaDias] = useState("");

  const { weather, fondo } = useGetClima(setClima);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getClima(pais, ciudad);
    const forecast = await getForecast(pais, ciudad);

    setClimaDias(forecast);
    setClima(data);

    const icon = data?.weather[0]?.icon ?? "02d";
    setFondoDeClima(icon);
    console.log(forecast);
  };

  if (!clima) {
    return (
      <div className='pt-5 min-h-screen h-full w-full relative bg-black/10'>
        <img
          className='w-full object-cover object-center h-full top-0 left-0 absolute  -z-10'
          src={fondo && require(`../assets/fondos/${fondo}.jpg`)}
          alt=''
        />
        <div className='w-[95%] mx-auto'>
          <Form
            Alerta={Alerta}
            setPais={setPais}
            setCiudad={setCiudad}
            handleSubmit={handleSubmit}
          />

          {weather?.cod === 200 ? (
            <div className='py-5 w-full mt-10 rounded-xl bg-black/40 max-w-[700px] mx-auto'>
              <div className=' z-20 w-full mx-auto text-center'>
                <h1 className='text-3xl text-slate-200'>{weather?.name}</h1>
                <h4 className='text-sm text-slate-200'>{`coordenadas: ${weather?.coord.lat}, ${weather?.coord.lon} `}</h4>
                <h2 className='text-[150px] font-bold text-slate-200'>
                  {`${Math.floor(weather?.main.temp)}`}
                  <span className='text-[100px]'>&#8451;</span>
                </h2>
                <p className=' py-4 text-slate-200 text-center text-xl px-5'>
                  Se siente como:{" "}
                  <span className='text-3xl'>{weather?.main.feels_like}&#8451;</span>{" "}
                </p>
                <div className='p-2 w-full flex-col flex  bg-slate-100/20 shadow-xl '>
                  <div className='flex items-center justify-center gap-5'>
                    <img
                      className='w-28  border rounded-lg p-2 bg-black/70'
                      src={require(`../assets/${fondo}.png`)}
                      alt=''
                    />
                    <div className='text-left w-full flex flex-col justify-between'>
                      <h4 className='text-white font-medium text-4xl capitalize'>
                        {weather?.weather[0]?.description}
                      </h4>
                      <div className='border-t'>
                        <p className='text-slate-200 text-xl'>Minima: {weather?.main.temp_min}℃</p>
                        <p className='text-slate-200 text-xl'>Maxima: {weather?.main.temp_max}℃</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
  return (
    <div className='pt-5 min-h-screen h-full w-full relative bg-black/10'>
      <img
        className='w-full object-cover object-center h-full top-0 left-0 absolute  -z-10'
        src={fondo && require(`../assets/fondos/${fondoDeClima}.jpg`)}
        alt=''
      />
      <div className='w-[95%] mx-auto'>
        <Form Alerta={Alerta} setPais={setPais} setCiudad={setCiudad} handleSubmit={handleSubmit} />

        {clima?.cod === 200 ? (
          <div className='py-5 w-full mt-10 rounded-xl bg-black/40 max-w-[700px] mx-auto'>
            <div className=' z-20 w-full mx-auto text-center'>
              <h1 className='text-3xl text-slate-200'>{clima?.name}</h1>
              <h4 className='text-sm text-slate-200'>{`coordenadas: ${clima?.coord.lat}, ${clima?.coord.lon} `}</h4>
              <h2 className='text-[150px] font-bold text-slate-200'>
                {`${Math.floor(clima?.main.temp)}`}
                <span className='text-[100px]'>&#8451;</span>
              </h2>
              <p className=' py-4 text-slate-200 text-center text-xl px-5'>
                Se siente como: <span className='text-3xl'>{clima?.main.feels_like}&#8451;</span>{" "}
              </p>
              <div className='p-2 w-full flex-col flex  bg-slate-100/20 shadow-xl '>
                <div className='flex items-center justify-center gap-5'>
                  <img
                    className='w-28  border rounded-lg p-2 bg-black/70'
                    src={require(`../assets/${fondoDeClima}.png`)}
                    alt=''
                  />
                  <div className='text-left w-full flex flex-col justify-between'>
                    <h4 className='text-white font-medium text-4xl capitalize'>
                      {clima?.weather[0]?.description}
                    </h4>
                    <div className='border-t'>
                      <p className='text-slate-200 text-xl'>Minima: {clima?.main.temp_min}℃</p>
                      <p className='text-slate-200 text-xl'>Maxima: {clima?.main.temp_max}℃</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {climaDias && (
                <>
                  <Forecasts item={climaDias[0]} />
                  <Forecasts item={climaDias[8]} />
                  <Forecasts item={climaDias[16]} />
                  <Forecasts item={climaDias[24]} />
                  <Forecasts item={climaDias[32]} />
                </>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
