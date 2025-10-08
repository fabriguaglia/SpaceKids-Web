import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './EdEspacial.css';
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
    title: "Educación Espacial", 
    text: "Para el año 2030, se estima alcanzará un valor de un trillón de dólares, marcando un crecimiento considerable desde la actualidad. Este pronóstico se ve impulsado por la competencia entre potencias mundiales como China y EE.UU. quienes lideran esta industria en expansión.", 
    buttonText: "Colaborá con tu donación aquí", 
    variant: "primary" 
  },
  { 
    title: "Transporte Espacial", 
    text: " El desarrollo de tecnologías de lanzamiento más eficientes y económicas permitirá el transporte de personas y carga al espacio de manera más accesible y frecuente.", 
    buttonText: "Colaborá con tu donación aquí", 
    variant: "primary" 
  },
  { 
    title: "Exploración y Minería Espacial", 
    text: "Se espera un aumento en las misiones de exploración espacial y la extracción de recursos minerales y agua en cuerpos celestes como la Luna y los asteroides.", 
    buttonText: "Colaborá con tu donación aquí", 
    variant: "primary" 
  },
  { 
    title: "Telecomunicaciones", 
    text: "El despliegue de constelaciones de satélites para proporcionar servicios de Internet de alta velocidad en todo el mundo generará nuevas oportunidades en el campo de las telecomunicaciones.", 
    buttonText: "Colaborá con tu donación aquí", 
    variant: "primary" 
  },
  { 
    title: "Observación de la Tierra", 
    text: "La creciente demanda de datos satelitales para monitorear y prevenir desastres naturales, así como para la agricultura de precisión y la gestión de recursos naturales, impulsará el desarrollo de tecnologías de observación de la Tierra más avanzadas.", 
    buttonText: "Colaborá con tu donación aquí", 
    variant: "primary" 
  },
  { 
    title: "Turismo Espacial", 
    text: "El sector del turismo espacial se espera que crezca, con más personas buscando experiencias únicas en el espacio, como viajes orbitales y estancias en estaciones espaciales.", 
    buttonText: "Colaborá con tu donación aquí", 
    variant: "primary" 
  },
];

const Menu = () => {
    
    useEffect(() => {
        
        // Función para inicializar la animación SÓLO en pantallas grandes
        const initializeGsap = () => {
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
                })
            });

            return scrollHorizontal;
        };

        let stInstance;
        
        // Utilizamos matchMedia nativo para decidir si ejecutar o no la animación
        const isDesktop = window.matchMedia("(min-width: 769px)");

        if (isDesktop.matches) {
            stInstance = initializeGsap();
        }
        
        const handleMatchMediaChange = (e) => {
            if (e.matches) {
                // Si pasa a escritorio, inicializa
                stInstance = initializeGsap();
            } else {
                // Si pasa a móvil, limpia
                if (stInstance) {
                    stInstance.kill();
                    stInstance = null;
                }
                // Resetea el ancho del wrapper para móvil
                const panelWrapper = document.getElementById("horizontal-content-wrapper");
                if (panelWrapper) {
                     gsap.set(panelWrapper, { width: "100%", x: 0 });
                }
            }
        };

        isDesktop.addListener(handleMatchMediaChange);


        return () => {
            isDesktop.removeListener(handleMatchMediaChange);
      if (stInstance) {
        stInstance.kill();
      }
    };
  }, []);

  return (
    <div className="menu-container">
      {/* Margen para que el contenido empiece debajo del Header fijo */}
      <div className="header-spacer"></div> 

      <div id="scroll-anchor" className="scroll-anchor">
        <div id="horizontal-content-wrapper" className="horizontal-content-wrapper">

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