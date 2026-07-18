import './todo.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function Todo(){
  
 const [tasks, setTasks] = useState([{id : uuid(), task : "Sample Task"}]);
  
 const [newTodo, setNewTodo] = useState("");
 
 let inputBox = document.querySelector(".inputBox");

   const getNewTodo = (e) => {+
      setNewTodo(e.target.value);
      console.log(newTodo); 
   };

   const addTask = () => {
    if(inputBox.value !== null && inputBox.value.trim() !== ""){
      setTasks((prevTasks) => (
      [...prevTasks, {task : newTodo , id : uuid()}]
    ));
     setNewTodo("");   
     inputBox.value = "";
    }
   }

  const deleteTask = (taskId) => {
       setTasks((prevTasks) => prevTasks.filter((task) => task.id != taskId));
  }

    return(
     <>
        <div className="container fixed" >
         <input type="text" name="task" id="task" className="inputBox" placeholder='Enter a task' onChange={getNewTodo}/>

         <button type="submit" className="btn" onClick={addTask}>Add Task</button>
        </div>
      <div className="list-container">
         <ul>
           {tasks.map((task) => (
            <li key = {task.id} className='listItem'>
              <div>{task.task} </div>
              <div>
                  <button className="editBtn">
                     edit
                  </button>
                <button onClick={() => deleteTask(task.id)} className='fa-solid fa-circle-xmark delBtn'></button> 
              </div>
            </li> 
            ))}
         </ul>
         
      </div>


        </>
    );
}