import axios from "axios";
export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "FETCH_USERS_FAILED";
export const FETCH_LIST_REQUEST = "FETCH_LIST_REQUEST";
export const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS";
export const FETCH_LIST_FAILED = "FETCH_LIST_FAILED";
export const ADD_USER_REQUEST = "ADD_USER_REQUEST";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILED = "ADD_USER_FAILED";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILED = "FETCH_USER_FAILED";
export const EDIT_USER_REQUEST = "EDIT_USER_REQUEST";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAILED = "EDIT_USER_FAILED";
export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILED = "DELETE_USER_FAILED";
/////////......Users Response Actions.............../////////
const loginUserRequest = (loading) => {
  return {
    type: LOGIN_USER_REQUEST,
  };
};
const loginUserSuccess = (users) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: users,
  };
};
const loginUserFailed = (error) => {
  return {
    type: LOGIN_USER_FAILED,
    payload: error,
  };
};
export const loginUsers = (data, history) => (dispatch) => {
  fetch("https://reqres.in/api/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      response.token && history.push("/home");
      dispatch({
        payload: response,
        type: LOGIN_USER_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_USER_FAILED,
        payload: err,
      });
    });
};
///////////.........List Actions...............////////////////
const fetchListRequest = (loading) => {
  return {
    type: FETCH_LIST_REQUEST,
  };
};
const fetchListSuccess = (list) => {
  return {
    type: FETCH_LIST_SUCCESS,
    payload: list,
  };
};
const fetchListFailed = (error) => {
  return {
    type: FETCH_LIST_FAILED,
    payload: error,
  };
};
export const fetchList = () => async (dispatch) => {
  try {
    const res = await axios.get("https://reqres.in/api/unknown");
    dispatch({
      type: FETCH_LIST_SUCCESS,
      payload: res.data.data,
    });
  } catch (e) {
    dispatch({
      type: FETCH_LIST_FAILED,
      payload: console.log(e),
    });
  }
};

///////////.........AddUser Actions...............////////////////
const addUserRequest = (loading) => {
  return {
    type: ADD_USER_REQUEST,
  };
};
const addUserSuccess = (list) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: list,
  };
};
const addUserFailed = (error) => {
  return {
    type: ADD_USER_FAILED,
    payload: error,
  };
};
export const addUser = (data, history) => (dispatch) => {
  axios
    .post("https://reqres.in/api/users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    })
    .then((response) => {
      response.data.id && history.push("/home");
      dispatch({
        payload: response.data,
        type: ADD_USER_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_USER_FAILED,
        payload: err,
      });
    });
};
/////////......User Details Actions.............../////////
const fetchUserRequest = (loading) => {
  return {
    type: FETCH_USER_REQUEST,
  };
};
const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};
const fetchUserFailed = (error) => {
  return {
    type: FETCH_USER_FAILED,
    payload: error,
  };
};
export const fetchUser = (id) => (dispatch) => {
  console.log({id})
  fetch(`https://reqres.in/api/unknown/${id}`)
      .then((response) => response.json())
      .then((response) => {
    dispatch({
      payload: response.data,
      type: FETCH_USER_SUCCESS,
    });
  })
  .catch((err) => {
    dispatch({
      type: FETCH_USER_FAILED,
      payload: err,
    });
  });
};

///////////.........EDITUser Actions...............////////////////
const EDITUserRequest = (loading) => {
  return {
    type: EDIT_USER_REQUEST,
  };
};
const EDITUserSuccess = (list) => {
  return {
    type: EDIT_USER_SUCCESS,
    payload: list,
  };
};
const EDITUserFailed = (error) => {
  return {
    type: EDIT_USER_FAILED,
    payload: error,
  };
};
export const editUser = (values, id, history) => (dispatch) => {
  axios
    .post(`https://reqres.in/api/users/${id}`, {
      method: "update",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
      }),
    })
    .then((response) => {
      response.data.id && history.push("/home");
      dispatch({
        payload: response.data,
        type: EDIT_USER_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: EDIT_USER_FAILED,
        payload: err,
      });
    });
};

///////////.........Delete User Actions...............////////////////
const deleteUserRequest = (loading) => {
  return {
    type: DELETE_USER_REQUEST,
  };
};
const deleteUserSuccess = (list) => {
  return {
    type: DELETE_USER_SUCCESS,
    payload: list,
  };
};
const deleteUserFailed = (error) => {
  return {
    type: DELETE_USER_FAILED,
    payload: error,
  };
};
export const deleteUser = (id, history) => (dispatch) => {
  axios
    .post(`https://reqres.in/api/users/${id}`, {
      method: "delete",
    })
    .then((response) => {
      response.data.id && history.push("/home");
      dispatch({
        payload: response.data,
        type: DELETE_USER_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_USER_FAILED,
        payload: err,
      });
    });
};
