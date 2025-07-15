import PropTypes from 'prop-types';
import '../styles/Card.css';

export default function Card({ image, title, text }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};