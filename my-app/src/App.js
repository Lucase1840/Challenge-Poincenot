import React from 'react';
import { Routes, Route } from "react-router-dom";
import ToDo from "./components/ToDo/ToDo.jsx"
import './App.css';

// console.log(process.env.REACT_APP_URL)
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/pcnt/todo-list' element={<ToDo />} />
      </Routes>
    </div>
  );
}

export default App;
