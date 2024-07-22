import React from "react";
import ItemList from "../itemList/ItemList";

const ItemListContainer = ({ productos }) => {

    return (
        <>
            {
                productos.length === 0 ?
                    <p>Buscando los mejores precios...</p>
                    :
                    <>
                    <h2>Bienvenidos a tienda revainera, la mejor tienda de comida para perros</h2>
                    <ItemList productos={productos} />
                    </>
            }
        </>
    );
};

export default ItemListContainer;