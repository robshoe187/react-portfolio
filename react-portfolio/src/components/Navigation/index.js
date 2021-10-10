import React from "react";
import { Link } from "react-router-dom";

function Navigation() {

    return (
      <div>
      <Link to="/">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/works">Works</Link>
      </div>
    );
}
export default Navigation;
