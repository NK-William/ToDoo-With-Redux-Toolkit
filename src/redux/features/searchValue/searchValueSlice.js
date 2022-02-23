//reducer
const initialSearchValue = "Test search";

export const searchReducer = (state = initialSearchValue, action) => {
  switch (action.type) {
    case "searchValue/setSearchValue":
      return action.payload;
    default:
      return state;
  }
};

// actions
export const setSearchValue = (value) => {
  return {
    type: "searchValue/setSearchValue",
    payload: value,
  };
};

// Selectors
export const selectSearchValue = (state) => state.searchValue;
