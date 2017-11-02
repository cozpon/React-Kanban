export const GET_CARDS = 'GET_CARDS';
const axios = require('axios');

// export const getCard = () => {
//   return function(dispatch){
//     return getCardsXHR().then(cards => {
//       dispatch({
//         type: GET_CARDS,
//         cards: cards
//       });
//     });
//   }
// }

export const CREATE_CARD = 'GET_CARDS';
export const createCard = () => {
  return function(dispatch){
    return axios({
      method:'post',
      url: API_URL + url,
      data: data,
    })
    .then(response => {
      dispatch({
        type: CREATE_CARD,
        title: response.data
      });
      return response;
    })
    .catch((error) => {
      console.log(error);
    })
  }
}


