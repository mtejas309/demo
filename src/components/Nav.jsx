import React, { useState } from "react";
import "../styles/Nav.css";
import logo from "../assets/logo.png";
import { ArrowUpRight, User, List, X } from "@phosphor-icons/react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navtop">
      <img src={logo} alt="Logo" className="nav-bar-logo" />

      {/* Hamburger Menu Icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <List size={28} />}
      </div>

      {/* Main Nav Links */}
      <div className={`nav-side-main ${menuOpen ? "open" : ""}`}>
        <div className="nav-side">
          <ArrowUpRight />
          <div>Become an Interviewer</div>
          <User />
        </div>
        <div>Features</div>
        <div>Pricing</div>
        <div>Start a Trial</div>
        <div className="login-btn">Log In</div>
        <div className="sign-up">Sign Up</div>
      </div>
    </nav>
  );
}
