import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
} from "../actions/actions";

const initialState = {
  loading: false,
  users: [],
  error: "",
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        users: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_USERS_FAILED:
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
