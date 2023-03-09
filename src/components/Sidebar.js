import React from 'react'
import "./style.css"
import calendar from './calendar-day-solid.svg';

const Sidebar = () => {
    const handle = function() {
        console.log('Hello');
    }
    return (
        <div className='Sidebar'>
            <ul className='upper'>
                <li onClick={handle}><span id='btn1'><img src={calendar} alt="calender" className='calender'/><span id='today'>Today</span></span></li>
                {/* <li><button><span id='btn1'><img src={calendar} alt="calender" className='calender'/><span id='today'>Today</span></span></button></li> */}
                {/* <li><button><span id='btn1'><img src={calendar} alt="calender" className='calender'/><span id='today'>Today</span></span></button></li> */}
            </ul>
        </div>
    )
}

export default Sidebar;