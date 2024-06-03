import React, { useEffect, useRef, useState } from 'react';
import sl1 from '../assets/sl1.jpg';
import sl2 from '../assets/sl2.jpg';
import sl3 from '../assets/sl3.jpg';
import sl4 from '../assets/sl4.jpg';
import sl5 from '../assets/sl5.jpg';
import sl6 from '../assets/sl6.jpg';
import sl7 from '../assets/sl7.jpg';

const images = [
    sl1,
    sl2,
    sl3,
    sl4,
    sl5,
    sl6,
    sl7,
];

const Glimpses = () => {
    const carouselRef = useRef(null);
    const [speed, setSpeed] = useState(30);

    useEffect(() => {
        const updateSpeed = () => {
            if (window.matchMedia('(max-width: 768px)').matches) {
                setSpeed(10); // Speed for mobile
            } else {
                setSpeed(30); // Speed for desktop
            }
        };

        window.addEventListener('resize', updateSpeed);
        updateSpeed();

        const carousel = carouselRef.current;

        const startAnimation = () => {
            carousel.style.animation = `scroll ${speed}s linear infinite`;
        };

        startAnimation();

        const handleMouseEnter = () => {
            carousel.style.animationPlayState = 'paused';
        };

        const handleMouseLeave = () => {
            carousel.style.animationPlayState = 'running';
        };

        carousel.addEventListener('mouseenter', handleMouseEnter);
        carousel.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', updateSpeed);
            carousel.removeEventListener('mouseenter', handleMouseEnter);
            carousel.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [speed]);

    return (
        <>
       <div className="w-full flex flex-col mb-2 items-center justify-center">
       <main className="flex py-6 lg:py-14 pt-4  flex-1 w-full flex-col items-center justify-center text-center md:text-start px-4 sm:mt-0 mt-0">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          Event <br className='lg:hidden'/>
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-2">Glimpses</span>
          </span>
        </h1>
      </main>
					
				</div>
            <div className='my-10 px-4 md:px-10'>
                <div className="relative w-full h-64 overflow-hidden">
                    <div
                        ref={carouselRef}
                        className="carousel flex items-center"
                    >
                        {images.concat(images).map((src, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-64 h-48 md:h-48 px-2"
                            >
                                <img
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full rounded-xl h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
                </div>
            </div>
        </>
    );
};

export default Glimpses;
