import React from "react";

export default function Modal({ setIsOpen, resetList }) {
    const userId = window.localStorage.getItem('userId');
    return (
        <div className="bg-[#757575] fixed inset-0 z-50 opacity-80">
            <div className="flex h-screen justify-center items-center" >
                <div className="w-[80%] flex-col p-5 justify-center rounded-xl bg-[#FFFFFF]">
                    <h1 className="font-bold text-xl mb-1">Empezar una nueva Lista</h1>
                    <p className="p-2 text-left font-bold">Cuando comenzás una nueva lista, tu lista existente se elimina. ¿Estás seguro que querés empezar una nueva lista?</p>
                    <div className="flex justify-between">
                        <button className="px-6 py-2 drop-shadow-xl border-[1px] border-black rounded-full" onClick={() => setIsOpen(false)}>Cancelar</button><br></br>
                        <button className="px-6 py-2 bg-black text-white drop-shadow-xl border-[1px] border-black rounded-full" onClick={() => resetList(userId)}>Nueva lista</button>
                    </div>
                </div>
            </div >
        </div>
    )
};
