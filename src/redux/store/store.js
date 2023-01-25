import { createStore } from "redux";
import rootreducer from "../reducers/Combine";


const store = createStore(
    rootreducer
);


export default store;