import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './componentes/navbar/navBar';
import Filtros from './componentes/filtros/Filtro';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer';
import fetchData from './productos';
import Footer from './componentes/footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './componentes/NotFound';
import ItemDetail from './componentes/itemDetail/ItemDetail';

function App() {
  const [productos, setProductos] = useState([]);
  const [filtroEdad, setFiltroEdad] = useState('');
  const [filtroTamanio, setFiltroTamanio] = useState('');
 
  useEffect(() => {
    fetchData()
      .then(response => {
        setProductos(response);
      })
      .catch(err => console.error(err));
  }, []);

  const productosFiltrados = productos.filter(producto => {
    return (
      (filtroEdad === '' || producto.edad === filtroEdad) &&
      (filtroTamanio === '' || producto.tamanio === filtroTamanio)
    );
  });


  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route 
          path="/" element={
            <> 
            <Filtros setFiltroEdad={setFiltroEdad} setFiltroTamanio={setFiltroTamanio} /> <ItemListContainer productos={productosFiltrados} />
            </>
          } 
        />
        <Route path="/detalle/:id" element={<ItemDetail productos={productos} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;