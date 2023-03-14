import React, { useState, useEffect } from "react";
import './style.css';
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import sun from './cloud-sun-solid.svg';
import calendar from './calendar-day-solid.svg';
import important from './circle-exclamation-solid.svg'
import setting from './gear-solid.svg'
uuidv4();

export const TodoWrapper = () => {
	const [todos, setTodos] = useState([]);
    const [showImportantOnly, setShowImportantOnly] = useState(false);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('todos'));
        if (savedTasks) {
          setTodos(savedTasks);
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

	const addTodo = (todo, importantTask, date) => {
		setTodos([...todos,{ 
                id: uuidv4(), 
                task: todo,
                completed: false,
                important: importantTask,
                dateAdded: date,  
                isEditing: false 
            },
		]);
        console.log(todos);
	};

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo));
    };

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo));
    }

    const handleShowAll = () => {
        setShowImportantOnly(false);
    };
    
    const handleShowImportantOnly = () => {
        setShowImportantOnly(true);
    };
    
    const filteredTasks = showImportantOnly ? todos.filter(todos => todos.important) : todos;

	return (
        <div className="flex min-h-[520px] max-[520px]:flex-col">
            <div className='flex flex-col justify-between min-[520px]:min-h-[520px] mt-20 max-[520px]:flex-row'>
                <div className='flex flex-col max-[520px]:flex-row max-[520px]:justify-center max-[520px]:items-center'>
                    <button type="button" className='h-10 xl:w-44 lg:w-32 max-[520px]:text-[12px] flex items-center gap-2.5 p-2 bg-btn1 rounded text-btn2 cursor-pointer'><img src={calendar} alt='calender' className='h-4 w-4' onClick={handleShowAll}/>Today</button>
                    <button type="button" className='h-10 xl:w-44 lg:w-32 max-[520px]:text-[12px] flex items-center gap-2.5 p-2 bg-btn1 rounded text-btn2 cursor-pointer'><img src={sun} alt='calender' className='h-4 w-4' onClick={handleShowAll}/>My Day</button>
                    <button type="button" className='h-10 xl:w-44 lg:w-32 max-[520px]:text-[12px] flex items-center gap-2.5 p-2 bg-btn1 rounded text-btn2 cursor-pointer'><img src={important} alt='calender' className='h-4 w-4' onClick={handleShowImportantOnly}/>Important</button>
                </div>
                <ul>
                    <li className='h-10 xl:w-44 lg:w-32 max-[520px]:text-[12px] max-[398px]:hidden flex items-center gap-2.5 p-2 bg-btn1 rounded text-btn2 cursor-pointer'><img src={setting} alt='calender' className='h-4 w-4' />Settings</li>
                </ul>
            </div>
            <div className="bg-white min-[520px]:mt-20 rounded-md p-8 max-[1025px]:w-[375px] max-[398px]:w-[350px] max-[370px]:w-[320px]">
                <div className="min-h-[400px]">
                {filteredTasks.map((todo, index) => (
                    todo.isEditing ? (
                        <EditTodoForm editTodo={editTask} task={todo} />
                    ) : (
                    <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                    )
                ))}
                </div>
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
	);
};
