// making a dummy component (functional component)
import React from 'react';
import PriorityItem from'../../components/PriorityItem';


const PriorityList = ({priorities}) => {
  return (
     <div className="priority-list">
     <select>
    {
      priorities.map((priority, idx) => {
        return ( <PriorityItem kind={priority.kind} key={idx}/> )
      })
    }
    </select>
    </div>
    )
}

export default PriorityList;