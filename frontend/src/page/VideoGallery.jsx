import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import videoicon from '../assets/videoicon.png'
import { FaLongArrowAltRight } from "react-icons/fa";


const VideoGallery = () => {
  return (
    <>
    <Header></Header>
    <main className="flex lg:py-10 flex-1 w-full flex-col items-center justify-center text-center md:text-start px-4 sm:mt-0 pt-16 ">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
       
Video
          <span className="relative whitespace-nowrap text-pink-700">
           
            <span className="relative ml-4">Gallery</span>
          </span>
        </h1>
      </main>
    <div class="flex items-center justify-center pb-20 pt-10 sm:pt-4">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
       
    <div class="relative bg-white py-6 px-6 rounded-3xl w-80 border border-gray-100 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                
            <img className='size-8' src={videoicon} alt="" />
            </div>
            <div class="mt-8">
                <p class="text-base  font-semibold my-2">App Development Lorem ipsum dolor sit amet.</p>
                
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>26 July 2024</p> 
                </div>
                <div class="border-t-2"></div>

                <div class="flex justify-between">
                    
                     <div class="my-2">
                        <p class="font-semibold text-base mb-2 inline-flex items-center gap-x-2">Watch Now <span className='mt-1'><FaLongArrowAltRight />
                        </span></p>
                        
                    </div>
                </div>
            </div>
        </div>

        
        <div class="relative bg-white py-6 px-6 rounded-3xl w-80 border border-gray-100 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                
            <img className='size-8' src={videoicon} alt="" />
            </div>
            <div class="mt-8">
                <p class="text-base  font-semibold my-2">App Development Lorem ipsum dolor sit amet.</p>
                
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>26 July 2024</p> 
                </div>
                <div class="border-t-2"></div>

                <div class="flex justify-between">
                    
                     <div class="my-2">
                        <p class="font-semibold text-base mb-2 inline-flex items-center gap-x-2">Watch Now <span className='mt-1'><FaLongArrowAltRight />
                        </span></p>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="relative bg-white py-6 px-6 rounded-3xl w-80 border border-gray-100 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                
            <img className='size-8' src={videoicon} alt="" />
            </div>
            <div class="mt-8">
                <p class="text-base  font-semibold my-2">App Development Lorem ipsum dolor sit amet.</p>
                
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>26 July 2024</p> 
                </div>
                <div class="border-t-2"></div>

                <div class="flex justify-between">
                    
                     <div class="my-2">
                        <p class="font-semibold text-base mb-2 inline-flex items-center gap-x-2">Watch Now <span className='mt-1'><FaLongArrowAltRight />
                        </span></p>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="relative bg-white py-6 px-6 rounded-3xl w-80 border border-gray-100 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                
            <img className='size-8' src={videoicon} alt="" />
            </div>
            <div class="mt-8">
                <p class="text-base  font-semibold my-2">App Development Lorem ipsum dolor sit amet.</p>
                
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>26 July 2024</p> 
                </div>
                <div class="border-t-2"></div>

                <div class="flex justify-between">
                    
                     <div class="my-2">
                        <p class="font-semibold text-base mb-2 inline-flex items-center gap-x-2">Watch Now <span className='mt-1'><FaLongArrowAltRight />
                        </span></p>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="relative bg-white py-6 px-6 rounded-3xl w-80 border border-gray-100 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                
            <img className='size-8' src={videoicon} alt="" />
            </div>
            <div class="mt-8">
                <p class="text-base  font-semibold my-2">App Development Lorem ipsum dolor sit amet.</p>
                
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>26 July 2024</p> 
                </div>
                <div class="border-t-2"></div>

                <div class="flex justify-between">
                    
                     <div class="my-2">
                        <p class="font-semibold text-base mb-2 inline-flex items-center gap-x-2">Watch Now <span className='mt-1'><FaLongArrowAltRight />
                        </span></p>
                        
                    </div>
                </div>
            </div>
        </div>

        
        <div class="relative bg-white py-6 px-6 rounded-3xl w-80 border border-gray-100 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                
            <img className='size-8' src={videoicon} alt="" />
            </div>
            <div class="mt-8">
                <p class="text-base  font-semibold my-2">App Development Lorem ipsum dolor sit amet.</p>
                
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>26 July 2024</p> 
                </div>
                <div class="border-t-2"></div>

                <div class="flex justify-between">
                    
                     <div class="my-2">
                        <p class="font-semibold text-base mb-2 inline-flex items-center gap-x-2">Watch Now <span className='mt-1'><FaLongArrowAltRight />
                        </span></p>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="relative bg-white py-6 px-6 rounded-3xl w-80 border border-gray-100 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                
            <img className='size-8' src={videoicon} alt="" />
            </div>
            <div class="mt-8">
                <p class="text-base  font-semibold my-2">App Development Lorem ipsum dolor sit amet.</p>
                
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>26 July 2024</p> 
                </div>
                <div class="border-t-2"></div>

                <div class="flex justify-between">
                    
                     <div class="my-2">
                        <p class="font-semibold text-base mb-2 inline-flex items-center gap-x-2">Watch Now <span className='mt-1'><FaLongArrowAltRight />
                        </span></p>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="relative bg-white py-6 px-6 rounded-3xl w-80 border border-gray-100 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                
            <img className='size-8' src={videoicon} alt="" />
            </div>
            <div class="mt-8">
                <p class="text-base  font-semibold my-2">App Development Lorem ipsum dolor sit amet.</p>
                
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>26 July 2024</p> 
                </div>
                <div class="border-t-2"></div>

                <div class="flex justify-between">
                    
                     <div class="my-2">
                        <p class="font-semibold text-base mb-2 inline-flex items-center gap-x-2">Watch Now <span className='mt-1'><FaLongArrowAltRight />
                        </span></p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <Footer></Footer>
    </>
  )
}

export default VideoGallery