import {
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
} from "../actions/actions";

const initialState = {
  data: [],
  loading: false,
  error: [],
};
const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_USER_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: "",
      };
    case ADD_USER_FAILED:
      return {
        data: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default addReducer;
