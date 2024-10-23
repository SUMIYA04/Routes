import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Services.css';  // Assuming you'll style the component in a separate CSS file

const Services = () => {
    return (
        <div className="services">
            <h1>Our Services</h1>
            <p>Explore the wide range of services we offer at Innomatics Research Labs.</p>
            <nav className="navigation">
                <NavLink exact="true" to="/services/data-science" activeclassname="active">Data Science</NavLink> | 
                <NavLink to="/services/ai-ml" activeclassname="active">AI & ML</NavLink> | 
                <NavLink to="/services/full-stack-development" activeclassname="active">Full Stack Development</NavLink>
            </nav>
            <Outlet />  {/* This renders the nested routes */}
        </div>
    );
};

export default Services;
