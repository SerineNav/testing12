import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand to="/home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link style={linkStyle} to="/">
            Home |
          </Link>
          <Link style={linkStyle} to="/about">
            About |
          </Link>
          <Link style={linkStyle} to="/images">
            Images
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
}
const linkStyle = {
  textDecoration: "none"
};

export default Header;
