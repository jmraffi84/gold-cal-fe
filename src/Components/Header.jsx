import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import './header.css';
const Header = () => {
    return (
        <div className="container-fluid  text-center">
            <Navbar expand="lg" bg="light" variant="light">
                <Navbar.Brand className="mx-auto" href="/">Gold Calculator</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarSupportedContent" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="ms-auto mx-auto">
                        <Nav.Link className="nav-link-bold" href="/">Home</Nav.Link>
                        <Nav.Link className="nav-link-bold" href="/data">List of Check</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );


}

export default Header