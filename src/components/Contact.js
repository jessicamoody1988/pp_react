/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import FeedbackForm from './FeedbackForm';

class Contact extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h2>Contact Us</h2>
                        <p>Our artists want to hear from you! Send us a review, a comment, a request, or just a 'Hello!'.</p>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-10'>
                        <FeedbackForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;