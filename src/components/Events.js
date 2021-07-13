import React from 'react';
import moment from 'moment';

function Events({ event }) {
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
                        <p><strong>Start:</strong> {moment(event.start.toString()).format('MMMM Do YYYY, h:mm a')}</p>
                        <p><strong>End:</strong> {moment(event.end.toString()).format('MMMM Do YYYY, h:mm a')}</p>
                        <p><strong>Location:</strong> {event.location}</p>
                    </div>
                    <div className='col'>
                        <p>{event.description}</p>
                    </div>
                </div>
            </div>
        );
    }
    return <div>TEST</div>
}


export default Events;