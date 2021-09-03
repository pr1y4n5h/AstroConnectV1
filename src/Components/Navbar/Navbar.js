import React from "react";
import { Search, Person, Notifications } from "@material-ui/icons";
import "./Navbar.style.css";
import { Badge } from "@material-ui/core";
import {Link} from "react-router-dom"
 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <Link to="/">
        <span className="text-xl ml-4 font-bold cursor-pointer">
          AstroConnect
        </span>
        </Link>
      </div>

      <div className="navbar-center">
        <div className="navbar-search">
          <Search className="ml-3 mr-2" />
          <input
            className="search-input"
            placeholder="Search for friend or Posts"
          />
        </div>
      </div>

      <div className="navbar-right">
        <ul className="nav-links">
          <li className="nav-link">Homepage</li>
          <li className="nav-link">Timeline</li>
        </ul>
        <div className="flex">
          <Badge
            className="mr-4 cursor-pointer"
            badgeContent={1}
            color="secondary"
          >
            <Person />
          </Badge>
          <Badge
            className="mr-4 cursor-pointer"
            badgeContent={1}
            color="secondary"
          >
            <Notifications />
          </Badge>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
