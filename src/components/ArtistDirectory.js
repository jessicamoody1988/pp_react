import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle
} from 'reactstrap';

class ArtistDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedArtist: null
        };
    }

    onArtistSelect(artist) {
        this.setState({
            selectedArtist: artist
        });
    }

    renderSelectedArtist(artist) {
        if(artist) {
            return (
                <Card>
                    <CardImg top src={artist.image} alt={artist.name} />
                    <CardBody>
                        <CardTitle>{artist.name}</CardTitle>
                        <CardText>{artist.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div></div>;
    }

    render() {
        const artists = this.props.artists.map(artist => {
            return (
                <div key={artist.id} className='col-md-4 m-0'>
                    <Card body outline color='secondary' onClick={() => this.onArtistSelect(artist)}>
                        <CardImg width='100%' src={artist.image} alt={artist.name} />
                        <CardBody>
                            <CardTitle>{artist.name}</CardTitle>
                            <CardText>{artist.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        })
        return (
            <div className='container'>
                <div className='row'>
                    {artists}
                </div>
                <div className='row'>
                    <div className='col-md-5 m-1'>
                        {this.renderSelectedArtist(this.state.selectedArtist)}
                    </div>
                </div>
            </div>
        );
    }
}

export default ArtistDirectory;