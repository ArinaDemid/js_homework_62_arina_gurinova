import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import Portfolio1 from '../About/AboutPhoto/portfolio1.jpg';
import Portfolio2 from '../About/AboutPhoto/portfolio2.jpg';
import Portfolio3 from '../About/AboutPhoto/portfolio3.jpg';
import Portfolio4 from '../About/AboutPhoto/portfolio4.jpg';
import Portfolio5 from '../About/AboutPhoto/portfolio5.jpg';
import Portfolio6 from '../About/AboutPhoto/portfolio6.jpg';

const items = [
  {
    src: Portfolio1,
    altText: 'Photo 1'
  },
  {
    src: Portfolio2,
    altText: 'Photo 2'
  },
  {
    src: Portfolio3,
    altText: 'Photo 3'
  },
  {
    src: Portfolio4,
    altText: 'Photo 4'
  },
  {
    src: Portfolio5,
    altText: 'Photo 5'
  },
  {
    src: Portfolio6,
    altText: 'Photo 6'
  }
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
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
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Portfolio;