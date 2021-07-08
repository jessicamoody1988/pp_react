import React, { Component } from 'react';
import { Jumbotron, Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
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
                <Navbar dark sticky='top'>
                    <div className='container'>
                        <NavbarBrand href='/'>J&J Promotions</NavbarBrand>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;