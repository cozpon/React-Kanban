// import { CREATE_CARD } from '../actions/tasks';

// const { combineReducers } = Redux;
// const TodoApp = combineReducers({
//   todos: todos.
// })


const initialState = {  // our data is coming in as an array,
  todos: [],        // so set initial state as an empty array
  doing: [],
  done: []
};


const reducers = (state = initialState, action) => {
  //                  ^^^
// ES6, if state is "true" set it to state, otherwise set it to initialState
  switch (action.type){
    case CREATE_CARD:
      console.log("adding TO DO item");
      return Object.assign({}, state, { todoList : [...action.task] })
    default:
      return state // always have a default return state if action.type isn't recognized
  }
}


// export default reducers;








