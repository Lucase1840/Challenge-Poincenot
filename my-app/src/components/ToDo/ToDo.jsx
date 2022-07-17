import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ReactComponent as ReactLogo } from "../../public/pcnt-logo.svg"
import ToDoList from "../ToDoList/ToDoList.jsx"
import { createUser, getToDos, addToDo, deleteToDo } from "../../redux/actions.js"

export default function ToDo() {
    const dispatch = useDispatch();
    const user = window.localStorage.getItem('userId');
    const stateToDos = useSelector(state => state.toDos)
    const input = useRef(null)
    const [toDosList, setToDoList] = useState([])
    let toDoItems = true;

    const addItem = () => {
        dispatch(addToDo(input.current.value, user))
    };

    const deleteItem = (id, userId) => {
        dispatch(deleteToDo(id, userId))
    };

    useEffect(() => {
        if (!user) {
            dispatch(createUser())
        } else {
            dispatch(getToDos(user))
        }
    }, [user, dispatch])

    console.log(toDosList)

    useEffect(() => {
        setToDoList([...stateToDos])
    }, [stateToDos, stateToDos.length])

    return (
        <div className="flex flex-col items-center">
            <ReactLogo />
            {toDoItems ? <h1>To do list</h1> : ""}
            <h3>¿Qué cosas tenés que terminar hoy?</h3>
            <input placeholder="Escribí un item" className="Condicional" ref={input}></input>
            <br></br>
            <ToDoList toDoList={toDosList} deleteItem={deleteItem} />
            <br></br>
            <button onClick={addItem}>Agregar</button>
        </div>
    )
}
