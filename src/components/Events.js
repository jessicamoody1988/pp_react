import React, { Component } from 'react';
import moment from 'moment';

class Events extends Component {
    render({ event }) {
        if(event) {
            return (
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <img src={event.image} alt={event.name} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <p>
                                <strong>Start:</strong> {moment(event.start.toString()).format('MMMM Do YYYY, h:mm a')} \n
                                <strong>End:</strong> {moment(event.end.toString()).format('MMMM Do YYYY, h:mm a')} \n
                                <strong>Location:</strong> {event.location}
                            </p>
                        </div>
                        <div className='col'>
                            <p>
                                <strong>Description:</strong> {event.description}
                            </p>
                        </div>
                    </div>
                </div>
            );
        }
        return <div></div>
    }
}

export default Events;