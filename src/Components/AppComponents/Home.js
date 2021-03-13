import React from "react";
import { connect, useDispatch } from "react-redux";
import { fetchList, fetchUser } from "../actions/actions";
import { Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import AddIcon from "@material-ui/icons/Add";
import Navbar from "react-bootstrap/Navbar";
function Home(props) {
  const history = useHistory();
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchList())
  }, [])
  return (
    <div className="App">
      <Navbar className="homeLogout">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            history.push("/add-user");
          }}
        >
          Add User
          <AddIcon />
        </Button>
        <h1>Home Page</h1>
        <Button variant="contained" color="primary">
          Log Out
          {/* <ExitToAppIcon /> */}
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
                      dispatch(fetchUser(item.id));
                      history.push(`/details/${item.id}`);
                    }}
                  >
                    Details
                    <ArrowForwardIosIcon />
                  </Button>
                </td>
              </tr>
            </tbody>
          </>
        ))}
      </Table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  list: state.userListReducer.list,
});
export default connect(mapStateToProps, {fetchUser, fetchList})(Home);
