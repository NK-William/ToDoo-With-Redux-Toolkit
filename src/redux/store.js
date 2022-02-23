import { createStore, combineReducers } from "redux";
import { todosReducer } from "./features/todos/todosSlice";
import { searchSlice } from "./features/searchValue/searchValueSlice";

const reducers = {
  todos: todosReducer,
  searchValue: searchSlice,
};

export const store = createStore(combineReducers(reducers));
