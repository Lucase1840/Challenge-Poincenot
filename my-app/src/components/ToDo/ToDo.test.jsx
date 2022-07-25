import React from "react";
import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import ToDo from "./ToDo.jsx"
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
    it('El componente se monta correctamente', () => {
        store = mockStore(initialState);
        const { toDoComponent } = render(
            <React.StrictMode>
                <Provider store={store}>
                    <BrowserRouter>
                        <ToDo />
                    </BrowserRouter>
                </Provider>
            </React.StrictMode>
        )
        expect(toDoComponent).not.toBeNull();
    })
    it('Renderiza el titulo de la app, input y boton"', () => {
        store = mockStore(initialState);
        render(
            <React.StrictMode>
                <Provider store={store}>
                    <BrowserRouter>
                        <ToDo />
                    </BrowserRouter>
                </Provider>
            </React.StrictMode>
        )
        const title = screen.getByText('To do list')
        const button = screen.getByRole('button', { name: /Agregar/i })
        const input = screen.getAllByPlaceholderText(/Escribí un item/i)
        expect(title).not.toBeNull();
        expect(button).not.toBeNull();
        expect(input).not.toBeNull();
    })
})