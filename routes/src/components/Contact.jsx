import React, { useState } from 'react';
import './Contact.css';  // Assuming you'll style the component in a separate CSS file

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // You can handle form submission logic here
    };

    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
