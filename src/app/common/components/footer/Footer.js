import './Footer.css';
import React from 'react';
import Container from 'react-bootstrap/Container';

function Footer(props) {
    return(
        <footer className="app-footer">
            <Container>
                <div>&copy;2021</div>
            </Container>
        </footer>
    );
}

export default Footer;