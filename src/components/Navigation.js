import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(params) {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
