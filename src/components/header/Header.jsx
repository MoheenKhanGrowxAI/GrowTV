import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.css";

function Header({}) {
  const location = useLocation();

  function getLocationPath() {
    return location.pathname;
  }

  return (
    <div style={{ position: "relative", zIndex: 999 }}>
      <Navbar collapseOnSelect expand="lg" className="bg-transparent">
        <Container className="position-relative">
          <Navbar.Brand href="#home">
            <motion.img
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 1 }}
              src="./images/header-logo.png"
              alt="HGX TV"
              width={"130px"}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                className={getLocationPath() === "/" ? "active" : ""}
                as={Link}
                to={"/"}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                className={getLocationPath() === "/channels" ? "active" : ""}
                as={Link}
                to={"/channels"}
              >
                CHANNELS
              </Nav.Link>
              <Nav.Link
                className={getLocationPath() === "/teams" ? "active" : ""}
                as={Link}
                to={"/teams"}
              >
                TEAM
              </Nav.Link>
              <Nav.Link
                className={getLocationPath() === "/contact-us" ? "active" : ""}
                as={Link}
                to={"/contact-us"}
              >
                CONTACT US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
