import React from "react";
import { Link } from "react-router-dom";
import SidebarList from "./SidebarList";

// Maps through Sidebar List objects. Each list item links to the invidivual page connected to the Main component
function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        {SidebarList.map((item, index) => {
          return (
            <li key={index}>
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
