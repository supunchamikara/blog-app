import { combineReducers } from "redux";
import postReducer from "./post-reducer";
import userReducer from "./users-reducer";

export default combineReducers({
  posts: postReducer,
  users: userReducer,
});
