// making a dummy component (functional component)
import React from 'react';
import CardItem from'../../components/CardItem';

const CardList = ({cards}) => {
  console.log(cards);
  return (
    <div className="card-list"> {
      cards.map((card) => {   //renders X amount of books
        return (
          <CardItem title={card.title} priorityId={card.priorityId} key={card.id}/>
        );
      })
    }
    </div>
  );
}


export default CardList;