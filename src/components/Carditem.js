import React from 'react';

const CardItem = ( { title, creator, assigneduser, priority } ) => {
  return (
    <div className="CardItem">
      <div> Task: <br/>{ title } </div><br/>
      <div> Created by: { creator } </div><br/>
      <div> Assigned to: { assigneduser } </div><br/>
      <div> Priority level: { priority } </div><br/>
    </div>
  );
}

export default CardItem;
