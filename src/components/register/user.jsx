import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, FloatingLabel, Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
function Userregister() {
  return(
      <div>
<Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="Text" placeholder="First name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="Text" placeholder="Last name" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridEmailAddress">
    <Form.Label>Email</Form.Label>
    <Form.Control placeholder="Enter Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type= "Password" placeholder="Enter Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridPassword">
    <Form.Label>Retype Password</Form.Label>
    <Form.Control type= "Password" placeholder="Confirm Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </div>
      );
}
export default Userregister;
