// making a dummy component (functional component)
import React from 'react';
import Carditem from'../../components/Carditem';

const CardList = ({cards}) => {
  return (
    <div className="card-list"> {
      cards.map((card) => {   //renders X amount of books
        return (
          <Carditem title={card.title} statusId={card.statusId}/>
        );
      })
    }
    </div>
  );
}



export default CardList;