import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { loginUsers } from "../actions/actions";
function LoginForm(props) {
  const history = useHistory();
  return (
    <div className="App">
      <h1>Login Page</h1>
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
          props.dispatch(loginUsers(values, history));
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
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
const mapStateToProps = (state) => ({
  users: state.loginReducer.users,
});
export default connect(mapStateToProps)(LoginForm);
