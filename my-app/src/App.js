import React from 'react';
import { Routes, Route } from "react-router-dom";
import ToDo from "./components/ToDo/ToDo.jsx"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ToDo />} />
      </Routes>
    </div>
  );
}

export default App;
