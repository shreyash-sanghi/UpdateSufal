import {React,useEffect,useState} from "react";
import { ref, getStorage,getDownloadURL} from "firebase/storage"; 
import axios from "axios";
import Header from '../components/Header'
import Footer from '../components/Footer'
import videoicon from '../assets/videoicon.png'
import { FaLongArrowAltRight } from "react-icons/fa";


const VideoGallery = () => {
    const [videoData,setVideoData] = useState([{
        Vid:"",
        VideoUrl:"",
        VideoDate:"",
        Videoimage:"",
        AboutVideo:"",
       }])
       const [loading,setLoading] = useState(true);
    const getMyVideo = async()=>{
        try {
            const response = await axios.get(`https://backendsufal-shreyash-sanghis-projects.vercel.app/get_my_video`)
            if(response.data.result.length >0 ){
                const res = response.data.result;
                res.map((info)=>{
                    const storage = getStorage();
              const imgref = ref(storage,`files/${info.Videoimage}`);
              getDownloadURL(imgref).then((url) => { 
                setVideoData((about)=>[
                    ...about,{
                        Vid:info._id,
                        VideoUrl:info.VideoUrl,
                        VideoDate:info.VideoDate,
                        AboutVideo:info.AboutVideo,
                        Videoimage:url
                        }
                    ])
                })
                })
            }
setLoading(false)
        } catch (error) {
            setLoading(false)
            alert("Can not fatch Video...")
        }
       }
    
       useEffect(()=>{
         getMyVideo();
       },[])


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
  
    {(loading)?(<>
    <div className="flex flex-col gap-10"> 
<div className=" flex flex-wrap mt-10 justify-evenly ">
<div role="status" class="flex items-center justify-center h-56 w-[40%] sm:w-[20%] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
    <svg class="w-10 h-10 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
  </svg>
    <span class="sr-only">Loading...</span>
</div>
<div role="status" class="flex items-center justify-center h-56 w-[40%] sm:w-[20%] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
    <svg class="w-10 h-10 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
  </svg>
    <span class="sr-only">Loading...</span>
</div>
<div role="status" class="hidden sm:flex items-center justify-center h-56 w-[40%] sm:w-[20%] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
    <svg class="w-10 h-10 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
  </svg>
    <span class="sr-only">Loading...</span>
</div>
<div role="status" class="hidden sm:flex items-center justify-center h-56 w-[40%] sm:w-[20%] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
    <svg class="w-10 h-10 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
  </svg>
    <span class="sr-only">Loading...</span>
</div>

</div>
<div className=" flex flex-wrap mt-10 justify-evenly ">
<div role="status" class="flex items-center justify-center h-56 w-[40%] sm:w-[20%] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
    <svg class="w-10 h-10 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
  </svg>
    <span class="sr-only">Loading...</span>
</div>
<div role="status" class="flex items-center justify-center h-56 w-[40%] sm:w-[20%] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
    <svg class="w-10 h-10 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
  </svg>
    <span class="sr-only">Loading...</span>
</div>
<div role="status" class="hidden sm:flex items-center justify-center h-56 w-[40%] sm:w-[20%] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
    <svg class="w-10 h-10 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
  </svg>
    <span class="sr-only">Loading...</span>
</div>
<div role="status" class="hidden sm:flex items-center justify-center h-56 w-[40%] sm:w-[20%] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
    <svg class="w-10 h-10 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
  </svg>
    <span class="sr-only">Loading...</span>
</div>

</div>
</div> 
      </>):(<>
        <div class="flex items-center w-full justify-center pb-20 pt-10 sm:pt-4">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
       {videoData.map((info)=>{
        if(!info.Vid) return null;
        return(
            <div class="relative bg-white py-6 px-6 rounded-3xl w-80 border border-gray-100 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full shadow-xl bg-pink-300 left-4 -top-6">
                
            <img className=' rounded-full size-14' src={info.Videoimage} alt="" />
            </div>
            <div class="mt-8">
                <p class="text-base  font-semibold my-2">{info.AboutVideo}</p>
                
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>{info.VideoDate}</p> 
                </div>
                <div class="border-t-2"></div>

                <div class="flex justify-between">
                    
                     <div class="my-2">
                        <a href={info.VideoUrl} target="_main" class="font-semibold text-base mb-2 inline-flex items-center gap-x-2">Watch Now <span className='mt-1'><FaLongArrowAltRight />
                        </span></a>
                        
                    </div>
                </div>
            </div>
        </div>
        )
      })}
   

    </div>
      </div>
    </>)}
    <Footer></Footer>
    </>
  )
}

export default VideoGallery