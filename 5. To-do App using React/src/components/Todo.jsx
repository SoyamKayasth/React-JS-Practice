import { useState } from "react";
import '../todo.css'
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { v4 as uuid } from 'uuid';

export default function Todo(){
    
 const [tasks, setTasks] = useState([]);
  
 const [newTodo, setNewTodo] = useState("");
 
   const getNewTodo = (e) => {
      setNewTodo(e.target.value);
      console.log(newTodo); 
   };

   const addTask = () => {
    if(!newTodo.trim()) return;
      setTasks((prevTasks) => (
          [...prevTasks, {
                          id: uuid(),
                          name: newTodo,
                          isDone: false,
                          isEdit: false,
                          createdAt: Date.now()
                   }]
                ));
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