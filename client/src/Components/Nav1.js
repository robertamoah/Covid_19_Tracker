import React, { Fragment } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: grey;

  }
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: black;
    &:hover {
      color: white;
    }
  }
  .logoName {
    color: red;
    font-size: 30px !important;
    line-height: 1.09;
  }
`;

const Nav1 = () => {
  return (
    <Fragment>
      <Styles>
        <Navbar expand="sm">
          <Navbar.Brand>
            <h1 className="logoName">Covid 19</h1>
          </Navbar.Brand>
          <Navbar.Toggle arial-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    </Fragment>
  );
};

export default Nav1;
