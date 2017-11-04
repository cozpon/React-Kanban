import { getUsersXHR } from '../lib/users.db'

export const GET_USERS = 'GET_USERS';

export const getUsers = () => {

  return function(dispatch){
    console.log(dispatch, "DISPATCH");
    return getUsersXHR().then(users => {
      console.log("ACTION USERS");
      dispatch({
        type: GET_USERS,
        users: users
      })
    })
  }
}