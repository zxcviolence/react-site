import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Contacts from "../Pages/Contacts";
import logo from "../assets/logo192.svg";

const Header = () => {
  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              height="30"
              width="30"
              alt="logo"
              className="d-inline-block align-top"
            />{" "}
            React site
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link
                style={{
                  textDecoration: "none",
                  color: "#ccc",
                  marginRight: "7px",
                }}
                to="/"
              >
                Home
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#ccc",
                  marginRight: "7px",
                }}
                to="/about"
              >
                About
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#ccc",
                  marginRight: "7px",
                }}
                to="/contacts"
              >
                Contacts
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#ccc",
                  marginRight: "7px",
                }}
                to="/blog"
              >
                Blog
              </Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="me-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};

export default Header;
