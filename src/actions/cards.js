import { getCardsXHR } from '../lib/cards.db.js'

export const GET_CARDS = 'GET_CARDS';
export const CREATE_CARD = 'GET_CARDS';

//const axios = require('axios');

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


// export const createCard = () => {
//   return function(dispatch){
//     return axios({
//       method:'post',
//       url: API_URL + url,
//       data: data,
//     })
//     .then(response => {
//       dispatch({
//         type: CREATE_CARD,
//         title: response.data
//       });
//       return response;
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//   }
// }


