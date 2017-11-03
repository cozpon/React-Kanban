import React from 'react';

const PriorityItem = ( { level } ) => {
  console.log(level, "ITEM LEVEL");
  return (
    <div className="PriorityItem">
      <div> {level} </div>
    </div>
  );
}

export default PriorityItem;