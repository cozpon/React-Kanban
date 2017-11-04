// making a dummy component (functional component)
import React from 'react';
import CardItem from'../../components/CardItem';

const CardList = ({cards}) => {
  return (
    <div className="card-list"> {
      cards.map((card) => {
      console.log(card, "CARD LIST");  //renders X amount of books
        return (
          <CardItem
            title={card.title}
            creator={card.Creator.username}
            assigneduser={card.Dev.username}
            priority={card.Priority.kind}
            status={card.Status.type}
            key={card.id}/>
        );
      })
    }
    </div>
  );
}


export default CardList;