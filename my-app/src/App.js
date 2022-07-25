import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import ToDoList from "./components/ToDoList/ToDoList.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<ToDoList/>} />
      </Routes>
    </div>
  );
}

export default App;
