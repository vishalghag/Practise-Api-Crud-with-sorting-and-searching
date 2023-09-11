import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const[id,setId] = useState('')
    const [userName,setUserName] = useState('');
    const [userPassword,setUserPassword] = useState('');

    const history = useNavigate()

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setUserName(localStorage.getItem('name'));
        setUserPassword(localStorage.getItem('email'))
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube/${id}`,{
            name:userName,
            email:userPassword
        }).then(() => history('/read'))
    }

    const getUserNameDetails = (e) => {
        setUserName(e.target.value)
    }

    const getUserPassDetails = (e) => {
        setUserPassword(e.target.value)
    }

  return (
    <div>
        <h2>Update </h2>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={userName} onChange={getUserNameDetails}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Your Password</Form.Label>
        <Form.Control type="text" placeholder="Password" value={userPassword} onChange={getUserPassDetails}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Update
      </Button>
    </Form>
    </div>
  )
}

export default Update