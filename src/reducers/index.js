import { combineReducers } from "redux";
import listReducer from "./listReducer";
import favoritesReducer from "./favoritesReducer";

export default combineReducers({
  list: listReducer,
  favorites: favoritesReducer,
});
