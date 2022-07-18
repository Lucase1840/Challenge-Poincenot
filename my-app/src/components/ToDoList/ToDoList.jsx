import { React } from "react";
import { ReactComponent as NewItemIcon } from "../../public/newItemIcon.svg"
import ToDoItem from "../ToDoItem/ToDoItem.jsx"

export default function ToDoList({ toDoList, deleteItem, changeToDoStatus }) {
    return (
        <div>
            <div className="flex flex-row">
                <h3>To Do list</h3>
                <label>
                    <NewItemIcon />
                </label>
                <select>
                    <option value='all'>Todos</option>
                    <option value='notCompleted'>No Realizados</option>
                    <option value='Completed'>Realizados</option>
                </select>
            </div>
            <div>
                <ToDoItem toDoList={toDoList} deleteItem={deleteItem} changeToDoStatus={changeToDoStatus} />
            </div>
        </div >
    )
}
