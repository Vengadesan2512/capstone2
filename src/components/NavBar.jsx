import React, { useContext, useState } from 'react'
import '../CSS/navbar.css'
import {Link} from 'react-router-dom'
import {AppContext} from '../Context/App_Context'

const NavBar = () => {
  const {logOut}= useContext(AppContext)
  return (
    <div className='mian-navcontainer'>
       <div className='Navbar'>
      <div className='title'><h1>Kitchen Receipe</h1></div>
     <div className='option-btn'> 
     <Link to={"/"} className='nav-btn'> HOME</Link>
     <Link to={"/add"} className='nav-btn'> ADD</Link>
     <Link to={"/register"} className='nav-btn'> REGISTER</Link>
      <Link to={"/profile"} className='nav-btn'> PROFILE</Link>
      <Link to={"/login"} className='nav-btn'> LOGIN</Link>
        <Link className='nav-btn' onClick={logOut}> LOGOUT</Link>   
        <Link to={"/saved"} className='nav-btn'> SAVED</Link>
    </div>
    </div>
    </div>
   
    )
}
export default NavBar;