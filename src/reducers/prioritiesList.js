import { GET_PRIORITIES } from '../actions/priorities';

const initialState = []

const prioritiesList = (state = initialState, action) => {
  console.log(state, "stateinFunction");
  switch (action.type){
    case GET_PRIORITIES:
    console.log(" Why isn't it Hitting Here? ")
      return [...action.priorities]
    default:
      return state
  }
}

console.log(initialState, "initialState");
export default prioritiesList;