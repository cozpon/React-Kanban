import React from 'react';

const PriorityItem = ( {id, kind} ) => {
  return (
      <option value={id}> {kind} </option>
  );
}

export default PriorityItem;