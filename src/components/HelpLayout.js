import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <div>
      <h2>Do you need any help?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eaque
        asperiores hic officiis itaque dolore quibusdam amet voluptas.
        Architecto vero asperiores culpa.
      </p>
      <nav className="sprint">
        <NavLink to="FAQ">View FAQ</NavLink>
        <NavLink to="contact">View Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HelpLayout;
