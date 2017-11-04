// making a dummy component (functional component)
import React from 'react';
import PriorityItem from'../../components/PriorityItem';


const PriorityList = ({priorities, onPriorityChange}) => {
  return (
     <div className="priority-list">
     <select onChange= {onPriorityChange} >
    {
      priorities.map((priority) => {
        return ( <PriorityItem
         kind={priority.kind}
         id={priority.id}
         key={priority.id}/> )
      })
    }
    </select>
    </div>
    )
}

export default PriorityList;