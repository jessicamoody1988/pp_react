/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { 
    Button,
    Col,
    Label,
    Row
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const minLength = len => val => val && (val.length >= len);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class FeedbackForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            feedback: '',
            subscribe: true
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value; 

        this.setState({
            [name]: value
        });
    }

    handleSubmit(values) {
        alert(JSON.stringify(values));
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h2>Contact Us</h2>
                        <p>Our artists want to hear from you! Send us a review, a comment, a request, or just a 'Hello!'.</p>
                        <p>Want J&J to promote you? Fill out an application!</p>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-10'>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className='form-group'>
                                <Label htmlFor='firstName' md={2}>First Name:</Label>
                                <Col md={10}>
                                    <Control.text
                                        model='.firstName' 
                                        id='firstName' 
                                        name='firstName'
                                        placeholder='First Name'
                                        className='form-control'
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.firstName'
                                        show='touched'
                                        component='div'
                                        messages={{
                                            required: 'Required'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='lastName' md={2}>Last Name:</Label>
                                <Col md={10}>
                                    <Control.text
                                        model='.lastName'
                                        id='lastName' 
                                        name='lastName'
                                        placeholder='Last Name'
                                        className='form-control'
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.lastName'
                                        show='touched'
                                        component='div'
                                        messages={{
                                            required: 'Required'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='phone' md={2}>Phone:</Label>
                                <Col md={10}>
                                    <Control.text
                                        model='.phone'
                                        id='phone' 
                                        name='phone'
                                        placeholder='Phone Number'
                                        className='form-control'
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.phone'
                                        show='touched'
                                        component='div'
                                        messages={{
                                            required: 'Required'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='email' md={2}>Email:</Label>
                                <Col md={10}>
                                    <Control.text
                                        model='.email'
                                        id='email'
                                        name='email'
                                        placeholder='Email'
                                        className='form-control'
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.email'
                                        show='touched'
                                        component='div'
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='feedback' md={2}>Description:</Label>
                                <Col md={10}>
                                    <Control.textarea
                                        model='.feedback'
                                        id='feedback'
                                        name='feedback'
                                        rows='12'
                                        className='form-control'
                                        validators={{
                                            required,
                                            minLength: minLength(50)
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.feedback'
                                        show='touched'
                                        component='div'
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Minimum Length: 50 Characters'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={{size: 4, offset: 2}}>
                                    <div className='form-check'>
                                        <Label check>
                                            <Control.checkbox
                                                model='.subscribe'
                                                name='subscribe'
                                                className='form-check-input'
                                            />{' '}
                                            Yes, I would like to subscribe to updates about events and new artists. 
                                        </Label>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type='submit' color='primary'>Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeedbackForm;