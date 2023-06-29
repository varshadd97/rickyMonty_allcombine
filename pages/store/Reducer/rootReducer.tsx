/** @format */

import { combineReducers } from "redux";
import { userReducer } from "./characterReducer";
import { episodeReducer } from "./episodeReducer";

const rootReducer = combineReducers({
  user: userReducer,
  episode: episodeReducer,
});

export default rootReducer;
