import React from 'react';
import UpcomingEventSlideshow from './UpcomingEventSlideshow';

function AboutUs() {
    return (
        <React.Fragment>
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum dolor vitae ligula interdum consequat. Aenean felis urna, semper mattis dignissim quis, elementum et magna. In nec porta enim. Curabitur turpis odio, porttitor vel leo rutrum, dignissim finibus arcu. Integer scelerisque augue felis, at sodales ante congue at. Pellentesque eleifend mauris ut libero iaculis, ac viverra lacus iaculis. Morbi vel sapien vehicula, iaculis neque ac, feugiat nibh. Sed mollis tincidunt dolor, porttitor convallis libero porttitor ut. Cras convallis diam non lobortis mattis. Pellentesque sagittis lectus id ipsum semper finibus. Integer dapibus arcu et odio semper, mollis aliquam metus aliquam. Donec sodales tempor lectus, in luctus nisl ultrices ac.</p>
        </React.Fragment>
    );
}

function ArtistSpotlight({artist}) {
    return (
        <React.Fragment>
            <div clasName='row'>
                <h4>Artist Spotlight</h4>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <img src={artist.image} alt={artist.name} width='100%'/>
                </div>
                <div className='col'>
                    <h5>{artist.name}</h5>
                    <p>This artist was featured because...</p>
                </div>
            </div>
        </React.Fragment>
    );
}

function Home(props) {
    return (
        <div className='container'>
            <div className='row'>
                <UpcomingEventSlideshow />
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <AboutUs />
                </div>
                <div className='col-md-6'>
                    <ArtistSpotlight artist={props.artist} />
                </div>
            </div>
        </div>
    );
}

export default Home;