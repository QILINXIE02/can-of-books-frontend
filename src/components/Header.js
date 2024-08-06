// src/components/Header.js
import React from 'react';
import AuthButtons from './AuthButtons';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Can of Books</Navbar.Brand>
      <Nav className="ml-auto">
        <AuthButtons />
      </Nav>
    </Navbar>
  );
};

export default Header;
