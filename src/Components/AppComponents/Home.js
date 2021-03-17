import React, { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import {
  fetchList,
  fetchUser,
  fetchError,
  fetchNextList,
  userInput,
} from "../actions/actions";
import { Button } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import TextField from "@material-ui/core/TextField";
import SortIcon from "@material-ui/icons/ArrowDownward";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import Pagination from "@material-ui/lab/Pagination";
import Navbar from "react-bootstrap/Navbar";
import DataTable from "react-data-table-component";
const isIndeterminate = (indeterminate) => indeterminate;
const selectableRowsComponentProps = { indeterminate: isIndeterminate };
function Home(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const [isLoading2, setLoading2] = useState(false);
  const [inputVal, setInputVal] = useState(null);
  const page = 1;
  const perPage = props.list.per_page;
  const handleLogOut = () => {
    setLoading(true);
    localStorage.removeItem("Token");
    history.push("/login");
    setLoading(false);
  };
  const notify = () => toast.error("There's something wrong");
  useEffect(() => {
    dispatch(fetchList(page));
  }, []);

  const handleSearch = (e) => {
    const inputvals = e.target.value;
    setInputVal(e.target.value);
    dispatch(userInput(inputvals, props.list.data));
  };
  const columns = [
    {
      name: "First Name",
      selector: "first_name",
      sortable: true,
    },
    {
      name: "Last Name",
      selector: "last_name",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      right: false,
    },
    {
      name: "Actions",
      cell: (row, index, column, id) => (
        <div className="btns">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setLoading(true);
              dispatch(fetchUser(row.id, history));
            }}
          >
            Details
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => {
              dispatch(fetchError(23));
              notify();
            }}
          >
            <ErrorIcon />
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div className="App">
      <Navbar className="homeLogout">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setLoading2(true);
            history.push("/add-user");
          }}
        >
          Add User
          {isLoading2 && <ReactBootStrap.Spinner animation="border" />}
          <AddIcon />
        </Button>
        <h1>Home Page</h1>
        <Button variant="contained" color="primary" onClick={handleLogOut}>
          Log Out
        </Button>
      </Navbar>
      {props.data === "error" && <ToastContainer position="top-left" />}
      <div className="form">
        <TextField label="Search" variant="outlined" onChange={handleSearch} />
        <h2>Users:{perPage}</h2>
      </div>
      {isLoading ? (
        <ReactBootStrap.Spinner animation="border" />
      ) : (
        <DataTable
          columns={columns}
          data={inputVal == null ? props.list.data : props.inputdata}
          defaultSortField="First Name"
          sortIcon={<SortIcon />}
          selectableRowsComponentProps={selectableRowsComponentProps}
        />
      )}
      <Pagination
        count={2}
        size="large"
        onChange={(event, value) => {
          setLoading(true);
          dispatch(fetchNextList(value));
          setLoading(false);
        }}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  list: state.userListReducer.list,
  loading: state.userListReducer.loading,
  data: state.errorReducer.data,
  inputdata: state.inputReducer.inputdata,
});
export default connect(mapStateToProps, {
  fetchUser,
  fetchList,
  fetchError,
  fetchNextList,
})(Home);
