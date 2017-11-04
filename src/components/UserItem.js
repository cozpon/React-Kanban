import React from 'react';

const UserItem = ( {id, username} ) => {
  console.log("HERE", username);
  return (

      <option value={id}> {username} </option>

  );
}

export default UserItem;