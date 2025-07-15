import '../styles/Gallery.css';

export default function Gallery() 
  const images = [
    '/img/gal1.jpg',
    '/img/gal2.jpg',
    '/img/gal3.jpg',
  ];

  return (
    <section className="gallery">
      <h2>Galería</h2>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`Imagen ${i + 1}`} />
        ))}
      </div>
    </section>
  );