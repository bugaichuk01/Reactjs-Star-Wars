import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import {setLocalStorage} from "../utils/localStorage";

const store = createStore(rootReducer, composeWithDevTools());
store.subscribe(() => {
    setLocalStorage('store', store.getState())
});

export default store;