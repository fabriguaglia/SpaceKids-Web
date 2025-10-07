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
              [Escribe aquí información sobre tu empresa, historia y valores fundamentales. Puedes agregar varios párrafos y todo el contenido que necesites.]
            </p>
          </div>
        </section>

        {/* Misión */}
        <section className="about-section">
          <h2 className="about-title">Misión</h2>
          <div className="about-content">
            <p>
              [Describe aquí la misión de tu empresa y lo que buscan lograr.]
            </p>
          </div>
        </section>

        {/* Objetivo */}
        <section className="about-section">
          <h2 className="about-title">Objetivo</h2>
          <div className="about-content">
            <p>
              [Describe aquí los objetivos principales de tu empresa y metas a futuro.]
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