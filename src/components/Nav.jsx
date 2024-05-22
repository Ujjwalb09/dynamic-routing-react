import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="flex justify-center gap-10 
      mt-10"
    >
      <NavLink
        to="/"
      >
        {
          (e)=>{
            return <span className={[
              e.isActive ? "text-red-400" : "",
              e.isActive ? "font-bold" : ""
            ].join(" ")}>Home</span>
          }
        }
      </NavLink>
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "#F87171" : "",
            fontWeight: e.isActive ? "bold": ""
          };
        }}
        to="/user"
      >
        User
      </NavLink>
      <NavLink
       className={(e)=>{
          return [
            e.isActive ? "text-red-400" : "",
            e.isActive ? "font-bold" : ""
          ].join(" ")
       }}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
}

export default Nav;
