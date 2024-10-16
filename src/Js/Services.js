import React from "react";
import '../Css/Services.css';

function Services(){
    return(
        <div className="container my-5">
          <div className="row">
            <div className="col-md-4">
              <h2>Our Services</h2>
              <p>We provide professional property management services for HMO and short stays.</p>
              <a href="/about" className="serviceButton btn">Learn More</a>
            </div>
            <div className="col-md-4">
              <h2>Why Choose Us?</h2>
              <p>We ensure your property is well-maintained and occupied by reliable professionals.</p>
              <a href="/about" className="serviceButton btn active">Learn More</a>
            </div>
            <div className="col-md-4">
              <h2>Contact Us</h2>
              <p>Get in touch with us to find out how we can manage your property.</p>
              <a href="/contact" className="serviceButton btn active">Contact Us</a>
            </div>
          </div>
        </div>
    )
}

export default Services;