
import { combineReducers } from "redux";

import prioritiesList from './prioritiesList';
import cardsList from './cardsList';

export default combineReducers({
  cardsList,
  prioritiesList
});