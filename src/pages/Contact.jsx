import React from 'react';

const Contact = () => {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-info">
                <div className="contact-details">
                    <p><strong>Address:</strong> 123 Main Street, City</p>
                    <p><strong>Email:</strong> contact@example.com</p>
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                </div>
                <div className="contact-form">
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" />

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message"></textarea>

                        <button className="submit-button">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
