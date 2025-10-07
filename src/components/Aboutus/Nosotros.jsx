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
        containerRef.current.style.transform = `translateX(-${scrollY}px)`;
      }
    };

    // Ajustar la altura del body para permitir scroll
    const totalWidth = window.innerWidth * 5;
    document.body.style.height = `${totalWidth}px`;
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.height = 'auto';
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      <div 
        ref={containerRef}
        className="flex h-screen will-change-transform"
        style={{ width: 'max-content' }}
      >
        {/* Quienes Somos */}
        <section className="w-screen h-screen flex flex-col items-center justify-center px-16 flex-shrink-0">
          <h2 className="text-6xl font-bold text-slate-800 mb-8">Quiénes Somos</h2>
          <div className="max-w-4xl text-slate-700 leading-relaxed text-2xl text-center">
            <p>
              [Escribe aquí información sobre tu empresa, historia y valores fundamentales. Puedes agregar varios párrafos y todo el contenido que necesites.]
            </p>
          </div>
        </section>

        {/* Misión */}
        <section className="w-screen h-screen flex flex-col items-center justify-center px-16 flex-shrink-0">
          <h2 className="text-6xl font-bold text-slate-800 mb-8">Misión</h2>
          <div className="max-w-4xl text-slate-700 leading-relaxed text-2xl text-center">
            <p>
              [Describe aquí la misión de tu empresa y lo que buscan lograr.]
            </p>
          </div>
        </section>

        {/* Objetivo */}
        <section className="w-screen h-screen flex flex-col items-center justify-center px-16 flex-shrink-0">
          <h2 className="text-6xl font-bold text-slate-800 mb-8">Objetivo</h2>
          <div className="max-w-4xl text-slate-700 leading-relaxed text-2xl text-center">
            <p>
              [Describe aquí los objetivos principales de tu empresa y metas a futuro.]
            </p>
          </div>
        </section>

        {/* Nuestro Equipo */}
        <section className="w-screen h-screen flex flex-col items-center justify-center px-16 flex-shrink-0">
          <h2 className="text-6xl font-bold text-slate-800 mb-8">Nuestro Equipo</h2>
          <div className="max-w-5xl">
            <p className="text-2xl text-slate-700 mb-12 text-center">
              [Presenta a tu equipo aquí]
            </p>
            <div className="grid grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-32 h-32 bg-slate-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-2xl text-slate-800">[Nombre]</h3>
                <p className="text-slate-600 text-lg">[Cargo]</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-slate-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-2xl text-slate-800">[Nombre]</h3>
                <p className="text-slate-600 text-lg">[Cargo]</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-slate-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-bold text-2xl text-slate-800">[Nombre]</h3>
                <p className="text-slate-600 text-lg">[Cargo]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Partners */}
        <section className="w-screen h-screen flex flex-col items-center justify-center px-16 flex-shrink-0">
          <h2 className="text-6xl font-bold text-slate-800 mb-8">Nuestros Partners</h2>
          <div className="max-w-5xl">
            <p className="text-2xl text-slate-700 mb-12 text-center">
              [Describe tus alianzas estratégicas y partners]
            </p>
            <div className="grid grid-cols-4 gap-12">
              <div className="flex items-center justify-center h-32">
                <span className="text-slate-400 text-xl">[Logo Partner]</span>
              </div>
              <div className="flex items-center justify-center h-32">
                <span className="text-slate-400 text-xl">[Logo Partner]</span>
              </div>
              <div className="flex items-center justify-center h-32">
                <span className="text-slate-400 text-xl">[Logo Partner]</span>
              </div>
              <div className="flex items-center justify-center h-32">
                <span className="text-slate-400 text-xl">[Logo Partner]</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Nosotros;