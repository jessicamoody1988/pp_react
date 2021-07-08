import React, { Component } from 'react';
import ArtistDirectory from './ArtistDirectory';
import ArtistInfo from './ArtistInfo';
import Header from './Header';
import Footer from './Footer';
import { ARTISTS } from '../shared/artists';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: ARTISTS,
            selectedArtist: null
        };
    }

    onArtistSelect(artistId) {
        this.setState({
            selectedArtist: artistId
        });
    }

    render() {
        return (
            <div>
                <Header />
                <ArtistDirectory artists={this.state.artists} onClick={artistId => this.onArtistSelect(artistId)} />
                <ArtistInfo artist={this.state.artists.filter(artist => artist.id === this.state.selectedArtist)[0]} />
                <Footer />
            </div>
        );
    }
    }

export default Main;
