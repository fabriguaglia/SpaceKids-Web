import React, { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './Nosotros.css';
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
    title: "QUIÉNES SOMOS", 
    text: "Somos una organización sin fines de lucro que se dedica a promover la educación y la pasión por el espacio y la tecnología entre jóvenes y niños de toda LATAM. Reconocemos y destacamos la importancia de estas áreas para el futuro y la necesidad de formar a las generaciones más jóvenes. Por ello, nuestra misión en la fundación es clara: preparar a más de un millón de jóvenes para el año 2035, marcando el inicio de la era interplanetaria (2032-2035)", 
    buttonText: "Descubre nuestros proyectos", 
    variant: "primary" 
  },
  { 
    title: "NUESTRA MISIÓN", 
    text: " Cómo llevamos a cabo esta misión? A través de una amplia gama de proyectos educativos que incluyen cursos, charlas, conferencias, eventos y más. Sin embargo, no lo hacemos solos. Hemos establecido colaboraciones exitosas con gobiernos y organizaciones comprometidas con la educación y la exploración espacial. Además, dependemos del apoyo crucial de empresas que nos permiten invertir en la educación y expandir nuestras operaciones como fundación.", 
    buttonText: "Explora las últimas noticias aquí", 
    variant: "primary" 
  },
  { 
    title: "OBJETIVO", 
    text: "Nuestro objetivo principal se centra en educar y fomentar el interés de niños y jóvenes en campos cruciales como STEM y áreas específicas como la economía espacial. Estamos comprometidos en inculcar el amor por la ciencia y la tecnología desde una edad temprana.", 
    buttonText: "Conectarse", 
    variant: "primary" 
  },
  { 
    title: "NUESTRO EQUIPO", 
    text: "Siempre estamos mirando hacia el horizonte estrellado en busca de nuevas aventuras y desafíos. Nuestro compromiso con la innovación nos lleva más allá de lo conocido. Con proyectos emocionantes, exploramos nuevos horizontes estelares en busca de aventuras y desafíos.", 
    buttonText: "Descubre nuestros proyectos", 
    variant: "primary" 
  },
];

const Nosotros = () => {
    
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

export default Nosotros;