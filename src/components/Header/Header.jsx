import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import './Header.css';
import Logo from "./logo.png"

const Header = () => {
    return (
        <Navbar expand="lg" className="header-custom" variant="dark"> 
            <Container fluid>
                <Navbar.Brand href="#" className="d-flex align-items-center">
                    <img
                        src={Logo}
                        alt="Logo Zenvato"
                        className="header-logo" // Clase CSS para ajustar el tamaño si es necesario
                    />
                </Navbar.Brand>
                
                {/* Navbar.Toggle es esencial para el modo responsive */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* El menú principal se ordena automáticamente en móvil */}
                    <Nav className="mx-auto nav-links-custom"> 
                        <Nav.Link href="#about">Sobre nosotros</Nav.Link>
                        <Nav.Link href="#actividades">Actividades Educativas</Nav.Link>
                        <Nav.Link href="#proyectos">Poryectos</Nav.Link>
                        <Nav.Link href="#edespacial">Educación Espacial</Nav.Link>
                        <Nav.Link href="#noticias">Noticias</Nav.Link> 
                        <Nav.Link href="#donaciones">Donaciones</Nav.Link> 
                        <Nav.Link href="#contacto">Contacto</Nav.Link>                        
                    </Nav>

                   {/* <Nav className="ml-auto">
                        <Nav.Link href="#login" className="login-link">Log in</Nav.Link>
                        {/* Agregamos una clase para margen superior en móvil
                        <Button variant="outline-light" className="signup-button mt-2 mt-lg-0">Sign up</Button> 
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;