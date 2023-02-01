import React from "react";
import "./App.css";
import { NavLink, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./main";

function App() {
  const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/characters'>Characters</NavLink></li>
        <li><NavLink to='/others'>Others</NavLink></li>
      </ul>
    </nav>
  );
 
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
