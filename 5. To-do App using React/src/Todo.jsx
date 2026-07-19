import './todo.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function Todo(){
  
 const [tasks, setTasks] = useState([{
                                    id : uuid(),
                                    name : "Sample Task" , 
                                    isDone: false,
                                    isEdit: false,
                                  }]);
  
 const [newTodo, setNewTodo] = useState("");
 
   const getNewTodo = (e) => {
      setNewTodo(e.target.value);
      console.log(newTodo); 
   };

   const addTask = () => {
    if(newTodo !== null && newTodo.trim() !== ""){
      setTasks((prevTasks) => (
          [...prevTasks, {
                          id: uuid(),
                          name: newTodo,
                          isDone: false,
                          isEdit: false
                   }]
                ));
     setNewTodo("");   
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
                    (!task.isDone) ?
                     { ...task , isDone : true} 
                      : { ...task , isDone : false} 
                 : task)
             )
          
         );
   };
   
   const getEditBox = (taskId) => {
      setTasks((prevTasks) => 
         prevTasks.map((task) => 
           (task.id === taskId) ?
              {...task, isEdit : true }
              : task
        )
      );
   };

   const handleEditChange = (taskId , value) => {
         setTasks((prevTasks) =>
        prevTasks.map((task) => 
           (task.id === taskId) ?
             {...task , name: value}
             : task
         )
        )
   };

   const editTask = (taskId) => {
      setTasks((prevTasks) => 
         prevTasks.map((task) => 
           (task.id === taskId) ? 
            (task.name !== "" && task.name !== null) ?
            {...task , isEdit : false} : task
            :
             task
        )
      );
   };


    return(
     <>
        <div className="container fixed" >
      
         <input type="text" name="task" id="newTask" className="inputBox" placeholder='Enter a task'value={newTodo} onChange={getNewTodo}/>

         <button type="submit" className="btn addBtn" onClick={addTask}>Add Task</button>
        </div>

      <div className="list-container">
         <ul>
           {tasks.map((task) => (
            <li key = {task.id} className='listItem'>

                {task.isEdit ?  
                // Edit Box
                 <>
                 <input type="text" name="editTask" id="editTask" className="inputBox" value={task.name} onChange={(e) => handleEditChange(task.id , e.target.value)}/>

                 <button type="submit" className="btn addBtn" onClick={() => editTask(task.id)}>Save</button>          
                    </>
                : <>
                 <div className= {(task.isDone) ? 'line-through' : ''}>{task.name} </div>

                <div className="btns">
                <button className="btn icon editBtn fa-solid fa-pen-to-square" onClick={() => getEditBox(task.id)}>

                </button>

                  <button className="btn markBtn fa-solid fa-check-double icon" onClick={() => markDone(task.id)}>
                  </button>
                <button onClick={() => deleteTask(task.id)} className='fa-solid fa-circle-xmark btn icon delBtn'></button> 
                </div>
                </>
                }
             
            </li> 
            ))}
         </ul>
         
      </div>


        </>
    );
}