import React from "react";
import { Formik } from "formik";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { addUser } from "../actions/actions";
import { connect } from "react-redux";
function AddUser(props) {
  const history = useHistory();
  return (
    <div className="App">
      <h1>Add Users</h1>
      <Formik
          initialValues={{ name: "", job: "" }}
          onSubmit={(values) => {
            props.dispatch(addUser(values,history));
          }}
        >
          {({
            values,
            handleChange,
            handleSubmit,
          }) => (
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

              <Button
                className="loginBtn"
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
    </div>
  );
}
const mapStateToProps = (state) => ({
  data: state.addReducer.data,
});
export default connect(mapStateToProps)(AddUser);
