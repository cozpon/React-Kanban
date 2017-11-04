
import { combineReducers } from "redux";

import prioritiesList from './prioritiesList';
import cardsList from './cardsList';
import usersList from './usersList';

export default combineReducers({
  cardsList,
  prioritiesList,
  usersList
});