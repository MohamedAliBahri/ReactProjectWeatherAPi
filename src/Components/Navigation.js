import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
function NavigationBar() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto d-flex justify-content-between">
          <Navbar.Brand href="/home" className="nav-link">
            My weather
          </Navbar.Brand>
          <Link to="/weather" className="nav-link">
            weather
          </Link>
          <Link to="/more" className="nav-link">
            Humidity
          </Link>
          <Link to="/forecast" className="nav-link">
            Forecast
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavigationBar;
