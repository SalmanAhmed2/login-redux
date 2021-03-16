import {
   ERROR_FETCH_REQUEST,
    ERROR_FETCH_SUCCESS,
   ERROR_FETCH_FAILED,
  } from "../actions/actions";
  
  const initialState = {
    data: [],
    error: [],
    loading:false
  };
  const errorReducer = (state = initialState, action) => {
    switch (action.type) {
      case ERROR_FETCH_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ERROR_FETCH_SUCCESS:
        return {
          data: action.payload,
          loading: false,
          error: "",
        };
      case  ERROR_FETCH_FAILED:
        return {
          data: [],
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  export default errorReducer;
  