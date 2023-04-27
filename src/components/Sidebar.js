import React from "react";
import { Link } from "react-router-dom";
import SidebarList from "./SidebarList";
import { Nav } from "react-bootstrap"

// Maps through Sidebar List objects. Each list item links to the invidivual page connected to the Main component
function Sidebar({token}) {
  return (
    <div className="sidebar navbar">
      <ul>
        {SidebarList.map((item, index) => {
          return (
            <li key={index} className={item.class}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
