import { combineReducers } from "redux";

import expressReducer from "./expressReducer";
import mongoReducer from "./mongoReducer";
import reactReducer from "./reactReducer";

const rootReducer = combineReducers({
  express: expressReducer,
  mongo: mongoReducer,
  react: reactReducer,
});

export default rootReducer;
