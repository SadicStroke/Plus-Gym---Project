import PropTypes from 'prop-types';
import '../styless/Home.css';
import homeImage from '../assets/img/Plus Gym Logo.png'; 

function Home({ titulo, subtitulo, imagen }) {
  return (
    <section className="home-container">
      <div className="text-content">
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>
      </div>
      <div className="image-content">
        <img src={imagen || homeImage} alt="Imagen de bienvenida" />
      </div>
    </section>
  );
}

Home.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  imagen: PropTypes.string,
};

export default Home;
