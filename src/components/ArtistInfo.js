import React from 'react';
import { 
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle
} from 'reactstrap';

function RenderArtist({ artist }) {
    return (
        <div className='col-md-5 m-1'>
            <Card>
                <CardImg top src={artist.image} alt={artist.name} />
                <CardBody>
                    <CardTitle>{artist.name}</CardTitle>
                    <CardText>{artist.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function ArtistInfo(props) {
    if(props.artist) {
        return (
            <div className='container'>
                <div className='row'>
                    <RenderArtist artist={props.artist} />
                </div>
            </div>
        );
    }
    return <div />
}

export default ArtistInfo;