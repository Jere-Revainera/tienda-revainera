import React from "react";
import './filtro.css'

const FiltroTamanio = ({ setFiltroTamanio }) => {
  const handleChange = (event) => {
    setFiltroTamanio(event.target.value);
  };

  return (
    <div>
      <label htmlFor="filtroTamanio">Filtrar por Tamaño:</label>
      <select id="filtroTamanio" onChange={handleChange}>
        <option value="">Todos</option>
        <option value="chico">Chico</option>
        <option value="mediano">Mediano</option>
        <option value="grande">Grande</option>
      </select>
    </div>
  );
};

  export default FiltroTamanio