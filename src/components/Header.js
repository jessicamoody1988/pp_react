import React, { Component } from 'react';
import { Collapse, Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className='container'>
                        <div className='row'>
                            <div className='col'>
                                <h1>J&J Promotions</h1>
                                <h2>An Imaginary Talent Promotions Agency</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky='top' expand='md' className='header'>
                    <div className='container'>
                        <NavbarBrand className='mr-auto' href='/'>J&J Promotions</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>
                                        <i className='fa fa-home fa-lg' />Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/artists'>
                                        <i className='fa fa-headphones fa-lg' />Artists
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/calendar'>
                                        <i className='fa fa-calendar fa-lg' />Calendar
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/contactus'>
                                        <i className='fa fa-envelope fa-lg' />Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;