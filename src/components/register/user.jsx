import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, FloatingLabel, Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

function Userregister() {

  const [fname, setFname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event){
  event.preventDefault()
  const response= await fetch('http://localhost:5000/api/register',{
  method: 'Post',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
      fname, 
      email, 
      password,
  }),
})
  const data = await response.json()
  console.log(data)
}
  return(
      <div>
<Form onSubmit={registerUser}>
  <Row className="mb-3">
    <Form.Group as={Col} controlId= "formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control 
              value={fname}
              onChange= { (ev) => setFname(ev.target.value)}
              type="Text" placeholder= "Name" />
    </Form.Group>

    {/* <Form.Group as={Col} controlId="formGridLastName"> */}
    {/*   <Form.Label>Last Name</Form.Label> */}
    {/*   <Form.Control type="Text" placeholder="Last name" /> */}
    {/* </Form.Group> */}
  </Row>

  <Form.Group className="mb-3" controlId= "formGridEmailAddress">
    <Form.Label>Email</Form.Label>
    <Form.Control 
            value={email} 
            onChange= { (ev) => setEmail(ev.target.value)}
            placeholder="Enter Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId= "formGridPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
            value={password} 
            onChange= {(ev) => setPassword(ev.target.value)}
            type= "Password" placeholder= "Enter Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId= "formGridPassword">
    <Form.Label>Retype Password</Form.Label>
    <Form.Control  
            value={password} 
            onChange= {(ev) => setPassword(ev.target.value)}
            type= "Password" placeholder= "Enter Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </div>
      );
}
export default Userregister;
