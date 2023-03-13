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
			<form className="w-full" onSubmit={handleSubmit}>
				<input
					type="text"
					className="outline-none bg-[#f3f3f3] px-4 py-2 border-[1px] border-solid border-[#8758ff] mt-4 mb-8 w-[300px]"
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
				<button type="submit" className="bg-[#f2edf2] text-[#404040] border-0 p-[8.8px] cursor-pointer">Add Task</button>
			</form>
	);
};
