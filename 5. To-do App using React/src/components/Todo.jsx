import { useState, useEffect } from "react";
import '../todo.css'
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { v4 as uuid } from 'uuid';

export default function Todo(){
    
 const [tasks, setTasks] = useState(() => {
     const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
 });
  
 const [newTodo, setNewTodo] = useState("");

 useEffect(() => {
       localStorage.setItem("tasks", JSON.stringify(tasks));           
}, [tasks]);
 
   const getNewTodo = (e) => {
      setNewTodo(e.target.value);      
   };

   const addTask = () => {
    if(!newTodo.trim()) return;

    let newTask = {
                          id: uuid(),
                          name: newTodo,
                          isDone: false,
                          isEdit: false,
                          createdAt: Date.now()
                   };
      
      setTasks((prevTasks) => (
          [...prevTasks, newTask ] ));
       
        setNewTodo("");    

   }


   const editTask = (taskId) => {
      setTasks((prevTasks) => 
         prevTasks.map((task) => 
           (task.id === taskId) ? 
            (task.name.trim()) ?
            {...task , isEdit : false} : task
            :
             task
        )
      );
   };
  
     const handleKeyEnter = (e , action) => {
            if(e.key === 'Enter'){
               action();
            }
          
     };

return(
        <>
            <TodoInput
                newTodo={newTodo}
                getNewTodo={getNewTodo}
                addTask={addTask}
                handleKeyEnter={handleKeyEnter}
            />

            <TodoList
                tasks={tasks}
                setTasks={setTasks}
                editTask={editTask}
                handleKeyEnter={handleKeyEnter}
            />
        </>

   );

}