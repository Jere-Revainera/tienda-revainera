import React from "react";
import  "./navBar.css";
import CarritoCompra from "../carrito/carrito";

function NavBar (){
    return (
        <>
        <nav>
        <img className="img-logo" src="" alt="" />
            <ul>
                <li><a href="../../../../index.html">Home</a></li>
                <li><a href="../../../../html/tienda.html">Tienda</a></li>
                <li><a href="../../../../html/contacto.html">Contacto</a></li>
            </ul>
            <CarritoCompra/>
        </nav>
        </>

    );
}

export default NavBar