import React from "react";
import FiltroEdad from "./FiltroEdad";
import FiltroTamanio from "./FiltroTamanio";
import './filtro.css'

const Filtros = ({ setFiltroEdad, setFiltroTamanio }) => {
    return (
      <div>
        <FiltroEdad setFiltroEdad={setFiltroEdad} />
        <FiltroTamanio setFiltroTamanio={setFiltroTamanio} />
      </div>
    );
  };

  export default Filtros