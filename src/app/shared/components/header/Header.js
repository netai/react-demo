import './Header.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { useGlobalContext } from '../../context/Global';

const Header = (props) => {

    const [globalState] = useGlobalContext();

    return (
        <header className="app-header">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>React Demo</Navbar.Brand>
                {globalState.isLogin && <Button variant="outline-danger" className="btn-logout" size="sm">Logout</Button>}
            </Navbar>
        </header>
    );
}

export default Header;