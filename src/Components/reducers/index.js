import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userListReducer from "./userListReducer";
import detailReducer from "./detailReducer";
import errorReducer from "./errorReducer";
const reducer = combineReducers({
  loginReducer,
  userListReducer,
  detailReducer,
  errorReducer,
});
export default reducer;
