import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import TableBody from "./TableBody";
import { filterFn } from "../helper/helper";

const Read = () => {
  const [details, setDetails] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [toggle,setToggle] = useState(false)

  useEffect(() => {
    getApiFn();
  }, []);

  const getApiFn = () => {
    axios
      .get("https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube")
      .then((res) => setDetails(res.data));
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube/${id}`)
      .then(() => getApiFn());
  };

  let searchData = filterFn(details, searchText);

  const editHandler = (id,name,email) => {
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('email',email);
  }

  const sortingFnDSC = () => {
   let sortData = [...details]
   sortData.sort((a, b) => b.id - a.id);
   setDetails(sortData)
   setToggle(true)
  }

  const sortingFnASC = () => {
    let sortData = [...details]
    sortData.sort((a, b) => a.id - b.id);
    setDetails(sortData)
    setToggle(false)
   }

  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-between'}}>

        <input
          type="text"
          style={{ marginBottom: "20px" }}
          placeholder="search name"
          onChange={(e) => setSearchText(e.target.value)}
        />

      </div>
        {searchData.length === 0 ? <h2>No User Name of:- {searchText} </h2> : 
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>{toggle ? <Button variant="primary" onClick={sortingFnASC} > ASC</Button> : <Button variant="primary" onClick={sortingFnDSC} > DSC</Button>}</th>
            <th>User Name</th>
            <th>User Password</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <TableBody details={searchData} handleDelete={handleDelete} editHandler={editHandler}/>
        </tbody>
      </Table>
      }
      
    </div>
  );
};

export default Read;
