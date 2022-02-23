import { Dispatch } from 'react';
import dataContext from './DataContext';

const initialState: { id: string, title: string }[] = [];

export type ToDoState = typeof initialState;
export type ToDoAction = { type: 'ADD_DOTO', payload: { id: string, title: string } };

export interface ToDoInputProviderProps {
    children: React.ReactNode;
}

const todoReducer = (state: ToDoState, action: ToDoAction) => {

    switch (action.type) {
        default:
            return state;
    }
}
export type todoReducerType = typeof todoReducer;

const addItem = (dispatch: React.Dispatch<ToDoAction>) => (id: string, title: string) => {
    console.log("To save");
}
export type addToDoItem = typeof addItem;

const deleteItem = (dispatch: React.Dispatch<ToDoAction>) => (id: string) => {
    console.log("To delete")
}
export type deleteToDoItem = typeof deleteItem;





export const { Provider, Context } = dataContext(
    todoReducer,
    {
        addItem,
        deleteItem
    },
    [
        { id: "1", title: "Hey context is working" },
        { id: "2", title: "This is amazing" },
        { id: "1", title: "Wooooooooow" }
    ]
);