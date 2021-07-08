import React from 'react';
import { Button } from 'reactstrap';

const Calendar = () => {
    return (
        <div className='container mt-1'>
            <div className='row'>
                <div className='col-md-4'>
                    <img width='100%' src='assets/images/LoveLand.jpg' alt='placeholder' />
                </div>
                <div className='col'>
                    <p>Description of the event</p>
                    <Button>More Info</Button>
                </div>
            </div>
        </div>
    );
}

export default Calendar;