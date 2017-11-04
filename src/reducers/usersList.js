import { GET_USERS } from '../actions/users';

const initialState = []

const usersList = (state = initialState, action) => {
  console.log(state, "REDUCER");
  console.log(action);
  switch (action.type){
    case GET_USERS:
      return [...action.users]
    default:
      return state
  }
}

export default usersList;