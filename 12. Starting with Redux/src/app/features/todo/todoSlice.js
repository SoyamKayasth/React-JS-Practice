import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
      todos: [{
            id: nanoid(),
            name: "Demo Task",
            isDone: false,
      }],
};

export const todoSlice = createSlice({
      name: "todo",
      initialState,
      reducers:{
         addTodo: (state , action) => {
            const newTodo = {
                  id: nanoid(),
                  name: action.payload,
                  isDone: false,
            };  
         
           state.todos.push(newTodo);
         },

         deleteTodo: (state, action) => {
            state.todos.filter((todo) => todo.id !== action.payload);
         },

         markTodo: (state , action) => {
             state.todos.map((todo) => {
                   if(todo.id === action.payload){
                        todo.isDone = true;
                   }
             }); 
         }
      },
});



export const { addTodo, deleteTodo, markTodo} = todoSlice.actions;
export default todoSlice.reducer;