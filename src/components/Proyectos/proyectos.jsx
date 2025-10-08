import React, { useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X } from 'lucide-react';
import './Proyectos.css';

gsap.registerPlugin(ScrollTrigger);

const sectionsData = [
  { 
    title: "PROYECTOS", 
    text: "Presentamos algunos de nuestros proyectos más emocionantes y relevantes, que van desde misiones de exploración espacial hasta programas de educación científica para niños y jóvenes", 
  },
];

const newsData = [
  {
    id: 1,
    title: "Lanzamiento de semillas al espacio",
    image: "https://www.spacekidsfoundation.org/wp-content/uploads/2021/06/sfk-projects-seed.jpg",
    description: "Este proyecto será liderado por LEVIATHAN SPACE quien consta de antecedentes comprobables realizados en el ECUADOR. Se dispondrá de una CAMPAÑA de recaudación de fondos a fines de financiar el proyecto. Se coordinara con el GOBIERNO NACIONAL ARGENTINO y COLEGIOS, a fin de seleccionar un COLEGIO GANADOR que participará en el EXPERIMENTO.",
    images: [
      "https://pbs.twimg.com/profile_images/1016240118032748545/QfRfTmxc_400x400.jpg",
      "https://www.spacekidsfoundation.org/wp-content/uploads/2021/06/20231005160453_fpdl.in_plant-grows-from-ground-generative-ai_169016-35044_large.png"
    ],
  },
  {
    id: 2,
    title: "Lanzamiento del primer vino argentino al espacio",
    image: "https://www.spacekidsfoundation.org/wp-content/uploads/2021/06/Space-Kids-Imagen-a-agregar-en-seccion-PROYECTOS.jpeg",
    description: "Lanzamiento del primer vino argentino al espacio para su estudio y esta iniciativa servirá para recaudar fondos para promover la educación espacial en América Latina.",
    videos: [
      "https://www.youtube.com/embed/YmQMbPO_ZxE?si=3uDNS34y3PjaSSbJ",
    ],
  }
];

const extractYouTubeId = (url) => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const getEmbedUrl = (url) => {
  const videoId = extractYouTubeId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};

const Proyectos = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedNews, setSelectedNews] = useState(null);

    const handleShowModal = (news) => {
      setSelectedNews(news);
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
      setSelectedNews(null);
    };
    
    useEffect(() => {
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
        
        const isDesktop = window.matchMedia("(min-width: 769px)");

        if (isDesktop.matches) {
            stInstance = initializeGsap();
        }
        
        const handleMatchMediaChange = (e) => {
            if (e.matches) {
                stInstance = initializeGsap();
            } else {
                if (stInstance) {
                    stInstance.kill();
                    stInstance = null;
                }
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
    <div className="proy-container">

      <div id="scroll-anchor" className="scroll-anchor">
        <div id="horizontal-content-wrapper" className="horizontal-content-wrapper">
          {sectionsData.map((section, index) => (
            <div 
              key={index} 
              className="horizontal-panel section-panel"
            >
              <div className="section-content-container">
                <h1 className="section-title-custom">
                  {section.title}
                </h1>
                <p className="section-text-custom">
                  {section.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de Noticias */}
      <div className="news-section">
        <div className="news-container">
          <h2 className="news-title"></h2>
          
          <div className="news-grid">
            {newsData.map((news) => (
              <div 
                key={news.id}
                className="news-card"
                onClick={() => handleShowModal(news)}
              >
                <div className="news-image-container">
                  <img 
                    src={news.image} 
                    alt={news.title}
                  />
                  <div className="news-image-overlay"></div>
                </div>
                
                <div className="news-card-content">
                  <p className="news-date">
                    {news.date}
                  </p>
                  <h3 className="news-card-title">
                    {news.title}
                  </h3>
                  <p className="news-card-description">
                    {news.description.substring(0, 100)}...
                  </p>
                  <button className="news-card-button">
                    Leer más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedNews && (
        <div 
          className="modal-overlay"
          onClick={handleCloseModal}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="modal-header">
              <h2 className="modal-title">
                {selectedNews.title}
              </h2>
              <button
                onClick={handleCloseModal}
                className="modal-close-btn"
              >
                <X color="#00d9ff" size={28} />
              </button>
            </div>

            {/* Body */}
            <div className="modal-body">
              <p className="news-date">
                {selectedNews.date}
              </p>
              
              <p className="modal-description">
                {selectedNews.description}
              </p>

              {/* Imágenes */}
              {selectedNews.images && selectedNews.images.length > 0 && (
                <div className="modal-images">
                  {selectedNews.images.map((img, idx) => (
                    <img 
                      key={idx}
                      src={img} 
                      alt={`Imagen ${idx + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Videos de YouTube */}
              {selectedNews.videos && selectedNews.videos.length > 0 && (
                <div className="modal-videos">
                  {selectedNews.videos.map((video, idx) => {
                    const embedUrl = getEmbedUrl(video);
                    return embedUrl ? (
                      <div key={idx} className="video-container">
                        <iframe
                          width="100%"
                          height="400"
                          src={embedUrl}
                          title={`Video ${idx + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : null;
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button 
                onClick={handleCloseModal}
                className="modal-close-button"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Proyectos;