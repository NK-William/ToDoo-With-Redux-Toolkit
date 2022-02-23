import { createSlice } from "@reduxjs/toolkit";

// //reducer
// const initialSearchValue = "Test search";

// export const searchReducer = (state = initialSearchValue, action) => {
//   switch (action.type) {
//     case "searchValue/setSearchValue":
//       return action.payload;
//     default:
//       return state;
//   }
// };

// // actions
// export const setSearchValue = (value) => {
//   return {
//     type: "searchValue/setSearchValue",
//     payload: value,
//   };
// };

// Redux toolkit createSlice
/***
 * name: a string that is used as the prefix for generated action types
 * initialState: the initial state value for the reducer
 * reducers: an object of methods, where the keys determine the action type
 *  strings that can update the state, and whose methods are reducers that will
 *  be executed when that action type is dispatched. These are sometimes referred
 *  to as “case reducers”, because they’re similar to a case in a switch statement.
 * Action creators that correspond to each case reducer function we provide will be automatically generated
 * No default handler needs to be written
 */
const options = {
  name: "searchValue",
  initialState: "Test on createSlice",
  reducers: {
    // case reducer
    setSearchValue: (state, action) => {
      return action.payload;
    },
  },
};

export const searchSlice = createSlice(options);

// Selectors
export const selectSearchValue = (state) => state.searchValue;
