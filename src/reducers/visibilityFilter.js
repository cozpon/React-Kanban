import { GET_CARDS } from '../actions/CARDS';

const initialState = []

const visibilityFilter = (state = initialState, action) => {
  switch (action.type){
    case TOGGLE_CARD:
      return [...action.cards]
    default:
      return state
  }
}

export default visibilityFilter;