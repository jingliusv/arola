import React from 'react';
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
    const getYear = () => {
        const d = new Date();
        return d.getFullYear();
    }

    return (
        <footer className="footer py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-capitalize footer-box">
                        <p>All rights reserved &copy;{getYear()}</p>
                    </div>
                    <div className="col-md-6 text-capitalize text-right footer-box">
                        <FaFacebookSquare className="mr-2"/> <FaInstagram/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;