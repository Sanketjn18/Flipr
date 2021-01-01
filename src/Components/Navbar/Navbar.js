import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FliprLogo from "../../assets/logo.svg";
import ProfileLogo from "../../assets/profile.svg";
import "./Navbar.css";

export default function Header() {
  return (
    <React.Fragment>
      <Navbar className="Nav" expand="lg">
        <Navbar.Brand href="/" style={{ color: "white" }}>
          <img src={FliprLogo} alt="FliprBrand" className="FliprLogoNav" />
          <span className="spanNavbarBrand">Intugine</span>
        </Navbar.Brand>
        <Nav id="FlipNav">
          <Nav.Link href="#" style={{ textDecoration: "none" }}>
            Home
          </Nav.Link>
          <Nav.Link href="#" style={{ textDecoration: "none" }}>
            Brands
          </Nav.Link>
          <Nav.Link href="#" style={{ textDecoration: "none" }}>
            Transporters
          </Nav.Link>
          <Nav.Link href="#" className="lastNavLink">
            <img src={ProfileLogo} alt="FliprProfile" className="FliprProfileLogoNav" />
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </Nav.Link>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
}