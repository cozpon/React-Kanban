import { GET_CARDS, CREATE_CARD, TOGGLE_STATUS } from '../actions/cards';

const initialState = {  // our data is coming in as an array,
  cards: [],
  // inProgress: []
};

const cardsList = (state = initialState, action) => {
  console.log(state)
  switch (action.type){                   // using a SWITCH CASE allows for different action.types to come in
    case GET_CARDS:                       // the GET_CARDS type comes in from ACTIONS folder cards.js
      return Object.assign({}, state, {   // it tells us how to treat the case, and what to do with the data from the database
        cards : [...action.cards]
      })
    case CREATE_CARD:
      return Object.assign({}, state, { // Object.assign({}, state) etc. This is using the SPREAD operator to insert our
        cards : [...state.cards, action.card]  // newly created card into the cards STATE array.
      })
    // case TOGGLE_STATUS:
    //   if (state.id === action.id) {
    //     return Object.assign({}, state, {
    //     inProgress : [...state.cards, action.card]       // was thinking this could be used to filter STATUS for cards later
    //   }
    default:
      return state // always have a default return state if action.type isn't recognized
  }
}

export default cardsList;

