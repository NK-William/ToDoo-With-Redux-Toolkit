import { createStore, combineReducers } from "redux";
import { todosReducer } from "./features/todos/todosSlice";
import searchValueReducer from "./features/searchValue/searchValueSlice";
import { configureStore } from "@reduxjs/toolkit";

const reducer = {
  todos: todosReducer,
  searchValue: searchValueReducer,
};

// configureStore simplifies the store setup process
export const store = configureStore({ reducer });
