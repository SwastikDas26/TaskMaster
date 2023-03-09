import React from 'react';
import "./style.css"
import Moon from "./moon.png";
import Profile from "./profile.svg";

function navbar() {
  return (
    <div className='Navbar'>
        <div className="logo">TaskMate</div>
        <div className="options">
            <ul>
                <li><a href='/' className='Menubtn'>Todo</a></li>
                <li><a href='/' className='Menubtn'>Project</a></li>
                <li><a href='/' className='Menubtn'>Team</a></li>
            </ul>
        </div>
        <div className="account">
            <a href='/'><img src={Moon} alt="theme" className='theme'/></a>
            <a href='/'><img src={Profile} alt="profile" className='profile'/></a>
        </div>
    </div>
  )
}

export default navbar;