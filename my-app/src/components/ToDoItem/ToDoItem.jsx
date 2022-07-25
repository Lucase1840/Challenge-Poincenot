import { React } from "react";
import { useSelector } from "react-redux"
import { ReactComponent as Tick } from "../../public/tick.svg"


export default function ToDoItem({ toDoList, deleteItem }) {
    const userId = window.localStorage.getItem('userId');

    return (
        <div className="flex flex-col">
            {toDoList ? toDoList.map((ToDo, i) => {
                return (
                    <div className="flex flex-row" key={i}>
                        <Tick className={ToDo.completed ? "flex bg-black rounded-xl" : "flex bg-red-500 rounded-xl"} />
                        <p className="mr-5">{ToDo.title}</p>
                        <button onClick={() => deleteItem(ToDo.id, userId)}>borrar</button>
                    </div>)
            })
                : ''}
        </div >
    )
};
