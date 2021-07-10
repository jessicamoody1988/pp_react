import React, { Component } from 'react';
import { 
    Button,
    Col,
    Form,
    FormGroup,
    Label,
    Input 
} from 'reactstrap';

class Contact extends Component {
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

    handleSubmit(event) {
        alert(JSON.stringify(this.state));
        event.preventDefault();
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
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor='firstName' md={2}>First Name:</Label>
                                <Col md={10}>
                                    <Input 
                                        type='text' 
                                        id='firstName' 
                                        name='firstName'
                                        placeholder='First Name'
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastName' md={2}>Last Name:</Label>
                                <Col md={10}>
                                    <Input 
                                        type='text' 
                                        id='lastName' 
                                        name='lastName'
                                        placeholder='Last Name'
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='phone' md={2}>Phone:</Label>
                                <Col md={10}>
                                    <Input 
                                        type='tel' 
                                        id='phone' 
                                        name='phone'
                                        placeholder='Phone Number'
                                        value={this.state.phone}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}>Email:</Label>
                                <Col md={10}>
                                    <Input
                                        type='email'
                                        id='email'
                                        name='email'
                                        placeholder='Email'
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='feedback' md={2}>Description:</Label>
                                <Col md={10}>
                                    <Input 
                                        type='textarea'
                                        id='feedback'
                                        name='feedback'
                                        rows='12'
                                        value={this.state.feedback}
                                        onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 4, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type='checkbox'
                                                name='subscribe'
                                                checked={this.state.subscribe}
                                                onChange={this.handleInputChange}
                                            />{' '}
                                            Yes, I would like to subscribe to updates about events and new artists. 
                                        </Label>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md={{size: 10, offset: 2}}>
                                            <Button type='submit' color='primary'>Submit</Button>
                                        </Col>
                                    </FormGroup>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;