import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import * as ReactBootStrap from "react-bootstrap";
import { connect } from "react-redux";
import { registerUser } from "../actions/actions";
function Register(props) {
  const [isLoading, setLoading] = useState(props.loading);
  const history = useHistory();
  return (
    <div className="App">
      <h1>Registration Page</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values) => {
          setLoading(true);
          props.dispatch(registerUser(values, history));
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                placeholder="Email"
              />
              <Form.Text>
                <p className="warning">
                  {errors.email && touched.email && errors.email}
                </p>
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                placeholder="Password"
              />
              <p className="warning">
                {errors.password && touched.password && errors.password}
              </p>
            </Form.Group>
            <Button
              className="loginBtn"
              variant="contained"
              color="primary"
              type="submit"
            >
              Login
              <AccountCircleIcon />
              {isLoading && <ReactBootStrap.Spinner animation="border" />}
            </Button>
          </Form>
        )}
      </Formik>
      {/* <p className="warning">{props.users.error}</p> */}
      <Link to="/login">Already have an account? Login now!</Link>
    </div>
  );
}
const mapStateToProps = (state) => ({
  register_users: state.registerReducer.register_users,
  loading: state.registerReducer.loading,
});
export default connect(mapStateToProps)(Register);
