import React,{useEffect} from "react";
import { connect,useDispatch } from "react-redux";
import {deleteUser}from '../actions/actions'
import { Button } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory, useParams, useLocation } from "react-router-dom";
function Details(props) {
    const dispatch = useDispatch()
  const history = useHistory();
  useEffect(() => {
     dispatch(deleteUser())
  }, [])
  return (
    <div className="App">
      <h1>Details</h1>
      <h2>
        Name:{""}
        <span>{props.data.name}</span>
      </h2>
      <h2>
        Year:{""}
        <span>{props.data.year}</span>
      </h2>
      <h2>
        Colour:{""}
        <span>{props.data.color}</span>
      </h2>
      <h2>
        Pantone Value:{""}
        <span>{props.data.pantone_value}</span>
      </h2>
      <div className="btns">
       <Button color="primary" variant="contained" onClick={()=>history.push(`/edit/${props.data.id},${props.data}`)}>
          Edit <CreateIcon />
        </Button>
        <Button color="primary" variant="contained"
        onClick={()=>{ 
        dispatch(deleteUser(props.data.id,history))
        }}
        >
          Delete <DeleteIcon />
        </Button> 
           
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.detailReducer.data,
});
export default connect(mapStateToProps,{deleteUser})(Details);
