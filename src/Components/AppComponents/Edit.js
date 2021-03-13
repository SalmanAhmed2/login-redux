import React from 'react'
import { Button } from "@material-ui/core";
import {connect} from 'react-redux'
import { useHistory, useParams, useLocation } from "react-router-dom";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import SaveIcon from "@material-ui/icons/Save";
import {editUser} from '../actions/actions'
function Edit(props) {
    const location = useLocation();
    const history = useHistory();
    const id = useParams();
    let item = location.state.item
    return (
        <div className="App">
            <h1>Edit Page</h1>
            <Formik
          initialValues={{
            name: item.name,
            pantone_value: item.pantone_value,
          }}
          onSubmit={(values) => {
          props.dispatch(editUser(values,id,history))
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  value={values.pantone_value}
                  type="text"
                  name="pantone_value"
                  onChange={handleChange}
                  placeholder="Value"
                />
              </Form.Group>

              <Button
                className="loginBtn"
                variant="contained"
                color="primary"
                type="submit"
                startIcon={<SaveIcon />}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.addReducer.data,
  });
export default connect(mapStateToProps)(Edit)