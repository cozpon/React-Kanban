import { getCardsXHR, addCardsXHR } from '../lib/cards.db.js'

export const GET_CARDS = 'GET_CARDS';
export const CREATE_CARD = 'GET_CARDS';


export const getCards = () => {
  return function(dispatch){
    return getCardsXHR().then(cards => {
      console.log(cards, "ACTION CARDS");
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
      console.log(card, "ACTION CARd");
      dispatch({
        type: CREATE_CARD,
        card: card
      });
    });
  }
}


