import React from "react";
import { connect } from "react-redux";
import { fetchList, deleteUser } from "../actions/actions";
import { Button } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useHistory } from "react-router-dom";
import Table from "react-bootstrap/Table";
import AddIcon from "@material-ui/icons/Add";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Navbar from "react-bootstrap/Navbar";
function Home(props) {
  const history = useHistory();
  return (
    <div className="App">
      <Navbar className="homeLogout">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            history.push("/add-user")
          }}
        >
          Add User
          <AddIcon />
        </Button>

        <h1>Home Page</h1>

        {/* <Button className="logOutBtn" variant="contained" color="primary">
          Log Out
          <ExitToAppIcon />
        </Button> */}
      </Navbar>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Year</th>
            <th>Actions</th>
          </tr>
        </thead>
        {props.list.map((item, ind) => (
          <>
            <tbody>
              <tr key={ind}>
                <td>{item.name}</td>
                <td>{item.year}</td>
                <td className="detailBTN">
                  <Button onClick={()=>history.push(`/edit/${item.id}`,{item})}>
                    <CreateIcon />
                  </Button>
                  <Button>
                    <DeleteIcon onClick={()=>props.dispatch(deleteUser(item.id,history))} />
                  </Button>
                  <Button
                    onClick={() => {
                      history.push(`/details/${item.id}`,{item})
                      // props.dispatch(fetchUser(item));
                    }}
                  >
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
const mapDispatchToProps = (dispatch) => {
  return {
    fetchList: dispatch(fetchList()),
    deleteUser: dispatch(deleteUser()),
  };
};
const mapStateToProps = (state) => ({
  list: state.userListReducer.list,
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
