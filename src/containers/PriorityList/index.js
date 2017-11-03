// making a dummy component (functional component)
import React from 'react';
import PriorityItem from'../../components/PriorityItem';

const PriorityList = ({priorities}) => {
  return (
    <div className="priority-list">
    {
      priorities.map((priority, index) => {
      console.log(priority, "PRIORITY LIST");  //renders X amount of priorities
        return (
          <PriorityItem type={priority.type} key={index}/>
        );
      })
    }
    </div>
  );
}


export default PriorityList;