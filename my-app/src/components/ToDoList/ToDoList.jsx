import React from "react";
import { ReactComponent as NewItemIcon } from "../../public/newItemIcon.svg"
import ToDoItem from "../ToDoItem/ToDoItem.jsx"

export default function ToDoList({ toDoList, deleteItem, changeToDoStatus, filterToDos, setIsOpen }) {
    const userId = window.localStorage.getItem('userId');
    return (
        <div className="flex-col bg-white rounded-xl p-2 relative">
            <div className="flex justify-between p-2">
                <div className="flex justify-start">
                    <div className="flex flex-row" onClick={() => setIsOpen(true)}>
                        <h3 className="font-bold mr-2">To Do list</h3>
                        <label className="font-bold mt-1">
                            <NewItemIcon />
                        </label>
                    </div>
                </div>
                <div className="flex flex-col justify-end ">
                    <button className="peer px-5 py-2 bg-green-600 hover:bg-green-700  text-white">Todos</button>
                    <div className="hidden peer-hover:flex hover:block absolute bg-white drop-shadow-lg z-1 top-14 right-4">
                        <div className="flex flex-col">
                            <div className="px-5 py-3 hover:bg-gray-200" onClick={() => filterToDos('', userId)}>Todos</div>
                            <div className="px-5 py-3 hover:bg-gray-200" onClick={() => filterToDos('true', userId)} > No Realizados</div>
                            <div className="px-5 py-3 hover:bg-gray-200" onClick={() => filterToDos('false', userId)} > Realizados</div>

                        </div>

                    </div>
                </div>
            </div>

            <div>
                <ToDoItem toDoList={toDoList} deleteItem={deleteItem} changeToDoStatus={changeToDoStatus} />
            </div>
        </div >
    )
}
