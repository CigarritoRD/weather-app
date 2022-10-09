export const Alerta = ({ alert }) => {
  return (
    <div className='text-red-600 font-medium text-center'>
      <h2>{alert.mensaje}</h2>
    </div>
  );
};
