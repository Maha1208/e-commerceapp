//multiple reducers
import { combineReducers } from "redux";
import { cartreducer } from "./Reducer";

const rootReducer = combineReducers({
  cartreducer
});

export default rootReducer;
