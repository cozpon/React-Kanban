// making a dummy component (functional component)
import React from 'react';
import UserItem from'../../components/UserItem';

const CreatorList = ({users, onCreatorChange}) => {
  return (
     <div className="user-list">
     <select onChange={onCreatorChange}>
    {
      users.map((user) => {
        return ( <UserItem
          username={user.username}
          id={user.id}
          key={user.id} /> )
      })
    }
    </select>
    </div>
    )
}


export default CreatorList;