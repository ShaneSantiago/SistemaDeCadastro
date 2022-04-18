import React, { useState } from "react"
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Router from './Components/Routes/Route';
import Header from "./Components/Pages/Header/Header"

function App() {
  const token = localStorage.getItem("token")
const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")
  return (
    <BrowserRouter>
      <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
      <Router rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
    </BrowserRouter>
  );
}

export default App;
