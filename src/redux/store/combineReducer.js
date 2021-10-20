import { combineReducers } from "redux";

import expressReducer from "./expressReducer";

const rootReducer = combineReducers({
  express: expressReducer,
});

export default rootReducer;
