import React, { useState, useEffect } from "react";
import "./tienda.css"

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("../productos/productos.json")
            .then(response => response.json())
            .then(data => {
                setProductos(data);
            });
    }, []);

    const CargarProductos = () => {
        return productos.map(producto => (
            <div className="producto" key={producto.producto}>
                <div className="card">
                    <img src={producto.img} alt={producto.producto} />
                    <div className="card-body">
                        <h5 className="card-title">{producto.producto}</h5>
                        <p className="card-text">{producto.descripcion}</p>
                        <p className="card-price">$ {producto.precio}</p>
                        <button className="producto-agregar" id={producto.producto}>
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div id="card-productos">
            {CargarProductos()}
        </div>
    );
};

export default Productos;