import React from 'react';
// import {FormGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FloatingLabel, Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
function Sell() {
  return(
    <div>
      <h1>Sell books Here</h1>
      <br/>
      <br/>
      <h2>You have to first Register as a Seller</h2>
      <br/>
      <br/>
      <h2>Enter your Publication Name</h2>
      <br/>
      <br/>
     <input name="Publication" placeholder="Publication Name"></input>
      <br/>
      <br/>
     <Button>Register</Button>
  </div>
  );
}
export default Sell;
