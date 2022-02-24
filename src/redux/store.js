import { createStore, combineReducers } from "redux";
import { todosReducer } from "./features/todos/todosSlice";
import searchValueReducer from "./features/searchValue/searchValueSlice";

const reducers = {
  todos: todosReducer,
  searchValue: searchValueReducer,
};

export const store = createStore(combineReducers(reducers));
