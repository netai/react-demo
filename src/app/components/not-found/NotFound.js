import './NotFound.css';

import React from 'react';
import Alert from 'react-bootstrap/Alert';

const NotFound = () => {
    return (
        <div className="not-found">
            <Alert variant="danger">
                Page Not Found
            </Alert>
        </div>
    );
}

export default NotFound;