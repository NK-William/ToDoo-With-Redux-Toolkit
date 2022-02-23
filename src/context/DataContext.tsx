import React, { useReducer } from "react";
// todo context imports
import { ToDoState } from "./TodoContext";
import { ToDoAction } from "./TodoContext";
import { addToDoItem } from "./TodoContext";
import { deleteToDoItem } from "./TodoContext";
import { todoReducerType } from "./TodoContext";


export default (reducer: todoReducerType,
  actions: { addItem: addToDoItem, deleteItem: deleteToDoItem },
  defaultValue: { id: string, title: string }[]) => {
  const Context =
    React.createContext<{ state: ToDoState; dispatch: React.Dispatch<ToDoAction> }>({ state: defaultValue, dispatch: () => { } });

  const Provider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions: any = {};
    for (let key in actions) {
      boundActions[key] = (actions as any)[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }
      }>
        {children}
      </Context.Provider>
    );
  };

  return { Provider, Context };
};