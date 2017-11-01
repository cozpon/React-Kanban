import { CREATE_CARD } from '../actions/tasks';

const initialState = {    // our data is coming in as an array,
  something: []           // so set initial state as an empty array
};



const reducers = (state = initialState, action) => {
  //                  ^^^
// ES6, if state is "true" set it to state, otherwise set it to initialState
  switch (action.type){
    case CREATE_CARD:
      console.log("adding TO DO item");
      return Object.assign({}, state, { todoList : [...action.task] })
    default:
      return state
  }
}


export default reducers;