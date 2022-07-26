import React from "react";
import Home from "../views/Home";
import CarList from "./Carlist";
import Inventory from "../views/Inventory";
import Profile from "../views/Profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InventorySingle from "../views/InventorySingle";

export default function Navbar() {
  return (
    <>
      <Router>
        <nav className="navbar">
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/inventory">Inventory</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link to="">Login</Link>
              </li>
              <li>
                <Link to="/inventory/1">Register</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="inventory">
            <Route path=":id" element={<InventorySingle />} />
            <Route path="" element={<Inventory />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}
