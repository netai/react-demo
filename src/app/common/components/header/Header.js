import './Header.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useGlobal } from '../../context/Global';

function Header(props) {
    const global = useGlobal();
    
    console.log(global.value.isAutheticated);

    return (
        <header className="app-header">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>React Demo</Navbar.Brand>
                {global.value.isAutheticated && <Button variant="outline-danger" className="btn-logout" size="sm">Logout</Button>}
            </Navbar>
        </header>
    );
}

export default Header;