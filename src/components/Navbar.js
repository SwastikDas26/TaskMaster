import React from 'react';
import "./style.css"
import Moon from "./moon.png";
import Profile from "./profile.svg";

function navbar() {
  return (
    <div className='flex justify-between h-12 ml-4 mr-4 px-5 items-center bg-white rounded w-full'>
        <div className="text-logo cursor-pointer max-[469px]:text-[14px]">TaskMate</div>
        <div className="options">
            <ul className='flex justify-around list-none'>
                <li className='mx-3 px-3 max-[520px]:px-[6px] max-[469px]:text-[12px] cursor-pointer text-logo'>Todo</li>
                <li className='mx-3 px-3 max-[520px]:px-[6px] max-[469px]:text-[12px] cursor-pointer'>Project</li>
                <li className='mx-3 px-3 max-[520px]:px-[6px] max-[469px]:text-[12px] cursor-pointer'>Team</li>
            </ul>
        </div>
        <div className="flex">
            <a href='/'><img src={Moon} alt="theme" className='h-5 w-5 mx-2'/></a>
            <a href='/'><img src={Profile} alt="profile" className='h-5 w-5 mx-2'/></a>
        </div>
    </div>
  )
}

export default navbar;