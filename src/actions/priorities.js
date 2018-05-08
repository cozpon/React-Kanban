import { getPrioritiesXHR } from '../lib/priorities.db.js' // getting XHR request function

export const GET_PRIORITIES = 'GET_PRIORITIES'; // renaming the TYPE so it's easier to read

export const getPriorities = () => {

  return function(dispatch){
    return getPrioritiesXHR().then(priorities => {
      dispatch({
        type: GET_PRIORITIES, // setting priorities to returned parameter "priorities" after the
        priorities: priorities // XHR request returns the priorities
      })
    })
  }
}