import {
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILED,
} from "../actions/actions";

const initialState = {
  data: [],
  loading: false,
  error: [],
};
const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EDIT_USER_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: "",
      };
    case EDIT_USER_FAILED:
      return {
        data: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default editReducer;
