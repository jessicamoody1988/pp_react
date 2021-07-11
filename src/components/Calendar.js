import React from 'react';
import { Button } from 'reactstrap';
import moment from 'moment';

function RenderCalendar({ event }) {
    return (
        <div className='container mt-1'>
            <div className='row'>
                <div className='col-md-4'>
                    <img width='100%' src={event.image} alt={event.name} />
                </div>
                <div className='col'>
                    <h3>{event.name}</h3>
                    <p>{moment(event.start.toString()).format('MMMM Do YYYY, h:mm a')} - {moment(event.end.toString()).format('MMMM Do YYYY, h:mm a')}</p>
                    <p><strong>Location: </strong>{event.location}</p>
                    <Button>More Info</Button>
                </div>
            </div>
        </div>
    );
}

function Calendar(props) {
    const events = props.events.map(event => {
        return (
            <div key={event.id}>
                <RenderCalendar event={event} />
            </div>
        );
    })

    return (
        <React.Fragment>
            {events}
        </React.Fragment>
    );
}

export default Calendar;