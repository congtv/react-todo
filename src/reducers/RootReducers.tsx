import { debug } from "console";
import { combineReducers } from "redux";
import TodoReducers from "./TodoReducers";

const RootReducer = () => {
  return combineReducers({
    TodoReducers,
  });
};

export default RootReducer;
