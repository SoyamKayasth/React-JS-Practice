import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markTodo } from "../app/features/todo/todoSlice";

export default function Todo(){
const todos = useSelector((state) => state.todos);
const dispatch = useDispatch();


    return(
      <>
        <br />

        <AddForm></AddForm>
        <br />
               <h3>Todos</h3>
     
        <ul>
          {todos.map((todo) => 
            <div className="task">
              <li key={todo.id} className={todo.isDone && "linethrough" }>{todo.name}
                  &nbsp; &nbsp;
                </li>
                                 <button type="button" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                                 <button type="button" onClick={() => dispatch(markTodo(todo.id))}>Mark</button>

                </div>
          )}
        </ul>
        

      </>
    );
}