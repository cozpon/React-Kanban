import { GET_CARDS, CREATE_CARD } from '../actions/cards';

const initialState = {  // our data is coming in as an array,
  cards: [],
};

const cardsList = (state = initialState, action) => {
  switch (action.type){
    case GET_CARDS:
      return Object.assign({}, state, {
        cards : [...action.cards]
      })
    case CREATE_CARD:
      return Object.assign({}, state, {
        cards : [...state.cards, action.card]
      })
    default:
      return state // always have a default return state if action.type isn't recognized
  }
}

export default cardsList;

