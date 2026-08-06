import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../app/features/todo/todoSlice";

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
              <li key={todo.id}>{todo.name}
                  &nbsp; &nbsp;
                 <button type="button" onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                </li>
          )}
        </ul>
        

      </>
    );
}