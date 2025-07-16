import { useState } from 'react';
import '../estilos/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      email: '',
      mensaje: '',
    });
  };

  return (
    <section className="contact-container">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mensaje:</label>
          <textarea
            name="mensaje"
            rows="5"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </div>
        <div className="btn-container">
          <button type="submit">Enviar</button>
          <button type="button" onClick={handleReset}>Resetear</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;