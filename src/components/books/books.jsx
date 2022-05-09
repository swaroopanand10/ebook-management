import React from 'react'
// import {FormGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
// import {FloatingLabel, Form, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
function Books() {
  return (
    <div>
      <h1>Explore books</h1>
      {/* <input type="text" placeholder="search for books here">search for books</input> */}
      <input placeholder="search here" type="text" id="fname" name="fname"/>
      <br/>
      <br/>
      <a href="">sample book 1</a><br/>
      <a href="">sample book 2</a><br/>
      <a href="">sample book 3</a><br/>
      <a href="">sample book 4</a><br/>
      <a href="">sample book 5</a><br/>
      <a href="">sample book 6</a><br/>
      <a href="">sample book 7</a><br/>
      <a href="">sample book 8</a><br/>
      <a href="">sample book 9</a><br/>
      
    </div>
  )
}
export default Books
