import React from "react";
import '../Css/Contact.css';

function Contact(){
    return(
        <div className="container my-5">
            <h1>Contact Us</h1>
            <p>If you are interested in letting us use your property or alternatively you are looking htmlfor a property fill the form and we will get back to you.</p>
            <form action="https://formspree.io/f/myyrrlgq" method="POST">
            <div className="form-group">
                <label htmlfor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name"/>
            </div>
            <div className="form-group">
                <label htmlfor="email">Email address</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email"/>
            </div>
            <div className="form-group">
                <label htmlfor="message">Message</label>
                <textarea className="form-control" id="message" name="message" rows="3" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="contactButton btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Contact;