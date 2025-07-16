import '../estilos/Gallery.css';
import img1 from '../assets/img/Gimnasio 1.jpg';
import img2 from '../assets/img/Gimnasio 2.jpg';
import img3 from '../assets/img/Gimnasio 3.jpg';
import img4 from '../assets/img/Gimnasio 4.jpg';
import img5 from '../assets/img/Gimnasio 5.jpg';
import img6 from '../assets/img/Gimnasio 6.jpg';
import img7 from '../assets/img/Gimnasio 7.jpg';
import img8 from '../assets/img/Gimnasio 8.jpg';
import img9 from '../assets/img/Gimnasio 9.jpg';

const imagenes = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function Gallery() {
  return (
    <section className="gallery-section">
      <h2 className="text-center mb-4">Galería</h2>
      <div className="gallery-grid container">
        {imagenes.map((img, index) => (
          <img key={index} src={img} alt={`Galería ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;
