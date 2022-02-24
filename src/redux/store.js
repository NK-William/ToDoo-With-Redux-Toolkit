import { createStore, combineReducers } from "redux";
import { todosReducer } from "./features/todos/todosSlice";
import searchValueReducer from "./features/searchValue/searchValueSlice";
import { configureStore } from "@reduxjs/toolkit";

const reducer = {
  todos: todosReducer,
  searchValue: searchValueReducer,
};

// configureStore simplifies the store setup process
/***
 * It combines todosReducer and filtersReducer into the root reducer function, which
 *  will handle a root state that looks like {todos, filters}, removing the need to
 *  call combineReducers().
 * It creates a Redux store using that root reducer, removing the need to call createStore().
 * It automatically adds the thunk middleware.
 * It automatically adds more middleware to check for common mistakes like accidentally mutating the state.
 * It automatically sets up the Redux DevTools Extension connection.
 */
export const store = configureStore({ reducer });
