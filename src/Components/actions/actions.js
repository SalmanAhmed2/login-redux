import axios from "axios";
export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILED = "REGISTER_USERS_FAILED";
export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USERS_FAILED";
export const FETCH_LIST_REQUEST = "FETCH_LIST_REQUEST";
export const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS";
export const FETCH_LIST_FAILED = "FETCH_LIST_FAILED";
export const FETCH_NEXTLIST_REQUEST = "FETCH_NEXTLIST_REQUEST";
export const FETCH_NEXTLIST_SUCCESS = "FETCH_NEXTLIST_SUCCESS";
export const FETCH_NEXTLIST_FAILED = "FETCH_NEXTLIST_FAILED";
export const ADD_USER_REQUEST = "ADD_USER_REQUEST";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILED = "ADD_USER_FAILED";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILED = "FETCH_USER_FAILED";
const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
const EDIT_USER_FAILED = "EDIT_USER_FAILED";
const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
const DELETE_USER_FAILED = "DELETE_USER_FAILED";
export const ERROR_FETCH_REQUEST = "ERROR_FETCH_REQUEST";
export const ERROR_FETCH_SUCCESS = "ERROR_FETCH_SUCCESS";
export const ERROR_FETCH_FAILED = "ERROR_FETCH_FAILED";
export const USER_INPUT_DATA = "USER_INPUT_DATA"

/////////......Register Users Response Actions.........../////////
export const registerUser = (data, history) => (dispatch) => {
  fetch("https://reqres.in/api/register", {
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
      localStorage.setItem("Token", response.token);
      response.token && history.push("/");
      dispatch({
        payload: response,
        type: REGISTER_USER_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_USER_FAILED,
        payload: err,
      });
    });
};

/////////......Users Response Actions.........../////////
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
      localStorage.setItem("Token", response.token);
      response.token && history.push("/");
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

export const fetchList = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`https://reqres.in/api/users?page=${id}`);
    dispatch({
      type: FETCH_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: FETCH_LIST_FAILED,
      payload: console.log(e),
    });
  }
};

///////////.........NextList Actions...............////////////////

export const fetchNextList = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`https://reqres.in/api/users?page=${id}`);
    dispatch({
      type: FETCH_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: FETCH_LIST_FAILED,
      payload: console.log(e),
    });
  }
};

///////////.........AddUser Actions...............////////////////

export const addUser = (data, history) => async (dispatch) => {
  await axios
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
      response.data && history.push("/");
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
  /////////...........USER DATA INPUT....................//////////

export const userInput =(data, allData)=>({
  type: USER_INPUT_DATA,
  data,
  allData
})

/////////......User Details Actions.............../////////



export const fetchUser = (id, history) => async (dispatch) => {
  await fetch(`https://reqres.in/api/users/${id}`)
    .then((response) => response.json())
    .then((response) => {
      response.data && history.push(`/details/${id}`);
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
/////////......Error Actions.............../////////

export const fetchError = (id) => async (dispatch) => {
  await fetch(`https://reqres.in/api/unknown/${id}`)
    .then((response) => response.json())
    .then((response) => {
      dispatch({
        payload: "error",
        type: ERROR_FETCH_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch({
        type: ERROR_FETCH_FAILED,
        payload: err,
      });
    });
};

// ///////////.........EDITUser Actions...............////////////////

export const editUser = (values, id, history) => async (dispatch) => {
  await axios
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
      response.data.id && history.push("/");
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
export const deleteUser = (id, history) => async (dispatch) => {
  await axios
    .post(`https://reqres.in/api/users/${id}`, {
      method: "delete",
    })
    .then((response) => {
      response.data.id && history.push("/");
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
