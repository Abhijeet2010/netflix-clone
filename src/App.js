import React from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import SinglePage from "./Screens/SinglePage";
import RegisterScreen from "./Screens/RegisterScreen";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/singlepage/:id" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
