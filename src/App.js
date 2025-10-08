import React from 'react';
import "./App.css"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Nosotros from './components/Aboutus/Nosotros';

function App() {
  return (
    <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/about" element={<Nosotros />} />
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;