import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle
} from 'reactstrap';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

class ArtistModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            artist: props.artist
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Button onClick={this.toggleModal} className='artistCard'>
                    <CardTitle>{this.state.artist.name}</CardTitle>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <img src={this.state.artist.image} alt={this.state.artist.name} />
                    <ModalHeader toggle={this.toggleModal}>{this.state.artist.name}</ModalHeader>
                    <ModalBody>
                        <p><strong>From: </strong>{this.state.artist.home}</p>
                        <p><strong>Description: </strong>{this.state.artist.description}</p>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }

}

function RenderDirectoryItem({ artist }) {
    return (
        <Card body outline color='secondary' className='m-1 artistCard'>
            <CardImg width='100%' src={artist.image} alt={artist.name} />
            <CardBody>
                <ArtistModal artist={artist} />
            </CardBody>
        </Card>
    );
}

function ArtistDirectory(props) {
    const artists = props.artists
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map(artist => {
            return (
                <div key={artist.id} className='col-md-4 m-0'>
                    <RenderDirectoryItem artist={artist} />
                </div>
            );
        }
    );
    
    return (
        <div className='container'>
            <div className='row'>
                {artists}
            </div>
            
        </div>
    );
}

export default ArtistDirectory;