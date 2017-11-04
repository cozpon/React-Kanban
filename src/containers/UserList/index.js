// making a dummy component (functional component)
import React from 'react';
import UserItem from'../../components/UserItem';

const UserList = ({users, onUserChange}) => {
  return (
     <div className="user-list">
     <select onChange={onUserChange}>
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


export default UserList;