import React, { useState } from 'react'
// import {FormGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { FloatingLabel, Form, Button } from 'react-bootstrap'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={loginUser}>
        <>
          <FloatingLabel
            controlId='floatingInput'
            label='Email address'
            className='mb-3'
          >
            <Form.Control
              value={email}
              onChange={ev => setEmail(ev.target.value)}
              type='email'
              placeholder='name@example.com'
            />
          </FloatingLabel>
          <FloatingLabel controlId='floatingPassword' label='Password'>
            <Form.Control
              value={password}
              onChange={ev => setPassword(ev.target.value)}
              type='password'
              placeholder='Password'
            />
          </FloatingLabel>
        </>
        <br />
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </form>
    </div>
  )
}
export default Login
