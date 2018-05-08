import { GET_USERS } from '../actions/users';

const initialState = []

const usersList = (state = initialState, action) => {
  switch (action.type){
    case GET_USERS:
      return [...action.users] // again, using the cleaner way of spread operator to return a new array of users as our new STATE
    default:
      return state
  }
}

export default usersList;