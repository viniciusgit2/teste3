import React from "react";

import './Menu.css';
import About from "./About";
import Content from "./Content";
function Menu() {
  return (
    <aside className="Menu">
      <nav>
        <ul>
        <li>
          <a href="./About"><About></About></a>  
          <a href="./Content"><Content></Content></a>
        </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;

