import { GET_PRIORITIES } from '../actions/priorities';

const initialState = [] // if you set initial state as an array, instead of an object with an array you can do the other RETURN

const prioritiesList = (state = initialState, action) => {
  switch (action.type){
    case GET_PRIORITIES:
      return [...action.priorities] // this is the other RETURN way of doing Object.assign({}, state, etc..)
    default:
      return state
  }
}

export default prioritiesList;