import { getCardsXHR, addCardsXHR } from '../lib/cards.db.js'

export const GET_CARDS = 'GET_CARDS';
export const CREATE_CARD = 'CREATE_CARD';

export const getCards = () => {
  return function(dispatch){
    return getCardsXHR().then(cards => {
      dispatch({
        type: GET_CARDS,
        cards: cards
      });
    });
  }
}

export const addCard = (newCard) => {
  return function(dispatch){
    return addCardsXHR(newCard).then(card => {
      dispatch({
        type: CREATE_CARD,
        card: card
      });
    });
  }
}



