import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Choice() {
  return(
      <div>
      <Link to="/register/user">
  <Button variant="primary" type="submit">
    Signup as User
  </Button>
        <br/>
      </Link>
      <Link to="/register/seller">
  <Button variant="primary" type="submit">
    Signup as Seller
  </Button>
      </Link>
  </div>
      );
}
export default Choice;
