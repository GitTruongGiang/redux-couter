import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CouterReducer from "../features/counter/reducer";

const initialState = {};
const store = createStore(
  combineReducers({
    Counter: CouterReducer,
  }),
  initialState,
  composeWithDevTools()
);

export default store;
