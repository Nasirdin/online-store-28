import { compose, createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const intialState = {};
const composeFunc =
  process.env.NODE_ENV === "development" ? composeWithDevTools : compose;

const store = createStore(rootReducer(), intialState, composeFunc());

export default store;