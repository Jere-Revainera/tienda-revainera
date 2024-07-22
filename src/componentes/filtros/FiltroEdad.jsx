import React from "react";
import './filtro.css'


const FiltroEdad = ({ setFiltroEdad }) => {
  const handleChange = (event) => {
    setFiltroEdad(event.target.value);
  };

  return (
    <div>
      <label htmlFor="filtroEdad">Filtrar por Edad:</label>
      <select id="filtroEdad" onChange={handleChange}>
        <option value="">Todas</option>
        <option value="baby">Baby</option>
        <option value="puppy">Puppy</option>
        <option value="adulto">Adulto</option>
        <option value="senior">Senior</option>
      </select>
    </div>
  );
};

  export default FiltroEdad