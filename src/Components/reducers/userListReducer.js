import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILED,
} from "../actions/actions";
const initialState = {
  list: [],
  loading: false,
  error: [],
};
const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LIST_SUCCESS:
      return {
        list: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_LIST_FAILED:
      return {
        error: action.payload,
        loading: false,
        list: "",
      };
    default:
      return state;
  }
};
export default userListReducer;
