import { ReactComponent as Tick } from "../../public/tick.svg"


export default function ToDoItem({ toDoList, deleteItem, changeToDoStatus }) {
    const userId = window.localStorage.getItem('userId');

    return (
        <div className="flex flex-col">
            {toDoList ? toDoList.map((toDo, i) => {
                return (
                    <div className="group flex flex-row" key={i} onClick={() => changeToDoStatus(toDo.id, toDo.completed, userId, i)}>
                        <div className="flex flex-row cursor-pointer">
                            <Tick id={i} className={toDo.completed ? "flex bg-black rounded-xl" : "flex bg-red-500 rounded-xl"} />
                            <p>{toDo.title}</p>
                        </div>
                        <button className='hidden group-hover:block ml-20' onClick={() => deleteItem(toDo.id, userId)}>borrar</button>
                    </div>)
            })
                : ''}
        </div >
    )
};
