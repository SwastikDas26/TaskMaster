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
			<form className="w-full mt-7 flex justify-center items-center max-[1220px]:flex-col" onSubmit={handleSubmit}>
				<input
					type="text"
					className="outline-none bg-[#f3f3f3] px-4 py-2 border-[1px] border-solid border-[#8758ff] mt-4 mb-4 w-[300px] max-[1367px]:w-[200px] max-[1220px]:w-[375px] max-[1025px]:w-[300px] max-[398px]:w-[270px]"
					value={value}
					placeholder="What is the task today?"
					onChange={(e) => setValue(e.target.value)}
				/>
				<div className="flex max-[1220px]:gap-16">
					<div className="flex justify-center items-center">
						<input
							type="checkbox"
							id="important"
							checked={important}
							onChange={handleImportantChange}
						/>
						<label htmlFor="important" className="impLabel max-[398px]:text-[14px]">Important</label>
					</div>
					<button type="submit" className="bg-[#f2edf2] text-[#404040] border-0 p-[8.8px] max-[398px]:text-[14px] max-[370px]:text-[11px] cursor-pointer">Add Task</button>
				</div>
			</form>
	);
};
