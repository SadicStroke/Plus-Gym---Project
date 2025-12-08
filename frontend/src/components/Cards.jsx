import Card from './card';
import '../styless/Card.css';
import img1 from '../assets/img/Ivan Labonia.png';
import img2 from '../assets/img/Licha.png';

const dataCards = [
  {
    imagen: img1,
    titulo: 'Entrenamiento Personalizado',
    texto: 'Planes hechos a medida para cumplir tus objetivos.',
  },
  {
    imagen: img2,
    titulo: 'Clases Grupales',
    texto: 'Zumba, funcional, spinning y más actividades.',
  },
  
];

function Cards() {
  return (
    <section className="container py-5">
      <h2 className="mb-4 text-center">Nuestros Servicios</h2>
      <div className="row">
        {dataCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Cards;