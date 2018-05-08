import { getCardsXHR, addCardsXHR, changeStatus } from '../lib/cards.db.js';

export const GET_CARDS = 'GET_CARDS';
export const CREATE_CARD = 'CREATE_CARD';
export const TOGGLE_STATUS = 'TOGGLE_STATUS';

export const getCards = () => { // creating a GET action that calls onto the GET XHR request
  return function(dispatch){
    return getCardsXHR().then(cards => {
      dispatch({
        type: GET_CARDS,
        cards: cards
      });
    });
  };
};

export const addCard = (newCard) => { // using the POST XHR request in the 'lib' folder
  return function(dispatch){
    return addCardsXHR(newCard).then(card => {
      dispatch({
        type: CREATE_CARD, // dispatch is for activating a function call before returning an object
        card: card // always always have to include "type" and then a state or some kind of change
      });
    });
  };
};


export const toggleStatus = (id, status) => {
  return function(dispatch){
    return changeStatus(id).then(card => {
      dispatch({
        type: TOGGLE_STATUS,
        id : card.id,
        status : card.status
      });
    });
  };
};
