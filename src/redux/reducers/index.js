import users from "./users";
import { combineReducers } from "redux";
import getTodos from "./todo";

const rootReducer = combineReducers({
  users,
  getTodos,
});

export default rootReducer;
