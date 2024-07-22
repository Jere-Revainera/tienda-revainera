import React, { useEffect, useState } from 'react';
import Item from '../item/item';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ productos }) => {
    const { id } = useParams();
    const [productoSeleccionado, setProductoSeleccionado] = useState({});
    
    useEffect(() => {
        const findProduct = productos.find(el => el.id === parseInt(id));
        setProductoSeleccionado(findProduct);
    }, [id, productos]);

    return (
        <div className='card-detail'> 
            <p>
                Detalle del producto {productoSeleccionado?.nombre}
            </p>
            {productoSeleccionado && (
                <Item 
                    key={productoSeleccionado.id} 
                    id={productoSeleccionado.id} 
                    nombre={productoSeleccionado.nombre} 
                    descripcion={productoSeleccionado.descripcion} 
                    precio={productoSeleccionado.precio} 
                    img={productoSeleccionado.img}
                />
            )}
        </div>
    );
};

export default ItemDetail;
