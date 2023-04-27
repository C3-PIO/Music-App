import React from "react";
import { Link } from "react-router-dom";
import SidebarList from "./SidebarList";
import { Nav, Stack } from "react-bootstrap";

// Maps through Sidebar List objects. Each list item links to the invidivual page connected to the Main component
function Sidebar({ token }) {
  return (
    <Nav className="sidebar bg-dark">
      <Stack className="sidebar-list p-0 mb-0" gap={3}>
        {SidebarList.map((item, index) => {
          return (
            <div key={index} className="nav-list fs-5">
              <Link to={item.path}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </div>
          );
        })}
      </Stack>
    </Nav>
  );
}

export default Sidebar;
