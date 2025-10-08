import React, { useState } from 'react';
import './Contacto.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    pais: '',
    telefono: '',
    email: '',
    consulta: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error del campo al empezar a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    
    if (!formData.pais.trim()) {
      newErrors.pais = 'El país es requerido';
    }
    
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.consulta.trim()) {
      newErrors.consulta = 'La consulta es requerida';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado:', formData);
      setSubmitted(true);
      
      // Resetear formulario después de 3 segundos
      setTimeout(() => {
        setFormData({
          nombre: '',
          pais: '',
          telefono: '',
          email: '',
          consulta: ''
        });
        setSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <div className="header-accent"></div>
          <h1>CONTACTO</h1>
        </div>
        
        <p className="contact-description">
          Si deseas obtener más información, no dudes en ponerte en contacto con nosotros. 
          ¡Estaremos encantados de ayudarte en todo lo que necesites!
        </p>

        {submitted && (
          <div className="success-message">
            ¡Gracias por contactarnos! Te responderemos pronto.
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre*"
              className={errors.nombre ? 'error' : ''}
            />
            {errors.nombre && <span className="error-message">{errors.nombre}</span>}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="pais"
              value={formData.pais}
              onChange={handleChange}
              placeholder="País*"
              className={errors.pais ? 'error' : ''}
            />
            {errors.pais && <span className="error-message">{errors.pais}</span>}
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Teléfono*"
              className={errors.telefono ? 'error' : ''}
            />
            {errors.telefono && <span className="error-message">{errors.telefono}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <textarea
              name="consulta"
              value={formData.consulta}
              onChange={handleChange}
              placeholder="Consulta*"
              rows="6"
              className={errors.consulta ? 'error' : ''}
            ></textarea>
            {errors.consulta && <span className="error-message">{errors.consulta}</span>}
          </div>

          <button type="submit" className="submit-button">
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
}