import { createStore } from "redux";
import RootReducer from "./RootReducers";

const Store = createStore(RootReducer);
export default Store;