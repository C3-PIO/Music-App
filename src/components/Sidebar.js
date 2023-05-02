import React from "react";
import { Link } from "react-router-dom";
import SidebarList from "./SidebarList";
import { Nav, Stack, Container } from "react-bootstrap";
import { GiMusicalNotes } from "react-icons/gi";

// Maps through Sidebar List objects. Each list item links to the invidivual page connected to the Main component
function Sidebar() {
  return (
    <Nav className="sidebar bg-dark">
      <Container className="sidebar-header text-nowrap fs-3 px-2 mb-4">
        <Link to="https://github.com/C3-PIO/Music-App">
        <GiMusicalNotes />
        <span>Appandorify</span>
        </Link>
      </Container>
      <Stack className="sidebar px-2 mb-0" gap={3}>
        {/* https://react-bootstrap.github.io/layout/stack/ */}
        {SidebarList.map((item, index) => {
          return (
            <div key={index} className="nav-list text-nowrap fs-4">
              <Link to={item.path}>
                {item.icon}
                <span>
                  {item.name}
                </span>
              </Link>
            </div>
          );
        })}
      </Stack>
    </Nav>
  );
}

export default Sidebar;
