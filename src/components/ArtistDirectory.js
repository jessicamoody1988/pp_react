import React from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({ artist }) {
    return (
        <Card body outline color='secondary'>
            <Link to={`/artists/${artist.id}`}>
                <CardImg width='100%' src={artist.image} alt={artist.name} />
                <CardBody>
                    <CardTitle>{artist.name}</CardTitle>
                    <CardText>{artist.description}</CardText>
                </CardBody>
            </Link>
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