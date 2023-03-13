import React, { useState } from "react";
import "./style.css";

export const TodoForm = ({ addTodo }) => {
	const [value, setValue] = useState("");
	const [important, setImportant] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		const currentDate = new Date();
    	const formattedDate = currentDate.toLocaleString();
		addTodo(value, important, formattedDate);
		setValue("");
		setImportant(false);
	};

	const handleImportantChange = () => {
		setImportant(!important);
	}

	return (
			<form className="TodoForm" onSubmit={handleSubmit}>
				<input
					type="text"
					className="todo-input"
					value={value}
					placeholder="What is the task today?"
					onChange={(e) => setValue(e.target.value)}
				/>
				<input
					type="checkbox"
					id="important"
					checked={important}
					onChange={handleImportantChange}
				/>
				<label htmlFor="important" className="impLabel">Important</label>
				<button type="submit" className="todo-btn">Add Task</button>
			</form>
	);
};
