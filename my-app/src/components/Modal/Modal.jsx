import React from "react";

export default function Modal({ setIsOpen, resetList }) {
    const userId = window.localStorage.getItem('userId');
    return (
        <div >
            <h1>Im the modal of your dreams</h1><br></br>
            <button onClick={() => setIsOpen(false)}>Cancelar</button><br></br>
            <button onClick={() => resetList(userId)}>Borrar Lista</button>
        </div >
    )
};
