import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"},{id: 2, text: "Hello sdfekref"},{id: 3, text: "Hello asfdas"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateText(state, action){
            // for(let i = 0; i<state.todos.length; i++){
            //     console.log("i am in");
            //     if(state.todos[i].id === action.payload.id){
            //         state.todos[i] = {id: action.payload.id, text: action.payload.newText};
            //         break;
            //     }
            // }

            state.todos = state.todos.map((item)=> item.id===action.payload.id ? {...item, text: action.payload.newText} : item);
        }

    }
})

export const {addTodo, removeTodo, updateText} = todoSlice.actions

export default todoSlice.reducer