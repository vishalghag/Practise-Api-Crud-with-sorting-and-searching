import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TableBody = ({details,handleDelete,editHandler}) => {

    return details.map((user) => {
        const {id,name,email} = user

        return(
            <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <Link to='/edit'>
            <td><Button variant='primary' onClick={() => editHandler(id,name,email)} >Edit</Button></td>
            </Link>
            <td><Button variant='danger' onClick={() => handleDelete(id)} >Delete</Button></td>
            </tr>
        )
    })
}

export default TableBody