import React, { useState } from 'react';
import {
    Carousel,
    CarouselControl,
    CarouselItem
} from 'reactstrap';
import { EVENTS } from '../shared/events';

const items = EVENTS.filter(show => show.slideshow).map(show => (
    {
        src: show.image,
        altText: show.name,
        caption: show.name
    }
));

const UpcomingEventSlideshow = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const prevIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(prevIndex);
    }

    const slides = items.map(item => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            {slides}
            <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
            <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
        </Carousel>
    );
}

export default UpcomingEventSlideshow;