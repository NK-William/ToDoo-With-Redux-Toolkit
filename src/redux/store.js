import { createStore, combineReducers } from "redux";
import { todosReducer } from "./features/todos/todosSlice";
import { searchReducer } from "./features/searchValue/searchValueSlice";

const reducers = {
  todos: todosReducer,
  searchValue: searchReducer,
};

export const store = createStore(combineReducers(reducers));
