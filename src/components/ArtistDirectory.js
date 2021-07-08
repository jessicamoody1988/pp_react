import React from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle
} from 'reactstrap';

function RenderDirectoryItem({ artist }) {
    return (
        <Card body outline color='secondary'>
            <CardImg width='100%' src={artist.image} alt={artist.name} />
            <CardBody>
                <CardTitle>{artist.name}</CardTitle>
                <CardText>{artist.description}</CardText>
            </CardBody>
        </Card>
    );
}

function ArtistDirectory(props) {
    const artists = props.artists.map(artist => {
        return (
            <div key={artist.id} className='col-md-4 m-0'>
                <RenderDirectoryItem artist={artist} />
            </div>
        );
    })
    
    return (
        <div className='container'>
            <div className='row'>
                {artists}
            </div>
            
        </div>
    );
}

export default ArtistDirectory;