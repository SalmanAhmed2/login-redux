import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILED,
} from "../actions/actions";

const initialState = {
  data: [],
  loading: false,
  error: [],
};
const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_USER_FAILED:
      return {
        data: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default detailReducer;
