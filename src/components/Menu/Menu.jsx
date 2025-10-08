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
    text: "Siempre estamos mirando hacia el horizonte estrellado en busca de nuevas aventuras y desafíos. Nuestro compromiso con la innovación nos lleva más allá de lo conocido. Con proyectos emocionantes, exploramos nuevos horizontes estelares en busca de aventuras y desafíos. ¡Acompáñanos en esta emocionante travesía mientras exploramos nuevos territorios en el universo!", 
    buttonText: "Descubre nuestros proyectos", 
    variant: "primary" 
  },
  { 
    title: "Últimas Noticias", 
    text: "Mantente al día con las últimas noticias de la fundación", 
    buttonText: "Explora las últimas noticias aquí", 
    variant: "primary" 
  },
  { 
    title: "Nuestros Partners", 
    text: "Nos esforzamos por inspirar y educar a las futuras generaciones, contando con la generosidad y colaboración de nuestros socios y otras entidades que comparten nuestra visión de un futuro espacial prometedor", 
    buttonText: "Conectarse", 
    variant: "primary" 
  },
  { 
    title: "Fondo de Donaciones", 
    text: "Hemos otorgado más de 10,000 becas en América Latina gracias a tus donaciones. ¡Tu ayuda asegura que ningun niño se quede atrás, brindandoles oportunidades vitales para el futuro!.", 
    buttonText: "Conoce como donar", 
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

          {/* PANEL 1: BANNER PRINCIPAL (Introducción) */}
          <div className="horizontal-panel intro-panel d-flex justify-content-center align-items-center">
            <Container className="main-content-container text-center">
              <div className="logo-placeholder">
                Space Kids<span className="logo-blue-part"> Fundation</span>
              </div>
              <div className="update-badge my-3">
                <span className="badge-text">SOÑEMOS TODOS JUNTOS HACIA EL FUTURO</span>
              </div>
              <h1 className="main-title">
                Descubre nuevas ideas, adquiere habilidades y amplía tus horizontes educativos con nuestra amplia gama de actividades. ¡Es hora de explorar, aprender y crecer juntos!
              </h1>
              <Button variant="dark" className="get-started-button">
                <BoltIcon />
                Conócenos.
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