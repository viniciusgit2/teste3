import React from "react";
import Param from "../Param";
import './Menu.css';
import About from "./About";
import Content from "./Content";
import Usestate from "../hooks/Usestate";
function Menu() {
  return (
    <aside className="Menu">
      <nav>
        <ul>
        <li>
          <p>menu</p>
          <Usestate>use state</Usestate>
          <a href="./About"><About></About></a>  
          <a href="./Content"><Content></Content></a>
          <a href="../Param"><Param></Param></a>
        </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;

