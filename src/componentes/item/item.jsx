import React from "react";
import './item.css';
import { Link } from "react-router-dom";

const Item = ({nombre, img, precio, id, descripcion}) => {


    return (
        <div key={id} className="card-producto">
            <img src={img} alt={nombre}/>
            <div className="card-body">
                <h3 className="card-title">{nombre}</h3>
                <p className="card-text">{descripcion}</p>
                <p className="card-price">$ {precio}</p>
                <button className="producto-agregar" id={nombre}>
                    Agregar
                </button>
                <Link to={'/detalle/:id'}>
                <button>Ver detalle</button>
                </Link>
            </div>
        </div>
    );
}

export default Item;
