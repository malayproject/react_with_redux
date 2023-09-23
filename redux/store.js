import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { amountReducer, pointsReducer } from "./reducers";

const store = createStore(
  combineReducers({ amount: amountReducer, points: pointsReducer }),
  applyMiddleware(thunk)
);

export default store;
