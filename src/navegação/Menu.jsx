import React from "react";
import Param from "../Param";
import './Menu.css';
import About from "./About";
import Content from "./Content";
import Usestate from "../hooks/Usestate";
import { Link } from 'react-router-dom'
import Title from "../hooks/Title";
function Menu() {
  return (
    <aside className="Menu">
      <nav>
        <ul>
        <li>
          <p>menu</p>
          <Link to="../Title"><Title></Title></Link>  
          <Link to="./About"><About></About></Link>  
          <Link to ="./Content"><Content></Content></Link>
          <Link to ="../Param"><Param></Param></Link>
        </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;

