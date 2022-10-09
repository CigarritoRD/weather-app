import React from "react";

const Forecasts = ({ item }) => {
  console.log(item);
  return (
    <div className='flex items-center text-white border gap-5 rounded mb-2'>
      <div className='w-20 bg-black/60'>
        <img className='w-full' src={require(`../assets/${item.weather[0].icon}.png`)} alt='' />
      </div>
      <div>
        <p>fecha: {item.date}</p>
        <p>temperatura: {item.main.temp.toFixed()}</p>
        <p className='font-medium capitalize'>{item.weather[0].description}</p>
      </div>
    </div>
  );
};

export default Forecasts;
