
export default function TodoInput({newTodo, getNewTodo, addTask, handleKeyEnter}){

    return(
         <div className="container fixed" >
      
         <input type="text" name="task" id="newTask" className="inputBox" placeholder='Enter a task' value={newTodo} onChange={getNewTodo} onKeyDown={(e) => handleKeyEnter(e , addTask)}/>

         <button type="button" className="btn addBtn" onClick={addTask}>Add Task</button>
        </div>
    );
}