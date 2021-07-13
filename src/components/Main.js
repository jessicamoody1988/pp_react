import React, { Component } from 'react';
import ArtistDirectory from './ArtistDirectory';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import Calendar from './Calendar';
import Events from './Events';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        artists: state.artists,
        events: state.events
    };
};

class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <Home 
                    artist={this.props.artists.filter(artist => artist.spotlight)[0]} 
                    events={this.props.events.filter(event => event.slideshow)}
                />
            );
        }

        const EventPage = ({ match }) => {
            return (
                <Events event={this.state.events.filter(event => event.id === +match.params.eventId)[0]} />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/artists' render={() => <ArtistDirectory artists={this.props.artists} /> } />
                    <Route path='/calendar' render={() => <Calendar events={this.props.events} /> } />
                    <Route path='/calendar/:eventId' component={EventPage} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
