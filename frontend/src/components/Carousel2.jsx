
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import yb1 from '../assets/yearlybanners/yb1.jpg';
import yb2 from '../assets/yearlybanners/yb2.jpg';
import yb3 from '../assets/yearlybanners/yb3.jpg';
import yb4 from '../assets/yearlybanners/yb4.jpg';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Carousel2 = ({ deviceType }) => {
  const items = [
    
    {
      image: yb1,
      text: "Sufal 2018"
    },
    {
      image: yb2,
      text: "Sufal 2019"
    },
    {
      image: yb4,
      text: "Sufal 2020"
    },
    {
     image: yb3,
      text: "Sufal 2021"
    }
  ];

  return (
    <>
    <main className="flex py-6  md:pt-6 mb-4 flex-1 w-full flex-col items-center justify-center text-center md:text-start px-4">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
        वार्षिक 
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">कार्यक्रम </span>
          </span>
        </h1>
      </main>
      <div className="container sm:mx-auto">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false} // autoPlay is set to false to disable automatic sliding
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style mt-4" // Added margin-top to space out the dots
        itemClass="carousel-item-padding-40-px"
      >
        {items.map((item, idx) => (
          <div className='flex justify-center items-center'><div key={idx} className="flex flex-col items-center justify-center h-[36rem] w-full sm:w-72 sm:p-4">
          <img src={item.image} alt={`carousel-img-${idx}`} className="h-full w-full objext-cover rounded-md" />
          <p className="mt-4 bg-pink-700 w-full text-gray-100  text-center mb-10 rounded-xl font-semibold py-1 text-md">{item.text}</p> {/* Adjusted margin-top */}
        </div></div>
          
        ))}
      </Carousel>
    </div>
    </>
    
  );
};

export default Carousel2;
