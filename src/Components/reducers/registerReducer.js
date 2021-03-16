import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILED,
  } from "../actions/actions";

  const initialState = {
    loading: false,
    register_users: [],
    error: [],
  };
  const registerReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_USER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case REGISTER_USER_SUCCESS:
        return {
          register_users: action.payload,
          loading: false,
          error: "",
        };
      case REGISTER_USER_FAILED:
        return {
          register_users: [],
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default registerReducer;
  