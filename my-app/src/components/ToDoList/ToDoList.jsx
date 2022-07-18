import React from "react";
import { ReactComponent as NewItemIcon } from "../../public/newItemIcon.svg"
import ToDoItem from "../ToDoItem/ToDoItem.jsx"

export default function ToDoList({ toDoList, deleteItem, changeToDoStatus, filterToDos, setIsOpen }) {
    const userId = window.localStorage.getItem('userId');
    return (
        <div>
            <div className="flex flex-row">
                <div onClick={() => setIsOpen(true)}>
                    <h3>To Do list</h3>
                    <label>
                        <NewItemIcon />
                    </label>
                </div>
                <select>
                    <option value='all'>Todos</option>
                    <option value='unCompleted'>No Realizados</option>
                    <option value='completed'>Realizados</option>
                </select>
            </div>
            <div>
                <button class="peer px-5 py-2 bg-green-600 hover:bg-green-700 text-white">Dropdown</button>
                <div class="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
                    <div class="px-5 py-3 hover:bg-gray-200" onClick={() => filterToDos('', userId)}>Todos</div>
                    <div class="px-5 py-3 hover:bg-gray-200" onClick={() => filterToDos('true', userId)} > No Realizados</div>
                    <div class="px-5 py-3 hover:bg-gray-200" onClick={() => filterToDos('false', userId)} > Realizados</div>
                </div>
            </div >
            <div>
                <ToDoItem toDoList={toDoList} deleteItem={deleteItem} changeToDoStatus={changeToDoStatus} />
            </div>
        </div >
    )
}
