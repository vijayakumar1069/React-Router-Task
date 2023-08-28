import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
export default function Navbar() {
  return (
    <div className="nav">
      <ul className="unorder-list">
        <li>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: 22 + "px",
            }}
          >
            All{" "}
          </Link>
        </li>
        <li>
          <Link
            to="/Fullstackdevelopment"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: 22 + "px",
            }}
          >
            Full Stack Development
          </Link>
        </li>
        <li>
          <Link
            to="/datascience"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: 22 + "px",
            }}
          >
            Data Science
          </Link>
        </li>
        <li>
          <Link
            to="/Cybersecurity"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: 22 + "px",
            }}
          >
            Cybersecurity
          </Link>
        </li>
        <li>
          <Link
            to="/Carrier"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: 22 + "px",
            }}
          >
            carrier
          </Link>
        </li>
      </ul>
    </div>
  );
}
