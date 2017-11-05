import { getUsersXHR } from '../lib/users.db.js'
export const GET_USERS = 'GET_USERS';
export const getUsers = () => {
  return function(dispatch){
    return getUsersXHR().then(users => {
      dispatch({
        type: GET_USERS,
        users: users
      })
    })
  }
}