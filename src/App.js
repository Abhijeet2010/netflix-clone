// import React from 'react';
import "./App.css"
import HomeScreen from './Screens/HomeScreen';
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";

function App() {
  const user = null;

  return (
    <div className="app">
      <Routes>
      {!user ? (
        <Route path="/" element={<LoginScreen />} />
      ):(
        <Route exact path="/" element={<HomeScreen />} />
      )}
      </Routes>
    </div>
  );
}

export default App;
