import React from 'react';
import { Button } from 'reactstrap';

function RenderCalendar({ event }) {
    return (
        <div className='container mt-1'>
            <div className='row'>
                <div className='col-md-4'>
                    <img width='100%' src={event.image} alt={event.name} />
                </div>
                <div className='col'>
                    <p>{event.description}</p>
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