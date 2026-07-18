import './todo.css';
import { useState } from 'react';

export default function Todo(){
  
 const [tasks, setTasks] = useState(["Sample Task"]);

 const [newTodo, setNewTodo] = useState("");
 
   let getNewTodo = (e) => {+
      setNewTodo(e.target.value);
      console.log(newTodo); 
   };
    return(
     <>
        <div className="container" >
         <input type="text" name="task" id="task" className="inputBox" placeholder='Enter a task' onChange={getNewTodo}/>

         <button type="submit" className="btn">Add Task</button>
        </div>
      <div className="container">
         <ul>
           {tasks.map((task) => (<li>{task}</li>))}

         </ul>
         
      </div>


        </>
    );
}