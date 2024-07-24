import React, { useEffect, useState } from 'react';

import {ref,uploadBytes,getStorage ,getDownloadURL,deleteObject} from "firebase/storage";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MdDateRange } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMoreTime } from "react-icons/md";
import { GiStarShuriken } from "react-icons/gi";
import { BsAward } from "react-icons/bs";





const EventDetails = () => {
  const [images, setImages] = useState([]);
  const imageUrls = [
    'https://static.vecteezy.com/system/resources/thumbnails/028/626/672/small_2x/hd-image-ai-generative-free-photo.jpeg',
    'https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg',
    
    'https://images8.alphacoders.com/133/thumb-350-1337841.png',
    
  ];
  
  const {eid} = useParams();
  //Show Event data
const [initial, final] = useState({
eid: "",
EventName: "",
Place: "",
Time: "",
EDate: "",
EventBanner: "",
Discreption: "",
ImageName: "",
ChiefGuest:[],
})
const [EventImage,setEventImage] = useState([]);
const getdata = async () => {
try {
  const data = await axios.get(`https://backendsufal-shreyash-sanghis-projects.vercel.app/get_past_event_data_byId/${eid}`);
  const result = data.data.result;
  console.log(result)
    const storage = getStorage();
    const imgref = ref(storage,`files/${result.EventBanner}`);
    getDownloadURL(imgref).then(async(url1) => {
      final({
          eid: result._id,
          EventName: result.EventName,
          Place: result.Place,
          Time: result.Time,
          EDate: result.EDate,
         EventBanner: url1,
        Discreption: result.Discreption, 
       ImageName: result.EventBanner, 
       ChiefGuest: result.ChiefGuest, 
        }
      )
  })
 console.log(result.EventImage[0])
  result.EventImage.map((about)=>{
    console.log(about)
    const storage = getStorage();
    const imgref = ref(storage,`files/${about}`);
    getDownloadURL(imgref).then(async(url2) => {
      console.log(url2)
       setEventImage((setdata)=>[
        ...setdata,url2
       ])
    })
  })
} catch (error) {
  console.log(error);
  alert(error);
}
}
// console.log(initial.EventBanner)
// console.log(EventImage)
//Use Effect
useEffect(() => {
getdata();
}, [])
  

  return (
    <>
      <Header />
      <section className="text-gray-600">
        <div className="container mx-auto flex px-5 py-10 lg:py-16 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <main className="overflow-x-hidden lg:py-10 z-10 w-full flex-col items-center justify-start sm:mt-0 py-10 ">
        <h1 className="mx-auto max-w-4xl text-gray-800 lg:text-start font-display text-5xl font-bold tracking-normal sm:text-5xl">
          {initial.EventName} <br className='' />
          {/* <span className="relative whitespace-wrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="text-4xl md:text-5xl relative">Photography</span>
          </span> */}
        </h1>
      </main>
            <p className="mb-8 text-start">
              <span className="font-bold">Event Description: </span>{initial.Discreption}
            </p>
            <div className='flex justify-start w-full'>
            <div className=''>
              <div className='flex items-center justify-start gap-x-2'>
              <div className='inline-flex items-center gap-x-2 font-bold'>Date <MdDateRange /> :</div>
              <h1>{initial.EDate}</h1>

              </div>
              <div className='flex items-center justify-start gap-x-2'>
              <div className='inline-flex items-center gap-x-2 font-bold'>Time <IoIosTime /> :</div>
              <h1>{initial.Time}</h1>

              </div>
              <div className='flex items-center justify-start gap-x-2'>
              <div className='inline-flex items-center gap-x-2 font-bold'>Venue <FaLocationDot /> :</div>
              <h1>{initial.Place}</h1>

              </div>
              <div className='flex items-center justify-start gap-x-2'>
              <div className='inline-flex items-center gap-x-2 font-bold'>Duration <MdOutlineMoreTime/> :</div>
              <h1>2 Hours</h1>

              </div>
            </div>
            </div>
           
            
            
            <div className='flex flex-col justify-start w-full my-4 text-start font-semibold'>
              <h1 className="font-bold bg-pink-500 px-4 py-1 rounded-md mb-2 text-lg text-white">
                Chief Guests:
              </h1>
              {initial.ChiefGuest.map((info)=>{
                if(info=== null || info === undefined) return null;
              return(
                <>
                              <h2 className='pl-4 inline-flex items-center gap-x-2'><BsAward />
                              {info.value}</h2>
                </>
              )
              })}



            </div>
          </div>
          <div className="lg:max-w-lg  lg:w-full -mt-14 sm:-mt-0 md:w-1/2 w-5/6">
            <img
              className="object-cover h-72 w-48 sm:h-[60%] sm:w-[40%] object-center rounded"
              alt="event-banner"
              src={initial.EventBanner}
            />
          </div>
        </div>
      </section>
      <main className="flex lg:py-10 z-10 flex-1 w-full flex-col items-center justify-center text-center md:text-start  sm:mt-0 py-16 ">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          Event
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"                                                                                  
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Clicks</span>
          </span>
        </h1>
      </main>
      <section className="px-4 py-10 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {EventImage.map((src, index) =>{
              return(
                         <div key={index} className="w-full h-64 overflow-hidden">
                <img
                  src={src}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              )
            }
            
            // (
            //   <div key={index} className="w-full h-64 overflow-hidden">
            //     <img
            //       src={src}
            //       alt={`Event ${index + 1}`}
            //       className="w-full h-full object-cover rounded-lg"
            //     />
            //   </div>
            // )
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EventDetails;
