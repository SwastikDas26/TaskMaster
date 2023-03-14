import React , {useState} from 'react'
import './style.css';

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(value, task.id);
        setValue("");
    }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
        <input type="text" className='outline-none bg-[#f3f3f3] px-4 py-2 border-[1px] border-solid border-[#8758ff] mt-4 mb-4 w-[300px] max-[1367px]:w-[200px] max-[1220px]:w-[375px] max-[1025px]:w-[300px] max-[398px]:w-[270px]' value={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='bg-[#f2edf2] text-[#404040] border-0 p-[8.8px] max-[398px]:text-[14px] max-[370px]:text-[11px] cursor-pointer'>Update Task</button>
    </form>
  )
}
