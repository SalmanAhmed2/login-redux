import React, { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import {
  fetchList,
  fetchUser,
  fetchError,
  fetchNextList,
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
  const [page, setPage] = useState(1);
  const [filtered, setFiltered] = useState({});
  const [inputval, setInputVal] = useState(null);
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
    const filterData = props.list.data.filter((data) => {
      if (inputvals === "") return data;
      else if (
        data.first_name.toLowerCase().includes(inputvals.toLowerCase()) ||
        data.last_name.toLowerCase().includes(inputvals.toLowerCase()) ||
        data.email.toLowerCase().includes(inputvals.toLowerCase())
      )
        return data;
    });
    setFiltered(filterData);
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
          data={inputval === null ? props.list.data : filtered}
          defaultSortField="First Name"
          sortIcon={<SortIcon />}
          selectableRowsComponentProps={selectableRowsComponentProps}
        />
        // <table>
        //   <thead>
        //     <tr className="table-head">
        //       <th>First Name</th>
        //       <th>Last Name</th>
        //       <th className="email-head">Email</th>
        //       <th className="action-head">Actions</th>
        //     </tr>
        //   </thead>
        //   {props.list.map((item, id) => (
        //     <>
        //       <tbody>
        //         <tr key={item.id}>
        //           <td>{item.first_name}</td>
        //           <td>{item.last_name}</td>
        //           <td>{item.email}</td>

        //         </tr>
        //       </tbody>
        //     </>
        //   ))}
        // </table>
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
});
export default connect(mapStateToProps, {
  fetchUser,
  fetchList,
  fetchError,
  fetchNextList,
})(Home);
