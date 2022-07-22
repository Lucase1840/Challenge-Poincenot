import React from "react";
import { ReactComponent as NewItemIcon } from "../../public/newItemIcon.svg"
import ToDoItem from "../ToDoItem/ToDoItem.jsx"
import { ReactComponent as FilterIcon } from "../../public/filterIcon.svg"

export default function ToDoList({ toDoList, deleteItem, changeToDoStatus, filterToDos, setIsOpen, optionSelected }) {
    const userId = window.localStorage.getItem('userId');
    return (
        <div className="flex-col bg-white rounded-xl p-1 relative">
            <div className="flex justify-between p-2">
                <div className="flex justify-start">
                    <div className="flex flex-row mt-2" onClick={() => setIsOpen(true)}>
                        <h3 className="font-bold mr-2">To do list</h3>
                        <label className="font-bold">
                            <NewItemIcon className="w-5 h-5" />
                        </label>
                    </div>
                </div>
                <div className="flex flex-col text-sm">
                    <div className="flex">
                        <button className="peer px-1 py-2 font-semibold">{optionSelected ? optionSelected : 'Todos'}</button>
                        <FilterIcon className="mt-3" />
                        <div className="hidden peer-hover:flex hover:block absolute  bg-white z-1 top-12 right-4 rounded-xl drop-shadow-[0px_4px_5px_rgba(0,0,0,0.25)]">
                            <div className="flex flex-col text-end">
                                <div className={optionSelected === 'Todos' ? `px-5 py-3 hover:bg-gray-200 text-[#FF560B]` : `px-5 py-3 hover:bg-gray-200`} onClick={() => filterToDos('', userId)}>Todos</div>
                                <div className={optionSelected === 'No realizados' ? `px-5 py-3 hover:bg-gray-200 text-[#FF560B]` : `px-5 py-3 hover:bg-gray-200`} onClick={() => filterToDos('false', userId)} > No realizados</div>
                                <div className={optionSelected === 'Realizados' ? `px-5 py-3 hover:bg-gray-200 text-[#FF560B]` : `px-5 py-3 hover:bg-gray-200`} onClick={() => filterToDos('true', userId)} > Realizados</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-2">
                <ToDoItem toDoList={toDoList} deleteItem={deleteItem} changeToDoStatus={changeToDoStatus} />
            </div>
        </div >
    )
}
