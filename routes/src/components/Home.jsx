import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';  // Assuming you'll style the component in a separate CSS file

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Innomatics Research Labs</h1>
            <p>Your partner in innovation and technology solutions.</p>
            <nav className="navigation">
                <NavLink exact="true" to="/" activeclassname="active">Home</NavLink> | 
                <NavLink to="/about" activeclassname="active">About</NavLink> | 
                <NavLink to="/services" activeclassname="active">Services</NavLink> | 
                <NavLink to="/contact" activeclassname="active">Contact</NavLink>
            </nav>
        </div>
    );
};

export default Home;
