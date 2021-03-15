import React,{useState} from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import * as ReactBootStrap from "react-bootstrap";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import SaveIcon from "@material-ui/icons/Save";
import { editUser } from "../actions/actions";
function Edit(props) {
  const [isLoading, setLoading]=useState(false)
  const [errr, setErrr] = useState("");
  const location = useLocation();
  const history = useHistory();
  const id = useParams();
  const item = location.state.data;
  return (
    <div className="App">
      <h1>Edit Page</h1>
      <Formik
        initialValues={{
          name: item.name,
          pantone_value: item.pantone_value,
        }}
        onSubmit={(values) => {
          setLoading(true)
          if(values.name && values.pantone_value){
            props.dispatch(editUser(values,id, history))
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
              variant="contained"
              color="primary"
              type="submit"
              startIcon={<SaveIcon />}
            >
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
export default connect(null)(Edit);
