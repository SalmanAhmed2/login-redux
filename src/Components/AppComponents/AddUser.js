import React, { useState } from "react";
import { Formik } from "formik";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import * as ReactBootStrap from "react-bootstrap";
import { addUser } from "../actions/actions";
import { connect } from "react-redux";
function AddUser(props) {
  const history = useHistory();
  const [errr, setErrr] = useState("");
  const [isLoading, setLoading] = useState(false);
  return (
    <div className="App">
      <h1>Add Users</h1>
      <Formik
        initialValues={{ name: "", job: "" }}
        onSubmit={(values) => {
          setLoading(true)
          if(values.name && values.job){
            props.dispatch(addUser(values, history))
          }else{
            setErrr("Warning! Make sure that all the fields are filled")
          }
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
                placeholder="Name"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                name="job"
                onChange={handleChange}
                value={values.job}
                placeholder="Job"
              />
            </Form.Group>

            <Button variant="contained" color="primary" type="submit">
              Submit
              {isLoading && <ReactBootStrap.Spinner animation="border" />}
            </Button>
          </Form>
        )}
      </Formik>
      <p className="warning">{errr}</p>
    </div>
  );
}
const mapStateToProps = (state) => ({
  // loading: state.
});
export default connect(mapStateToProps)(AddUser);
