import React from "react";
import "@testing-library/jest-dom/extend-expect"
import { render, screen, prettyDOM, fireEvent } from "@testing-library/react"
import ToDoItem from "./ToDoItem.jsx"
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk";

describe("ToDo funciona correctamente", () => {
    const initialState = {
        toDos: []
    };
    const mockStore = configureStore([thunk]);
    let store;
    it('Renderiza nuevos ToDo cuando se le pasan por props', () => {
        store = mockStore(initialState);
        const toDos = [
            {
                title: "Buy food",
                id: 1,
                completed: false,
            },
            {
                title: "fix car",
                id: 2,
                completed: true,
            }
        ]
        render(
            <React.StrictMode>
                <Provider store={store}>
                    <BrowserRouter>
                        <ToDoItem toDoList={toDos} />
                    </BrowserRouter>
                </Provider>
            </React.StrictMode>
        )
        const toDoOne = screen.getByText('Buy food')
        const toDoTwo = screen.getByText('fix car')
        expect(toDoOne).not.toBeNull();
        expect(toDoTwo).not.toBeNull();
    })
    it('Elimina un elemento cuando se oprime el boton de "delete"', () => {
        store = mockStore(initialState);
        const toDos = [
            {
                title: "Buy food",
                id: 1,
                completed: false,
            }
        ]
        const { toDoComponent } = render(
            <React.StrictMode>
                <Provider store={store}>
                    <BrowserRouter>
                        <ToDoItem toDoList={toDos} />
                    </BrowserRouter>
                </Provider>
            </React.StrictMode>
        )
        const toDoOne = screen.getByText('Buy food')
        expect(toDoOne).not.toBeNull();
        const button = screen.getByText(/delete/i)
        // Averiguar como ejecutar la fn para poder probar el onClick y que el elemento se elimine correctamente.
        // fireEvent.click(button)
        // expect(toDoOne).toBeNull();
        // console.log(prettyDOM(toDoComponent))
    })
})