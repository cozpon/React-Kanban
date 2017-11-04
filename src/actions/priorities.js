import { getPrioritiesXHR } from '../lib/priorities.db.js'

export const GET_PRIORITIES = 'GET_PRIORITIES';

export const getPriorities = () => {

  return function(dispatch){
    return getPrioritiesXHR().then(priorities => {
      dispatch({
        type: GET_PRIORITIES,
        priorities: priorities
      })
    })
  }
}