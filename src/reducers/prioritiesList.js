import { GET_PRIORITIES } from '../actions/priorities';

const initialState = {  // our data is coming in as an array,
  priorities: []
};

const prioritiesList = (state = initialState, action) => {
  console.log('REDUCERS: activated');
  console.log("REDUCERS: ", action);
  switch (action.type){
    case GET_PRIORITIES:
      return Object.assign({}, state, {
        priorities : [...action.priorities]
      })
    default:
      return state
  }
}


export default prioritiesList;