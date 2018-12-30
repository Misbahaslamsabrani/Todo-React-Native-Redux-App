import {createStore} from "redux"
import todoReducer from "./TodoReducer"
const store = createStore(todoReducer);
export default store;