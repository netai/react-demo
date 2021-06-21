import './Header.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Header(props) {
    return (
        <header className="app-header">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>React Demo</Navbar.Brand>
            </Navbar>
        </header>
    );
}

export default Header;