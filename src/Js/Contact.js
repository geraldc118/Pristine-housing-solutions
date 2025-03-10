import React from "react";
import '../Css/Contact.css';
import logoImage from '../Images/android-chrome-512x512.png';

function Contact(){
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-12">
                    <div className="logoContainer">
                        <img className="logoImage" src={logoImage} alt="logo"/>
                    </div>
                </div>
           </div>
            <h1>Contact Us</h1>
            <p>If you are interested in letting us use your property or alternatively you are looking for a property fill the form and we will get back to you.</p>
            <form action="https://formspree.io/f/myyrrlgq" method="POST">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email"/>
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" name="message" rows="3" placeholder="Enter your message"></textarea>
            </div>
                <button type="submit" className="contactButton btn" target='_blank'>Submit</button>
            </form>
        </div>
    )
}

export default Contact;