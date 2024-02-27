import React from 'react';
import "./index.css"
import { NavLink } from 'react-router-dom';


const Nav = () => {
  return (
    <nav>
        <NavLink className={'element'} to="/Users">User CRUD</NavLink>
        <br></br>
        <NavLink className={'element'} to="/News">News Section</NavLink>
    </nav>
  )
}

export default Nav
