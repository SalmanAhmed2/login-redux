import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userListReducer from "./userListReducer";
import detailReducer from "./detailReducer";
const reducer = combineReducers({
  loginReducer,
  userListReducer,
  detailReducer,
});
export default reducer;
