import { combineReducers } from "redux";
import listsReducer from "./listsReducer";
import favoritesReducer from "./favoritesReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  lists: listsReducer,
  favorites: favoritesReducer,
  users: usersReducer,
});
