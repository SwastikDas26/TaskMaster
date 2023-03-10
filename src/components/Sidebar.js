import React from 'react'
import "./style.css"
import sun from './cloud-sun-solid.svg';
import calendar from './calendar-day-solid.svg';
import important from './circle-exclamation-solid.svg'
import setting from './gear-solid.svg'

const Sidebar = () => {
    const handle = function() {
        console.log('Hello');
    }
    return (
        <div className='h-full flex flex-col justify-between height'>
            <ul className='flex flex-col'>
                <li className='h-10 w-44 flex items-center gap-2.5 p-2 bg-btn1 rounded text-btn2'><img src={calendar} alt='calender' className='h-4 w-4' />Today</li>
                <li className='h-10 w-44 flex items-center gap-2.5 p-2 bg-btn1 rounded text-btn2'><img src={sun} alt='calender' className='h-4 w-4' />My Day</li>
                <li className='h-10 w-44 flex items-center gap-2.5 p-2 bg-btn1 rounded text-btn2'><img src={important} alt='calender' className='h-4 w-4' />Important</li>
            </ul>
            <ul>
            <li className='h-10 w-44 flex items-center gap-2.5 p-2 bg-btn1 rounded text-btn2'><img src={setting} alt='calender' className='h-4 w-4' />Settings</li>
            </ul>
        </div>
    )
}

export default Sidebar;