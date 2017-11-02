import { CREATE_CARD } from '../actions/tasks';

// // const { combineReducers } = Redux;
// // const TodoApp = combineReducers({
// //   todos: todos.
// // })


const initialState = {  // our data is coming in as an array,
  todos: [],        // so set initial state as an empty array
  doing: [],
  done: []
};


const reducers = (state = initialState, action) => {
  console.log("REDUCERS: ", action);
  switch (action.type){
    case CREATE_CARD:
      console.log("adding TO DO item");
      return Object.assign({}, state, { todoList : [...action.task] })
    default:
      return state // always have a default return state if action.type isn't recognized
  }
}


// // export default reducers;


















//example of how to use combineReducers

/*

import { combineReducers } from 'redux'
import {
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions'

function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit
})

export default rootReducer

*/
