import { combineReducers } from "redux";

import expressReducer from "./expressReducer";
import mongoReducer from "./mongoReducer";
const rootReducer = combineReducers({
  express: expressReducer,
  mongo: mongoReducer,
});

export default rootReducer;
