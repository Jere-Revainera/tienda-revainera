import { useState } from 'react'
import './App.css'
import CargarProductos from './componentes/tienda'
import NavBar from './componentes/navBar'
import Footer from './componentes/footer'
import MainHome from './componentes/mainHome'
function App() {

  return (
    <>
    <header><NavBar/></header>
    <MainHome/>
    <CargarProductos/>
     <Footer/>
    </>
  )
}

export default App
