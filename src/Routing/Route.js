import React from "react";
import { BrowserRouter, NavLink, Route,Routes } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import About from "./About";
import Contact from "./Contact";

function RouterCompo(){
    return(

        <>
            <BrowserRouter>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/student'>Student</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/student" element={<Student/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterCompo;