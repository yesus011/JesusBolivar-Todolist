import React, { useState } from "react";
import Task from "../component/TodoList";


const App = () => {
	const [task, setTask] = useState("")
	const [taskList, setTaskList] = useState([])


	function handleKeyDown(event) {

		if (event.keyCode == 13 && task.trim() != "") {
			setTaskList([
				...taskList,
				task
			])
			setTask("")
		}
		
	}
	function handleChange(event) {
		setTask(event.target.value)
	}

	function handleDelete(id) {
		const newTaskList = taskList.filter((item, index) => index != id)
		setTaskList(newTaskList)
	}


	return (
		<>
			<div>
				<div className="d-flex justify-content-center">
					<h1 className="title">Task List</h1>
				</div>

				<div className="task d-flex justify-content-center">
					<input 
						id="taskInput"
						type="text" 
						onChange={handleChange} 
						onKeyDown={handleKeyDown} 
						className="w-95 h-100 border border-0 fs-3" 
						value={task}
						placeholder="What needs to be done?"
					/>
				</div>
				{
					taskList.map((item, index) => {
						return (
							<Task key={index} value={item} handleDelete={handleDelete} id={index}/>
						)
					})
				}
					
                
                
				<div className="d-flex justify-content-center">
					<div className="footer d-flex align-items-end">
						<span className="ms-3">{ taskList.length == 1 ? `${taskList.length} item left` :
							taskList.length == 0 ? "No tasks" :  
							`${taskList.length} items left` } 
						</span>
					</div>
					<div className="footer foot-2"></div>
					<div className="footer foot-3"></div>
					<div className="footer foot-4"></div>
				</div>
			</div>
		</>
	);
};

export default App;