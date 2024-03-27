import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';

function CustomNavbar({ navigationItems }) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
            <Navbar.Brand as={Link} to="/home">
                <div className="nav-logo">
                    <span className="logo-primary">MEB</span>
                    <span className="logo-secondary">EVERIN</span>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                <Nav className="ml-auto nav-list">
                    {navigationItems.map((item, index) => (
                        <Nav.Link
                            className="nav-item"
                            key={`NavigationItems_${index}`} href={item.href}>{item.text} </Nav.Link>
                    ))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;