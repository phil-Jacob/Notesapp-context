import React, { useState, useContext, useEffect } from "react";
import { TaskContext } from "../Context/Taskcontext";

import task_alt from "../Assets/task_alt.svg";

import TaskContent from "./TaskContent";

function Tasks() {
  const { tasks, addTask } = useContext(TaskContext);
  const [newTask, setNewTask] = useState({ title: "" });
 
  const [ setErrorMessage] = useState("");

  useEffect(() => {
    // Clear the error message when the input changes
    
  }, [newTask.title]);
 
  const handleAddTask = () => {
    // Check if the title is not empty
    if (newTask.title.trim() === "") {
      setErrorMessage("Title is required.");
    } else {
      setErrorMessage(""); // Clear any previous error message
      addTask({ ...newTask, id: Date.now() });
      setNewTask({ title: "" });
    }
  };



  return ( 
    <div className="content">   
    <div className='add-note-task-container'>
    <div className='add-note-task'>
      Add a Task
      <div className='add-note-task-quit'>X</div>
    </div>       
    <div className='add-note-task-input'>
     <textarea value = {newTask.title} maxLength={35} onChange = {(e) => setNewTask({ ...newTask, title: e.target.value })} className='add-note-task-input-box' placeholder='Add a task...'></textarea>
    </div>
    <div className='add-note-task-clock'>
     
      <button type='button' className='icon-button' onClick={handleAddTask}>Add Task</button>
    </div>
  </div>
  <div className='tasks-home'>
  <div><img src={task_alt} alt=""></img>My Tasks</div>
  <div className='task-container'>           
            {
                tasks.map((task) => (
                    <TaskContent
                     id = {task.id} content = {task.title}
                    >
                    </TaskContent>
                ))
            }
        </div>
  </div>
  </div>
  );
}

export default Tasks;
