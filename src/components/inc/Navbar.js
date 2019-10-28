import React, { Component } from 'react'
import { Link } from 'gatsby';
import { FaCartArrowDown } from 'react-icons/fa';

export default class Navbar extends Component {
    state = {
        navbarOpen: false,
        navStyle: 'collapse navbar-collapse',
        links: [
            {
                id: 1,
                path: '/',
                text: 'home'
            },
            {
                id: 2,
                path: '/about',
                text: 'about'
            }
        ]
    }

    navbarHandler = () => {
        this.state.navbarOpen ? this.setState({navbarOpen: false, navStyle: 'collapse navbar-collapse'}) : this.setState({navbarOpen: true, navStyle: 'collapse navbar-collapse show'});
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <div className="container">
                    <Link to="/" className="navbar-brand text-uppercase">Arola</Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" onClick={this.navbarHandler}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={this.state.navStyle}>
                        <ul className="navbar-nav ml-auto">
                            {
                                this.state.links.map(link => {
                                    return(
                                        <li className="nav-item" key={link.id}>
                                            <Link to={link.path} className="nav-link text-capitalize">{link.text}</Link>
                                        </li>
                                    )
                                })
                            }
                            <li className="nav-item ml-sm-3">
                                <FaCartArrowDown className="cart-icon" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
