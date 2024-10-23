import React from 'react';
import { NavLink } from 'react-router-dom';
import './About.css';  // Assuming you'll style the component in a separate CSS file

const About = () => {
    return (
        <div className="about">
            <h1>About Innomatics Research Labs</h1>
            <p>Innomatics Research Labs is a pioneer in delivering innovative technology solutions, enabling businesses to achieve their full potential.</p>
            <nav className="navigation">
                <NavLink exact="true" to="/" activeclassname="active">Home</NavLink> | 
                <NavLink to="/about" activeclassname="active">About</NavLink> | 
                <NavLink to="/services" activeclassname="active">Services</NavLink> | 
                <NavLink to="/contact" activeclassname="active">Contact</NavLink>
            </nav>
        </div>
    );
};

export default About;
