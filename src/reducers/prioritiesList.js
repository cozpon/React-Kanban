import { GET_PRIORITIES } from '../actions/priorities';

const initialState = []

const prioritiesList = (state = initialState, action) => {
  switch (action.type){
    case GET_PRIORITIES:
      return [...action.priorities]
    default:
      return state
  }
}

export default prioritiesList;