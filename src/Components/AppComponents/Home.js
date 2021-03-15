import React, { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { fetchList, fetchUser } from "../actions/actions";
import { Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import AddIcon from "@material-ui/icons/Add";
import Navbar from "react-bootstrap/Navbar";
function Home(props) {
  const [isLoading, setLoading] = useState(false);
  const [isLoading2, setLoading2] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchList());
  }, []);
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
          {isLoading2 &&
        <ReactBootStrap.Spinner animation="border" />}
          <AddIcon />
        </Button>
        <h1>Home Page</h1>
        <Button variant="contained" color="primary">
          Log Out
        </Button>
      </Navbar>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Year</th>
              <th>Actions</th>
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
                        dispatch(fetchUser(item.id));
                        history.push(`/details/${item.id}`);
                      }}
                    >
                      Details
                      <ArrowForwardIosIcon />
                      {isLoading && (
                        <ReactBootStrap.Spinner animation="border" />
                      )}
                    </Button>
                  </td>
                </tr>
              </tbody>
            </>
          ))}
        </Table>
      {/* )} */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  list: state.userListReducer.list,
  loading: state.userListReducer.loading,
});
export default connect(mapStateToProps, { fetchUser, fetchList })(Home);
