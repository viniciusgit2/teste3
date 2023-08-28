import React from "react";
import Param from "../Param";
import './Menu.css';
import About from "./About";
import Content from "./Content";
function Menu() {
  return (
    <aside className="Menu">
      <nav>
        <ul>
        <li>
          <p>menu</p>
          <a href="./About"><About></About></a>  
          <a href="./Content"><Content></Content></a>
        </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;

