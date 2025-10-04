import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './Menu.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registra el plugin de ScrollTrigger una vez
gsap.registerPlugin(ScrollTrigger);

// Icono del rayo para el botón
const BoltIcon = () => (
    <span style={{ marginRight: '8px' }}>⚡</span>
);

// Datos de las secciones para mapear
const sectionsData = [
    { 
        title: "Nuestros Proyectos", 
        text: "Explora las innovaciones que definen nuestro futuro. Desde IA hasta bioingeniería, desafiamos los límites de lo posible.", 
        buttonText: "Ver Portafolio", 
        variant: "primary" 
    },
    { 
        title: "Últimas Noticias", 
        text: "Mantente al día con nuestros avances clave, alianzas estratégicas y descubrimientos científicos que están cambiando el mañana.", 
        buttonText: "Leer el Blog", 
        variant: "info" 
    },
    { 
        title: "Nuestros Partners", 
        text: "Conoce a los líderes de la industria que comparten nuestra visión y nos ayudan a construir un ecosistema tecnológico global.", 
        buttonText: "Conectarse", 
        variant: "success" 
    },
    { 
        title: "Fondo de Donaciones", 
        text: "Apoya nuestra investigación y desarrollo. Cada contribución impulsa la próxima gran revolución tecnológica.", 
        buttonText: "Donar Ahora", 
        variant: "danger" 
    },
];

const Menu = () => {
    
    useEffect(() => {
        const panelWrapper = document.getElementById("horizontal-content-wrapper");
        const panels = gsap.utils.toArray(".horizontal-panel");
        
        if (!panelWrapper || panels.length === 0) {
            return; 
        }
        
        const totalWidth = panels.length * window.innerWidth;
        
        gsap.set(panelWrapper, { width: totalWidth });

        const scrollHorizontal = ScrollTrigger.create({
            trigger: "#scroll-anchor", 
            pin: true,           
            scrub: 1,            
            start: "top top",    
            end: () => "+=" + (panels.length - 1) * window.innerHeight,
            
            animation: gsap.to(panelWrapper, {
                x: -(totalWidth - window.innerWidth), 
                ease: "none"
            }),
            
            matchMedia: {
                "(max-width: 768px)": function() {
                    return { scrollHorizontal: false };
                }
            }
        });

        return () => {
          scrollHorizontal.kill();
        };
    }, []);

    return (
        <div className="menu-container">
            {/* Margen para que el contenido empiece debajo del Header fijo */}
            <div style={{ height: '80px' }}></div> 

            <div id="scroll-anchor" className="scroll-anchor">
                <div id="horizontal-content-wrapper" className="horizontal-content-wrapper">

                    {/* PANEL 1: BANNER PRINCIPAL (Introducción) */}
                    <div className="horizontal-panel intro-panel d-flex justify-content-center align-items-center">
                        <Container className="main-content-container text-center">
                            <div className="logo-placeholder">
                                Space Kids<span className="logo-red-part"> Fundation</span>
                            </div>
                            <div className="update-badge my-3">
                                <span className="badge-text">SOÑEMOS TODOS JUNTOS HACIA EL FUTURO</span>
                            </div>
                            <h1 className="main-title">
                                Descubre nuevas ideas, adquiere habilidades y amplía tus horizontes
educativos con nuestra amplia gama de actividades. ¡Es hora de explorar, aprender y crecer juntos!
                            </h1>
                            <Button variant="dark" className="get-started-button">
                                <BoltIcon />
                                Get started
                            </Button>
                        </Container>
                    </div>

                    {/* PANELES 2, 3, 4, 5: SECCIONES ADICIONALES (Mismo estilo que el Panel 1) */}
                    {sectionsData.map((section, index) => (
                        <div 
                            key={index} 
                            className="horizontal-panel section-panel d-flex justify-content-center align-items-center"
                        >
                            <Container className="section-content-container text-center">
                                {/* Título de la Sección */}
                                <h1 className="section-title-custom">
                                    {section.title}
                                </h1>
                                {/* Texto Descriptivo */}
                                <p className="section-text-custom">
                                    {section.text}
                                </p>
                                {/* Botón */}
                                <Button variant={section.variant} className="section-button-custom">
                                    {section.buttonText}
                                </Button>
                            </Container>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;