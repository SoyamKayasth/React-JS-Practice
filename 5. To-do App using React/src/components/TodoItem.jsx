export default function TodoItem({task , setTasks}){

  const deleteTask = (taskId) => {
       setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

   const markDone = (taskId) => {
         setTasks(
          (prevTasks) => 
             prevTasks.map((task) => 
                 ((task.id === taskId) ? 
                     { ...task , isDone : !task.isDone}
                 : task)
             )
          
         );
   };
   
   const getEditBox = (taskId) => {
      setTasks((prevTasks) => 
         prevTasks.map((task) => 
          ({...task, 
            isEdit : task.id === taskId
         }) 
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
          <li key = {task.id} className='listItem'>

                {task.isEdit ?  
                // Edit Box
                 <div className='editContainer'>
                 <input type="text" name="editTask" id="editTask" autoFocus className="inputBox" value={task.name} onChange={(e) => handleEditChange(task.id , e.target.value)} 
                 onKeyDown={(e) => handleKeyEnter(e, () => editTask(task.id))}/>

                 <button type="button" className="btn addBtn" onClick={() => editTask(task.id)}>Save</button>          
                    </div>
                : <>
                 <div className= { `task ${(task.isDone) ? "line-through task" : ""}`}>{task.name} </div>

                <div className="btns">
                  <button type='button' aria-label="Mark as done" className="btn markBtn icon" onClick={() => markDone(task.id)}>
                     <i className="fa-solid fa-check-double"></i>
                  </button>
                <button type='button' aria-label="Edit task" className="btn icon editBtn" onClick={() => getEditBox(task.id)}>
                     <i className="fa-solid fa-pen-to-square"></i>

                </button>
                <button aria-label="Delete task" onClick={() => deleteTask(task.id)} className='btn icon delBtn'>
                    <i className="fa-solid fa-xmark"></i>
                  </button> 
                </div>
                </>
                }
             
            </li> 
    );
}
