export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";

export const addFavorites = (crypto) => {
  return { type: ADD_FAVORITES, payload: crypto };
};

export const removeFavorites = (id) => {
  return { type: REMOVE_FAVORITES, payload: id };
};
