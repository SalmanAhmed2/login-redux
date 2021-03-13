import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
} from "../actions/actions";

const initialState = {
  loading: false,
  users: [],
  error: "",
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        users: action.payload,
        loading: false,
        error: "",
      };
    case LOGIN_USER_FAILED:
      return {
        users: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default loginReducer;
