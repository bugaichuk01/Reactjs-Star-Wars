import {ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE} from "../constants/actionTypes";
import {omit} from 'lodash';
import {getLocalStorage} from "../../utils/localStorage";

const initialState = getLocalStorage('store');

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE:
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_FROM_FAVORITE:
            return omit(state, [action.payload])
        default: return state;
    }
}

export default rootReducer;