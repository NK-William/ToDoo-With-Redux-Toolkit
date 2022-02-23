// reducer
const initialTodos = [{ id: "123", title: "First item" }];

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
  console.log("action creator");
  return {
    type: "todos/addTodo",
    payload: todo,
  };
};

// selectors
export const selectTodos = (state) => state.todos;
