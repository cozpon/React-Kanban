// using combineReducers to allow more than one REDUCER to be used cleanly
// it's a built in function from REDUX

import { combineReducers } from "redux";

import prioritiesList from './prioritiesList';
import cardsList from './cardsList';
import usersList from './usersList';

export default combineReducers({
  cardsList,
  prioritiesList,
  usersList
});