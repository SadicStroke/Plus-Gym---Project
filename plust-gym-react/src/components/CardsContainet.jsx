import React from 'react';
import Card from 'estilos/Card';
import '../styless/CardsContainer.css';

function CardsContainer() {
  const cardsData = [
    {
      imagen: '/img/card1.jpg',
      titulo: 'Card 1',
      texto: 'Descripción de la Card 1.'
    },
    {
      imagen: '/img/card2.jpg',
      titulo: 'Card 2',
      texto: 'Descripción de la Card 2.'
    },
    {
      imagen: '/img/card3.jpg',
      titulo: 'Card 3',
      texto: 'Descripción de la Card 3.'
    }
  ];

  return (
    <section className="cards-container container my-5">
      <div className="row">
        {cardsData.map((card, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card 
              imagen={card.imagen} 
              titulo={card.titulo} 
              texto={card.texto} 
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardsContainer;