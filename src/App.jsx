import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import About from "./components/About";
import Nav from "./components/Nav";
import Routing from "./utils/Routing";

function App() {
  return (
    <div>
     <Nav/>
     <Routing/>
    </div>
  );
}

export default App;
