import { createStore } from "redux";
import rootReducer from "../reducers/Combine";

const store = createStore(rootReducer);

export default store;
