import React from 'react';
import "./App.css"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Header from "./components/Header/Header"
import Nosotros from './components/Nosotros/Nosotros';
import Footer from "./components/Footer/Footer"
import Contacto from "./components/Contacto/Contacto"
import EdEspacial from './components/EdEspacial/EdEspacial';


function App() {
  return (
    <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/nosotros" element={<Nosotros />} />

            <Route path="/edespacial" element={<EdEspacial />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;