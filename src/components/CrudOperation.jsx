import { Button } from "react-bootstrap"
import Create from "./Create"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Read from "./Read"
import Update from "./Update"

const CrudOperation = () => {

    return(
        <>
            <h1>Crud Operation</h1>
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Create/>} />
            <Route path="/read" element={<Read/>}/>
            <Route path="/edit" element={<Update/>}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default CrudOperation