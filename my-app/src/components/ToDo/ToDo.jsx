import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { ReactComponent as ReactLogo } from "../../public/pcnt-logo.svg"
import ToDoList from "../ToDoList/ToDoList.jsx"
import Modal from "../Modal/Modal.jsx"
import { createUser, getToDos, addToDo, deleteToDo, changeStatus, filterToDoList, resetToDos } from "../../redux/actions.js"

export default function ToDo() {
    const dispatch = useDispatch();
    const user = window.localStorage.getItem('userId');
    const stateToDos = useSelector(state => state.toDos)
    const input = useRef(null)
    const [toDosList, setToDoList] = useState([])
    const [modalState, setModalState] = useState(false)
    const [inputValue, setInputValue] = useState('')
    let toDoItems = true;

    useEffect(() => {
        if (!user) {
            dispatch(createUser())
        } else {
            dispatch(getToDos(user))
        }
    }, [user, dispatch])

    console.log(toDosList)

    useEffect(() => {
        setToDoList(stateToDos)
        console.log('asd')
    }, [stateToDos, stateToDos.length])

    const addItem = () => {
        dispatch(addToDo(input.current.value, user))
        input.current.value = ''
    };

    const deleteItem = (id, userId) => {
        dispatch(deleteToDo(id, userId))
    };

    const changeToDoStatus = (id, currentStatus, userId) => {
        dispatch(changeStatus(id, currentStatus, userId))
    };

    const filterToDos = (filterOption, userId) => {
        dispatch(filterToDoList(filterOption, userId))
    }

    const resetList = (userId) => {
        dispatch(resetToDos(userId))
    };

    const setIsOpen = (state) => {
        setModalState(state)
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <div className="flex flex-col items-left m-8 min-h-full">
            <ReactLogo className="mb-7" />
            {stateToDos && !stateToDos.length ? <h1 className="text-3xl font-bold mb-3">To do list</h1> : ''}
            {stateToDos && !stateToDos.length ? <h3 className="text-mm mb-6 font-semibold">¿Qué cosas tenés que terminar hoy?</h3> : ""}
            <input placeholder="Escribí un item" className="text-2xl text-black font-bold  bg-[#E5E5E5]" ref={input} onChange={handleInputChange}></input>
            <br></br>
            {stateToDos && stateToDos.length ? <ToDoList toDoList={toDosList} deleteItem={deleteItem} changeToDoStatus={changeToDoStatus} filterToDos={filterToDos} setIsOpen={setIsOpen} /> : ''}
            <br></br>
            {modalState && <Modal setIsOpen={setIsOpen} resetList={resetList} />}
            <button className={inputValue ? `absolute bottom-10 text-white bg-black w-[80%] p-3 rounded-full drop-shadow-lg` : `absolute bottom-10 text-gray-500 bg-white w-[80%] p-3 rounded-full`} onClick={addItem}>Agregar</button>
        </div>

    )
}

