import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [userName,setUserName] = useState('');
    const [userPassword,setUserPassword] = useState('');

    const history = useNavigate()

    const getUserNameDetails = (e) => {
        setUserName(e.target.value)
        console.log(userName);
    }

    const getUserPassDetails = (e) => {
        setUserPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube',{
            name: userName,
            email:userPassword
        }).then(() => 
            history('/read')
        )
        setUserName('');
        setUserPassword('')
    }

    return(
        <>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={userName} onChange={getUserNameDetails}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Your Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={getUserPassDetails} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default Create