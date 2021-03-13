import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userListReducer from "./userListReducer";
import addReducer from "./addReducer";
import editReducer from "./editReducer";
import detailReducer from "./detailReducer";
const reducer = combineReducers({
  loginReducer,
  userListReducer,
  addReducer,
  editReducer,
  detailReducer,
});
export default reducer;
