import React, { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { fetchList, fetchUser, fetchError } from "../actions/actions";
import { Button } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import AddIcon from "@material-ui/icons/Add";
import Navbar from "react-bootstrap/Navbar";
function Home(props) {
  const [isLoading, setLoading] = useState(false);
  const [isLoading2, setLoading2] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogOut =()=>{
    setLoading(true);
    localStorage.removeItem("Token");
    history.push('/login')
    setLoading(false);
  }
  const notify = () => toast.error("There's nothing wrong");
  useEffect(() => {
    dispatch(fetchList())
  }, [])
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
      {props.data == "error" &&
      <ToastContainer position="top-left"/>}
      
     
      {isLoading ? (
        <ReactBootStrap.Spinner animation="border" />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th className="action-head">Actions</th>
            </tr>
          </thead>
          {props.list.map((item) => (
            <>
              <tbody>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.year}</td>
                  <td className="detailBTN">
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => {
                        setLoading(true);
                        dispatch(fetchUser(item.id, history));
                      }}
                    >
                      Details
                    </Button>
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => {
                        dispatch(fetchError(23))
                        notify()
                      }}
                    >
                      <ErrorIcon />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  list: state.userListReducer.list,
  loading: state.userListReducer.loading,
  data: state.errorReducer.data,
});
export default connect(mapStateToProps, { fetchUser, fetchList, fetchError })(
  Home
);
