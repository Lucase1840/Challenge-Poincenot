import React from "react";
import { ReactComponent as EmptyItem } from "../../public/ellipse.svg"
import { ReactComponent as Tick } from "../../public/tick.svg"


export default function ToDoItem({ toDoList, deleteItem, changeToDoStatus }) {
    const userId = window.localStorage.getItem('userId');

    return (
        <div className="flex flex-col">
            {toDoList ? toDoList.map((toDo, i) => {
                return (
                    <div className="flex group p-2" key={i} >
                        <div className="flex cursor-pointer w-auto" onClick={() => changeToDoStatus(toDo.id, toDo.completed, userId, i)}>
                            {toDo.completed ? <Tick className="bg-[#FF560B] w-[20px] h-[20px] rounded-full p-[0.5vw] mr-2" /> : <EmptyItem id={i} className="mr-2" />}
                            <p className={toDo.completed ? `text-[#838383]` : ''}>{toDo.title}</p>
                        </div>
                        <button className='hidden group-hover:block text-sm font-bold underline absolute right-2' onClick={() => deleteItem(toDo.id, userId)}>Delete</button>
                    </div>)
            })
                : ''}
        </div >
    )
};
