import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BsBag } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";

// header function
export default function Header({ setShow, size }) {
  return (
    <>
      <Navbar
        className="header-bar"
        bg="light"
        variant="light"
        style={{ height: 80 }}
      >
        <Container>
          {/* <Navbar.Brand> */}
          <Nav.Link to="/" as={NavLink}>
            <h4>Cornerstone</h4>
          </Nav.Link>
        </Container>

        <div className="container-2">
          {/* </Navbar.Brand> */}
          <div className="nav-links">
            <Nav className=" nav-bar">
              <Nav.Link to="/shop" as={NavLink} onClick={() => setShow(true)}>
                Shop
              </Nav.Link>

              <Nav.Link to="mens" as={NavLink} onClick={() => setShow(true)}>
                Mens
              </Nav.Link>
              <Nav.Link to="/womens" as={NavLink} onClick={() => setShow(true)}>
                Womens
              </Nav.Link>
              <Nav.Link
                to="/jewelry"
                as={NavLink}
                onClick={() => setShow(true)}
              >
                Jewelry
              </Nav.Link>
              <Nav.Link
                to="/electronics"
                as={NavLink}
                onClick={() => setShow(true)}
              >
                Electronics
              </Nav.Link>
            </Nav>
          </div>
          {/* <Link to="/user">Login</Link> */}
          <Nav.Link to="/cart" as={NavLink} onClick={() => setShow(false)}>
            <BsBag fontSize="35px" />
            <div
              className="rounded-circle bg-info d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.2rem",
                height: "1.2rem",
                position: "absolute",
                bottom: "17px",
                marginLeft: "11px",
              }}
            >
              <span>{size}</span>
            </div>
          </Nav.Link>
          <Nav.Link to="/user" as={NavLink}>
            Login
          </Nav.Link>
        </div>
      </Navbar>
    </>
  );
}
