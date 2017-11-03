import React from 'react';

const CardItem = ( { title, priorityId } ) => {
  return (
    <div className="CardItem">
      <div> { title } </div>
      <div> Priority Level: { priorityId } </div><br/>
    </div>
  );
}

export default CardItem;
