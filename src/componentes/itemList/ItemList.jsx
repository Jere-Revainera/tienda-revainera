import React from "react";
import Item from "../item/item";
import './itemList.css'

const ItemList = ({productos}) => {
    return (
        <div className="item-list">
            {
                productos.map((el) => {
                    return (
                        <Item key={el.id} id={el.id} nombre={el.nombre} descripcion={el.descripcion} precio={el.precio} img={el.img}/>
                    )
                })
            }
        </div>
    );
};

export default ItemList