import React from 'react';

const UserItem = ( {id, username} ) => {

  return (
      <option value={id}> {username} </option>
  );
}

export default UserItem;