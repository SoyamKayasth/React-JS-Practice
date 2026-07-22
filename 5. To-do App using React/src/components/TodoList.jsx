import TodoItem from "./TodoItem"
export default function TodoList({tasks , setTasks}){

    return(
          <div className="list-container">
         <ul>
           {tasks.map((task) => (
              <TodoItem key = {task.id} task = {task} setTasks = {setTasks}/> 
            ))}
         </ul>
         
      </div>
    );
}