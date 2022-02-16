import {ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE} from "../constants/actionTypes";

export const addToFavorite = (character) => ({
    type: ADD_TO_FAVORITE,
    payload: character
});

export const removeFromFavorite = (characterId) => ({
    type: REMOVE_FROM_FAVORITE,
    payload: characterId
});