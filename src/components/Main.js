import React, { Component } from 'react';
import ArtistDirectory from './ArtistDirectory';
import ArtistInfo from './ArtistInfo';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import Calendar from './Calendar';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ARTISTS } from '../shared/artists';
import { EVENTS } from '../shared/events';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: ARTISTS,
            events: EVENTS
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home 
                    artist={this.state.artists.filter(artist => artist.spotlight)[0]} 
                    events={this.state.events.filter(event => event.slideshow)}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/artists' render={() => <ArtistDirectory artists={this.state.artists} /> } />
                    <Route path='/calendar' render={() => <Calendar events={this.state.events} /> } />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
    }

export default Main;
