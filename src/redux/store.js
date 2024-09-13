import { createStore } from "redux";
/*
import reducers from "./reducers";

const store = createStore(reducers);
*/

import dictionaryReducer from './dictionaryReducer';

const store = createStore(dictionaryReducer);

export default store;