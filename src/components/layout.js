import React from 'react';
import './bootstrap.min.css';
import Navbar from './inc/Navbar';
import './layout.css';
import Footer from './inc/Footer';

const Layout = (props) => {
    return(
        <React.Fragment>
            <Navbar />
            {props.children}
            <Footer />
        </React.Fragment>        
    )
}

export default Layout;