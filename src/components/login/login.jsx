import React from 'react';
// import {FormGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FloatingLabel, Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
function Login() {
  return(
    <div>
  <>
  <FloatingLabel
    controlId="floatingInput"
    label="Email address"
    className="mb-3"
  >
    <Form.Control type="email" placeholder="name@example.com" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingPassword" label="Password">
    <Form.Control type="password" placeholder="Password" />
  </FloatingLabel>
  </>
        <br/>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </div>
  );
}
export default Login;
