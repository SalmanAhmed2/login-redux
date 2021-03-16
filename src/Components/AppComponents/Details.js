import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { deleteUser } from "../actions/actions";
import * as ReactBootStrap from "react-bootstrap";
import { Button } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
function Details(props) {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const data = props.data;
  const history = useHistory();
  return (
    <div className="App">
      <h1>Details</h1>

      {isLoading ? (
        <ReactBootStrap.Spinner animation="border" />
      ) : (
        <>
          <h2>
            First Name: <span>{data.first_name}</span>
          </h2>
          <h2>
            Last Name: <span>{data.last_name}</span>
          </h2>
          <h2>
            Email: <span>{data.email}</span>
          </h2>
          <div className="detail-btns">
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                setLoading(true);
                history.push(`/edit/${data.id}`, { data });
              }}
            >
              Edit <CreateIcon />
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                setLoading(true);
                dispatch(deleteUser(data.id, history));
              }}
            >
              Delete <DeleteIcon />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.detailReducer.data,
  loading: state.detailReducer.loading,
});
export default connect(mapStateToProps, { deleteUser })(Details)