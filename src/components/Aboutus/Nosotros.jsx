import React, { useEffect, useRef} from 'react';
import { Container, Button } from 'react-bootstrap';
import './Nosotros.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Nosotros() {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY;
        const maxScroll = window.innerWidth * 4.5; // 4 pantallas completas + media para centrar la última
        const limitedScroll = Math.min(scrollY, maxScroll);
        containerRef.current.style.transform = `translateX(-${limitedScroll}px)`;
      }
    };

    // Ajustar la altura del body para permitir scroll
    const totalWidth = window.innerWidth * 4.5;
    document.body.style.height = `${totalWidth}px`;
    document.body.style.overflow = 'auto';
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.height = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="about-wrapper">
      <div ref={containerRef} className="about-container">
        {/* Quienes Somos */}
        <section className="about-section">
          <h2 className="about-title">Quiénes Somos</h2>
          <div className="about-content">
            <p>
              Somos una organización sin fines de lucro que se dedica a promover la educación y la pasión por el espacio y la tecnología entre jóvenes y niños de toda LATAM.<br />
              Reconocemos y destacamos la importancia de estas áreas para el futuro y la necesidad de formar a las generaciones más jóvenes. Por ello, nuestra misión en la fundación es clara:
                preparar a más de un millón de jóvenes para el año 2035, marcando el inicio de la era interplanetaria (2032-2035) <br />
                Cómo llevamos a cabo esta misión? A través de una amplia gama de proyectos educativos que incluyen cursos, charlas, conferencias, eventos y más. Sin embargo, no lo hacemos solos. <br />
                Hemos establecido colaboraciones exitosas con gobiernos y organizaciones comprometidas con la educación y la exploración espacial. Además, dependemos del apoyo crucial de empresas que nos permiten invertir en la educación y expandir nuestras operaciones como fundación.
            </p>
          </div>
        </section>

        {/* Misión */}
        <section className="about-section">
          <h2 className="about-title">Misión</h2>
          <div className="about-content">
            <p>
              Preparar a más de un millón de jóvenes para el año 2035, marcando el inicio de la era interplanetaria (2032-2035). <br />
              Como fundación nos dedicamos a dotar a estos jóvenes con conocimientos sólidos en tecnología e industria espacial, con el fin de que estén preparados para adaptarse a esta nueva era de descubrimiento y exploración.
            </p>
          </div>
        </section>

        {/* Objetivo */}
        <section className="about-section">
          <h2 className="about-title">Objetivo</h2>
          <div className="about-content">
            <p>
              Nuestro objetivo principal se centra en educar y fomentar el interés de niños y jóvenes en campos cruciales como STEM y áreas específicas como la economía espacial. Estamos comprometidos en inculcar el amor por la ciencia y la tecnología desde una edad temprana.
            </p>
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="about-section">
          <h2 className="about-title">Nuestro Equipo</h2>
          <div className="about-team-wrapper">
            <p className="about-team-intro">
              [Presenta a tu equipo aquí]
            </p>
            <div className="team-grid">
              <div className="team-member">
                <div className="team-avatar"></div>
                <h3 className="team-name">[Nombre]</h3>
                <p className="team-role">[Cargo]</p>
              </div>
              <div className="team-member">
                <div className="team-avatar"></div>
                <h3 className="team-name">[Nombre]</h3>
                <p className="team-role">[Cargo]</p>
              </div>
              <div className="team-member">
                <div className="team-avatar"></div>
                <h3 className="team-name">[Nombre]</h3>
                <p className="team-role">[Cargo]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Partners */}
        <section className="about-section">
          <h2 className="about-title">Nuestros Partners</h2>
          <div className="about-partners-wrapper">
            <p className="about-partners-intro">
              [Describe tus alianzas estratégicas y partners]
            </p>
            <div className="partners-grid">
              <div className="partner-logo">
                <span>[Logo Partner]</span>
              </div>
              <div className="partner-logo">
                <span>[Logo Partner]</span>
              </div>
              <div className="partner-logo">
                <span>[Logo Partner]</span>
              </div>
              <div className="partner-logo">
                <span>[Logo Partner]</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Nosotros;