import React from 'react';
// giving the cards a VIEW
// the names are not important, the order matters though

const CardItem = ( { title, creator, assigneduser, priority, status } ) => {
  return (
    <div className="CardItem">
      <div> Task: <br/>{ title } </div><br/>
      <div> Created by: { creator } </div><br/>
      <div> Assigned to: { assigneduser } </div><br/>
      <div> Priority level: { priority } </div><br/>
      <div> Status: { status }</div><br/>
      <input type="submit" value= {status} />
    </div>
  );
}

export default CardItem;
