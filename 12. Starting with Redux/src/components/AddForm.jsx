import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/features/todo/todoSlice";

export default function AddForm(){
      const [task, setTask] = useState("");
      const dispatch = useDispatch();

      const submitHandler = (e) => {
           e.preventDefault();
           dispatch(addTodo(task));
           setTask("");  
      };

      return(
            <>
             <div className="container">
                  <form onSubmit={submitHandler}> 

                        <input type="text" name="task" id="task" value={task} onChange={(e) => setTask(e.target.value)}/>
                        <br />

                        <button type="submit">Add Task</button>
                        
                        </form>
             </div>
            </>
      );
}