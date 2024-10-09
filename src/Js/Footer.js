import React from "react";
import '../Css/Footer.css'

document.addEventListener('DOMContentLoaded', (event) => {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
  });

function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <footer className="text-center text-white py-4">
            <a href="terms&conditions.html" className="footerLink">Terms & Conditions</a>
            <a href="privacyPolicy.html" className="footerLink">Privacy Policy</a>
            <p>&copy; <span>{currentYear}</span> Pristine Housing Solutions</p>
            <p>Pristine Housing Solutions Ltd is registered in England & Wales. Company Number: 14853578</p>
        </footer>
    )
}

export default Footer;