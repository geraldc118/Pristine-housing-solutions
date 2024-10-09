import React from "react";
// import '../Css/privacyPolicy';

function privacyPolicy(){
    return(
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h1 className="mt-5">Privacy Policy</h1>
                <p>At Pristine Housing Solutions Ltd, we are committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information.</p>

                <h2>1. Data Collection</h2>
                <p>We collect the following personal data:</p>
                <ul>
                    <li>Name, contact information (email, phone number)</li>
                    <li>Booking details and payment information</li>
                    <li>Communication history, including any inquiries made through the website</li>
                    <li>Cookies and usage data (if applicable)</li>
                </ul>

                <h2>2. Purpose of Data Collection</h2>
                <p>The personal data collected is used for:</p>
                <ul>
                    <li>Processing and managing bookings</li>
                    <li>Communicating with you regarding your stay</li>
                    <li>Maintaining property records, including deposits and damage claims</li>
                    <li>Compliance with legal obligations</li>
                </ul>

                <h2>3. Third-Party Sharing</h2>
                <p>We may share your information with:</p>
                <ul>
                    <li>Payment processors for handling your bookings</li>
                    <li>Airbnb (or other third-party booking platforms) when applicable</li>
                    <li>Service providers like cleaning and maintenance teams who assist in managing the property</li>
                </ul>

                <h2>4. Legal Basis for Data Processing</h2>
                <p>We process your data based on the following lawful grounds:</p>
                <ul>
                    <li>Performance of a contract (your booking)</li>
                    <li>Legal</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default privacyPolicy;