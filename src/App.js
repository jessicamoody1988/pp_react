import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import ArtistDirectory from './components/ArtistDirectory';
import './App.css';
import { ARTISTS } from './shared/artists';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: ARTISTS
    };
  }

  render() {
    return (
      <div className='App'>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>J&J Promotions</NavbarBrand>
          </div>
        </Navbar>
        <ArtistDirectory artists={this.state.artists} />
      </div>
    );
  }
}

export default App;
