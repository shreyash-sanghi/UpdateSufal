import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import team3 from '../assets/team-3.png';
import {Link} from 'react-router-dom';
import award1 from '../assets/award1.jpg';
import award2 from '../assets/award2.jpg';
import triathlete from '../assets/triathlete.png'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../components/ui/carousel';
import { BsFacebook, BsPeopleFill } from 'react-icons/bs';

import {
	IoLogoInstagram,
	IoLogoLinkedin,
	IoPlayOutline,
} from 'react-icons/io5';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import video1 from '../assets/mothers.mp4';
// import TeamCard from '../components/TeamCard';

const TeamCard = ({
	teamMemberName,
	profession,
	profileImage,
	socialLinks,
}) => {
	return (
		<div className="w-full  rounded-2xl   border border-[#16191e29] flex flex-col items-center justify-center shadow-md select-none">
			<div className="w-full h-auto flex items-center justify-center mt-4">
				<img
					src={profileImage}
				
					className="w-full rounded-xl px-2 h-60 object-cover"
					draggable="false"
				/>
			</div>
			<div className="px-4 py-3 w-full flex flex-col text-center  space-y-1.5">
				<h1 className="text-lg bg-pink-600 px-4 text-white rounded-xl mt-2 py-1.5 font-semibold">{teamMemberName}</h1>
				<h6 className="font-medium text-[#6d6d6d]">{profession}</h6>
				<div className="flex flex-wrap justify-center">
					<div className="w-fit p-2 flex gap-3">
						{socialLinks?.map((link) => (
							<Link
								to={link.href}
								key={link.name}
								className="rounded-full bg-pink-100 p-2 hover:bg-pink-200"
							>
								{link.icon}
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};


const PriyaMam = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const CustomArrow = ({ className, style, onClick, direction }) => (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'white',
        borderRadius: '',
        zIndex: 2,
      }}
      onClick={onClick}
    >
      {direction === 'next' ? (
        <svg
 
          viewBox="0 0 24 24"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.59 16.34L13.17 12 8.59 7.66 10 6.25l6 6-6 6z" />
        </svg>
      ) : (
        <svg
         
          viewBox="0 0 24 24"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.41 7.66L10.83 12l4.58 4.34L14 17.75l-6-6 6-6z" />
        </svg>
      )}
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  

  const videos = [video1, video1, video1, video1];

  return (
    <>
      <Header />

      <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-20 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className=" size-40 md:size-64 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img src={team3} alt="" />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Dr. Priya Bhave Chittawar</h2>
                  <div className="w-24 h-1 bg-pink-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">Consultant and Head, Department of Reproductive Medicine, Bansal Hospital</p>
                  <div className='flex mb-2 mt-6 md:hidden'>
		<img src="https://www.pngitem.com/pimgs/m/349-3495154_gynaecology-obstetrics-icon-png-download-gynaecology-obstetrics-icon.png" className='size-10 rounded-full' alt="" />
        <img src="  https://cdn.pixabay.com/photo/2017/05/15/23/47/stethoscope-icon-2316460_1280.png" className='size-10 rounded-full ' alt="" />

        <img src="https://images.vexels.com/content/130266/preview/female-athlete-circle-icon-52e338.png" className='size-10 rounded-full' alt="" />
		<img src="https://cdn-icons-png.freepik.com/512/172/172011.png" className='size-10 rounded-full ' alt="" />
		<img src="https://cdn-icons-png.flaticon.com/512/6592/6592099.png" className='size-10 rounded-full ' alt="" />
        <img src="https://cdn-icons-png.flaticon.com/512/8962/8962780.png" className='size-10 rounded-full ' alt="" />
		<img src="https://cdn-icons-png.flaticon.com/512/1312/1312585.png" className='size-10 rounded-full ' alt="" />
		
	  </div>
                </div>
              </div>
              <div className="sm:w-2/3 flex flex-col justify-center sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <div className=' mb-2 mt-6 hidden md:flex'>
		<img src="https://www.pngitem.com/pimgs/m/349-3495154_gynaecology-obstetrics-icon-png-download-gynaecology-obstetrics-icon.png" className='size-10 rounded-full' alt="" />
		<img src="https://images.vexels.com/content/130266/preview/female-athlete-circle-icon-52e338.png" className='size-10 rounded-full' alt="" />
		<img src="https://cdn-icons-png.flaticon.com/512/8962/8962780.png" className='size-10 rounded-full ' alt="" />
		<img src="https://cdn-icons-png.flaticon.com/512/1312/1312585.png" className='size-10 rounded-full ' alt="" />
		<img src="  https://cdn.pixabay.com/photo/2017/05/15/23/47/stethoscope-icon-2316460_1280.png" className='size-10 rounded-full ' alt="" />
		<img src="https://cdn-icons-png.freepik.com/512/172/172011.png" className='size-10 rounded-full ' alt="" />
		<img src="https://cdn-icons-png.flaticon.com/512/6592/6592099.png" className='size-10 rounded-full ' alt="" />
	  </div>
                <p className="leading-relaxed text-sm mb-4">
                  {isReadMore
                    ? 'Dr. Priya Bhave Chittawar stands as an illustrious beacon of hope, a revered fertility specialist, and a trailblazing gynaecological endoscopic surgeon at the esteemed Bansal Hospital in the heart of Bhopal. With unparalleled expertise and unwavering dedication, she orchestrates miracles, ushering in new beginnings and fulfilling dreams.'
                    : 'Dr. Priya Bhave Chittawar stands as an illustrious beacon of hope, a revered fertility specialist, and a trailblazing gynaecological endoscopic surgeon at the esteemed Bansal Hospital in the heart of Bhopal. With unparalleled expertise and unwavering dedication, she orchestrates miracles, ushering in new beginnings and fulfilling dreams.'}
                </p>
                <button onClick={toggleReadMore} className="text-indigo-500 inline-flex items-center justify-center md:justify-start">
                  {isReadMore ? 'Read Less' : 'Read More'}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
				id="team"
				className="w-full max-w-7xl mx-auto px-3 pb-16 selection:bg-[#0a755862]"
			>
				<div className="w-full flex items-center justify-center gap-5 px-3 pb-5">
				<main className="flex py-6  md:pt-6   flex-1 w-full flex-col items-center justify-center text-center md:text-start px-4 sm:mt-0 mt-0">
        <h1 className="mx-auto max-w-4xl font-display mt-14 text-4xl font-bold tracking-normal sm:text-5xl">
          Our <br className='md:hidden' />
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Highlights</span>
          </span>
        </h1>
      </main>
				</div>
				<div className="w-full flex items-center justify-center">
					<Carousel
						orientation="horizontal"
						opts={{
							align: 'start',
							loop: true,
						}}
					>
						<CarouselContent className=" w-[25rem] overflow-hidden md:w-[44rem] lg:w-full	 ml-1 md:ml-0 py-5">
							
							<CarouselItem className="px-5 basic-0  md:basis-1/2 lg:basis-1/3">
								<TeamCard
									teamMemberName="Ye Bharat Ki Baat Hai"
									
									profileImage={award1}
									
								/>
							</CarouselItem>
                            <CarouselItem className="px-5 basic-0  md:basis-1/2 lg:basis-1/3">
								<TeamCard
									teamMemberName="With Dr. Nirmala Sitaraman"
									
									profileImage={award2}
									
								/>
							</CarouselItem>
                            <CarouselItem className="px-5 basic-0  md:basis-1/2 lg:basis-1/3">
								<TeamCard
									teamMemberName="Ye Bharat Ki Baat Hai"
									
									profileImage={award1}
									
								/>
							</CarouselItem>
							
						</CarouselContent>
						<CarouselPrevious className="ml-[3.2rem] sm:ml-12 md:ml-[4rem]		 	md:-bottom-[2rem]" />
						<CarouselNext className="mr-10 sm:mr-12 md:-mr-[3rem] md:right-16	 md:-bottom-[2rem]" />
					</Carousel>
				</div>
				
			</div>
	

<section class=" body-font">
  <div class="container px-5 py-0 md:py-20 mx-auto">
    <div class="text-center mb-8">
    <main className="flex pt-6  md:pt-6   flex-1 w-full flex-col items-center justify-center text-center md:text-start px-4 sm:mt-0 mt-0">
        <h1 className="mx-auto max-w-4xl font-display mt-14 text-4xl font-bold tracking-normal sm:text-5xl">
          Important <br className='md:hidden' />
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Positions</span>
          </span>
        </h1>
      </main>
    </div>
    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-blue-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Managing committee member IAGE 23-24 & 24-26</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-blue-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Secretary MP chapter IFS</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-blue-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">FOGSI recognised trainer</span>
        </div>
      </div>
      
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap justify-center -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg sm:h-[36rem] overflow-hidden">
          <img alt="content" class="object-cover sm:object-contain sm:h- object-center h-full w-full" src={triathlete}/>
        </div>
      
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Ironman Triathlete Award</h2>
        <div className=' mb-2 mt-6 flex justify-center'>
		<img src="https://st5.depositphotos.com/2274151/66418/v/450/depositphotos_664189602-stock-illustration-cyclist-road-cyclist-hand-drawn.jpg" className='size-10 rounded-full' alt="" />
		<img src="https://images.vexels.com/content/130266/preview/female-athlete-circle-icon-52e338.png" className='size-10 rounded-full ' alt="" />
		<img src="https://banner2.cleanpng.com/20180227/viq/kisspng-swimming-symbol-logo-swimming-dark-symbol-5a95ee1c8372a1.3246650615197752605384.jpg" className='size-10 rounded-full ' alt="" />
		
	  </div>
        <p class="leading-tight text-base">An Ironman triathlete competes in a long-distance triathlon race that consists of a 2.4-mile swim, a 112-mile bike ride, and a 26.22-mile run, for a total of 140.6 miles (226.3 km). The World Triathlon Corporation (WTC) organizes the Ironman Triathlon series.</p>
      </div>
      
    </div>
  </div>
</section>


<main className="flex pt-6   flex-1 w-full flex-col items-center justify-center text-center md:text-start px-4 sm:mt-0 mt-0">
        <h1 className="mx-auto max-w-4xl font-display mt-0 text-4xl font-bold tracking-normal md:mb-10 mb-4 sm:text-5xl">
          Shorts <br className='md:hidden' />
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Spotlight</span>
          </span>
        </h1>
      </main>
<div className="container mx-auto my-8">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="flex justify-center px-2 items-center">
            <video
              className="w-full rounded-xl"
              style={{ maxHeight: '50vh' }}
              controls
              src={video}
              type="video/mp4"
            />
          </div>
        ))}
      </Slider>
    </div>


    <div class="container mx-auto">
<div class="container text-4xl px-5 md:text-start text-center font-semibold   pt-14 pb-8 mx-auto">
        <h1 className='font-semibold'><span className="text-pink-700 font-semibold">Proud</span> Awards</h1>
    </div>
  <div class="grid grid-cols-2 pb-10 justify-center text-center place-content-center items-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">

    <div class="border border-gray-400 w-full h-36 border-opacity-50 rounded-lg flex flex-col justify-center p-4">
    <img src='https://www.pngall.com/wp-content/uploads/5/Star-Award-PNG-Image.png' className='size-14 self-center' />

        
          <h2 class="text-xs text-gray-700 font-medium title-font lg:mt-4 mt-3 ">Dr. Pankaj Tawar Gold Medal at IFS 2022</h2>
    </div>
    
    <div class="border border-gray-400 w-full h-36 border-opacity-50 rounded-lg flex flex-col justify-center p-4">
    <img src='https://i.pinimg.com/736x/2c/45/e5/2c45e5329ce6ac26bcae43d4071dfbc4.jpg' className='size-14 self-center' />

        
          <h2 class="text-xs text-gray-700 font-medium title-font lg:mt-4 mt-3 ">Ironman Triathlete Award</h2>
    </div>
    <div class="border border-gray-400 w-full h-36 border-opacity-50 rounded-lg flex flex-col justify-center p-4">
    <img src='https://images-cdn.ubuy.co.in/633ffe05bc76ab645c686bc1-bless-this-child-crib-medal-girl-crib.jpg' className='size-14 self-center' />

        
          <h2 class="text-xs text-gray-700 font-medium title-font lg:mt-4 mt-3 ">Ironman Baby Maker of India Award</h2>
    </div>
    <div class="border border-gray-400 w-full h-36 border-opacity-50 rounded-lg flex flex-col justify-center p-4">
    <img src='https://logowik.com/content/uploads/images/tedx4450.jpg' className='size-14 self-center' />

        
          <h2 class="text-xs text-gray-700 font-medium title-font lg:mt-4 mt-3 ">Tedx Speaker Award</h2>
    </div>
    

   

  </div>
</div>

<section class="text-gray-600 body-font">
  <div class="container px-5 pt-10 pb-20 md:py-24 mx-auto">
    
    <div class="flex justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      
      <div class="p-4 md:w-1/3 flex flex-col justify-center text-center items-center">
        <div class="size-40 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
         <img className='' src="data:image/png;base64,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" alt="" />
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Our Channel</h2>
          <p class="text-base">Dr. Chittawar's commitment extends beyond clinical practice, as she engages with a global audience through her YouTube channel, discussing various aspects of reproductive health and the importance of resilience in both professional and personal life.</p>
          <a class="mt-3 text-gray-100 inline-flex items-center bg-red-600 w-full py-2 rounded-xl text-center justify-center" href='https://www.youtube.com/@DrPriyaBhaveChittawar' target='blank'>Visit Channel
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    <Footer></Footer>
    </>
  )
}

export default PriyaMam