import { Alerta } from "./Alerta";

const Form = ({ handleSubmit, setPais, setCiudad }) => {
  return (
    <form
      className=' md:max-w-[60%] mx-auto text-xl flex flex-col md:flex-row md:justify-center gap-2'
      onSubmit={handleSubmit}
      action=''
    >
      <select
        defaultValue='none'
        onChange={(e) => setPais(e.target.value)}
        className='bg-black/60 text-slate-200 font-bold border rounded-lg py-2 px-2'
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
        <option value='ES'>España</option>
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
        className='border bg-black/60 text-slate-200 py-2 px-2 rounded-lg font-bold placeholder-slate-600'
        type='text'
        name=''
        id=''
        placeholder='Ciudad'
      />
      {alert && <Alerta alert={alert} />}
    </form>
  );
};

export default Form;
