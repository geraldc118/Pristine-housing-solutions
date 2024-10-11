import React from "react";
import '../Css/Footer.css'

function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <footer className="text-center py-4">
            <a href="terms&conditions" className="footerLink">Terms & Conditions</a>
            <a href="/privacyPolicy" className="footerLink">Privacy Policy</a>
            <p>&copy; <span>{currentYear}</span> Pristine Housing Solutions</p>
            <p>Pristine Housing Solutions Ltd is registered in England & Wales. Company Number: 14853578</p>
        </footer>
    )
}

export default Footer;