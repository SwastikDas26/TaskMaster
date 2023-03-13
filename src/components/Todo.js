import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './style.css';

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='flex justify-between items-center bg-[#f2edf2] text-[#404040] py-3 px-4 rounded-md cursor-pointer'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>{task.task}  <span className='date'>{task.dateAdded}</span> </p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTodo(task.id)}/>
        </div>
    </div>
  )
}
