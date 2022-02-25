import { createSlice } from "@reduxjs/toolkit";

// reducer
/*const initialTodos = [{ id: "123", title: "First item" }];

export const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case "todos/addTodo":
      return [...state, action.payload];
    default:
      return state;
  }
};

// actions
export const addTodo = (todo) => {
  return {
    type: "todos/addTodo",
    payload: todo,
  };
};*/

const options = {
  name: "todos",
  initialState: [{ id: "123", title: "First item" }],
  reducers: {
    //case reducers
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
  },
};

export const todosSlice = createSlice(options);

// exporting the actions
export const { addTodo } = todosSlice.actions;

// expo reducer
export default todosSlice.reducer; // todosSlice.reducer is the complete reducer function, a.k.a the “slice reducer

// selectors
export const selectTodos = (state) => state.todos;
