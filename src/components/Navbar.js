import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    // navbar menu
    <nav className="hidden  text-Pgreen  items-center   text-xxl  font-primary font-bold md:flex md:space-x-10 lg:space-x-20 ">
      <NavLink
        to="/"
        exact
        isActive={() => activeLink === "/"}
        onClick={() => handleNavLinkClick("/")}
        activeStyle={{ color: "red" }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        isActive={() => activeLink === "/about"}
        onClick={() => handleNavLinkClick("/about")}
        activeStyle={{ color: "red" }}
      >
        About
      </NavLink>
      <NavLink
        to="/menu"
        isActive={() => activeLink === "/menu"}
        onClick={() => handleNavLinkClick("/menu")}
        activeStyle={{ color: "red" }}
      >
        Menu
      </NavLink>
      <NavLink
        to="/reservation"
        isActive={() => activeLink === "/reservation"}
        onClick={() => handleNavLinkClick("/reservation")}
        activeStyle={{ color: "red" }}
      >
        Reservation
      </NavLink>
      <NavLink
        to="/order"
        isActive={() => activeLink === "/order"}
        onClick={() => handleNavLinkClick("/order")}
        activeStyle={{ color: "red" }}
      >
        Order
      </NavLink>
      <NavLink
        to="/login"
        isActive={() => activeLink === "/login"}
        onClick={() => handleNavLinkClick("/login")}
        activeStyle={{ color: "red" }}
      >
        Login
      </NavLink>
    </nav>
  );
}
