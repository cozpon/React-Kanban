
export const filterStatus = (status) => {
  return {
    type:
  }
  } // not quite used yet, but the beginnig of an action to filter through the cards
}   // and sort them based on their STATUS

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