import React from 'react';
import './bootstrap.min.css';
import Navbar from './inc/Navbar';
import './layout.css';

const Layout = (props) => {
    return(
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>        
    )
}

export default Layout;