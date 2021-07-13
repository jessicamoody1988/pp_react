import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function RenderCalendar({ event }) {
    return (
        <div className='container mt-1'>
            <Link to={`/calendar/${event.id}`}>
                <div className='row'>
                    <div className='col-md-4'>
                        <img width='100%' src={event.image} alt={event.name} />
                    </div>
                    <div className='col'>
                        <h3>{event.name}</h3>
                        <p>{moment(event.start.toString()).format('MMMM Do YYYY, h:mm a')} - {moment(event.end.toString()).format('MMMM Do YYYY, h:mm a')}</p>
                        <p><strong>Location: </strong>{event.location}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

function Calendar(props) {
    const events = props.events.sort((a,b) => a.id - b.id).map(event => {
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