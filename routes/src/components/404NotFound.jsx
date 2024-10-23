import React from 'react';
import { NavLink } from 'react-router-dom';
import './NotFound.css';  // Assuming you'll style the component in a separate CSS file

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <NavLink to="/">Go back to Home</NavLink>
        </div>
    );
};

export default NotFound;
