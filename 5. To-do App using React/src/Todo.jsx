import './todo.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function Todo(){
  
 const [tasks, setTasks] = useState([{id : uuid(), task : "Sample Task" , isDone: false}]);
  
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
       setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

   const markDone = (taskId) => {
         setTasks(
          (prevTasks) => 
             prevTasks.map((task) => 
                 ((task.id === taskId) ? 
                 { ...task , isDone : true}
                 : task)
             )
          
         );
   };

    return(
     <>
        <div className="container fixed" >
         <input type="text" name="task" id="task" className="inputBox" placeholder='Enter a task' onChange={getNewTodo}/>

         <button type="submit" className="btn addBtn" onClick={addTask}>Add Task</button>
        </div>
      <div className="list-container">
         <ul>
           {tasks.map((task) => (
            <li key = {task.id} className='listItem'>
              <div className= {(task.isDone) ? 'line-through' : ''}>{task.task} </div>

                <div className="btns">
                  <button className="btn editBtn" onClick={() => markDone(task.id)}>
                     Mark As Done
                  </button>
                <button onClick={() => deleteTask(task.id)} className='fa-solid fa-circle-xmark btn delBtn'></button> 
                </div>
            </li> 
            ))}
         </ul>
         
      </div>


        </>
    );
}