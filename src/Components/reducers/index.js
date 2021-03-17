import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import userListReducer from "./userListReducer";
import detailReducer from "./detailReducer";
import errorReducer from "./errorReducer";
import registerReducer from "./registerReducer";
import inputReducer from "./inputReducer";
const reducer = combineReducers({
  loginReducer,
  userListReducer,
  detailReducer,
  errorReducer,
  registerReducer,
  inputReducer
});
export default reducer;