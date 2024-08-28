
import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Style/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Assets/logo-yayasan-removebg-preview.png";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img 
            src={logo} 
            width={80} 
            height={80} 
            className="d-inline-block align-top" 
            alt="logo-yayasan" 
          />
          <span className="navbar-brand-text">YAYASAN PONPES AL - MUNAWWAROH SAPAN</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Beranda</Nav.Link>
            <Nav.Link as={Link} to="/fasilitas" className="nav-link-custom">Fasilitas</Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="nav-link-custom">Galeri</Nav.Link>
            <NavDropdown title="Pendidikan" id="basic-nav-dropdown" className="nav-link-custom">
              <NavDropdown.Item as={Link} to="/visiMisi">Visi Misi</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/keunggulan">Keunggulan</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
