// making a dummy component (functional component)
import React from 'react';
import UserItem from'../../components/UserItem';

const UserList = ({users}) => {
  return (
     <div className="user-list">
     <select>
    {
      users.map((user, idx) => {
        return ( <UserItem username={user.username} key={idx}/> )
      })
    }
    </select>
    </div>
    )
}



export default UserList;