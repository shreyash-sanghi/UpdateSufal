import {React,useEffect,useState} from "react";
import axios from "axios";
import { ref,deleteObject, uploadBytes ,getStorage,getDownloadURL} from "firebase/storage"; 
import '../App.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import sa1 from '../assets/sa1.jpg';
import sa2 from '../assets/sa2.jpg';
import sa3 from '../assets/sa3.jpg';
import sa4 from '../assets/sa4.jpg';
import sa5 from '../assets/sa5.jpg';
import sa6 from '../assets/sa6.jpg';
import sa7 from '../assets/sa7.jpg';

const PhotoGallery = () => {
    const images = [
        { id: 1, url: sa1 },
        { id: 2, url: sa2 },
        { id: 3, url: sa3 },
        { id: 4, url: sa4 },
        { id: 5, url: sa5 },
        { id: 6, url: sa6 },
        { id: 7, url: sa7 },
      ];
      const [myPhotos,setMyPhotos] = useState([]);
      const [loading,setLoading] = useState(true);
      const getMyPhotos = async()=>{
        try {
          const result = await axios.get(`https://backendsufal-shreyash-sanghis-projects.vercel.app/get_my_photo`);

         if(result.data.response != null){
          const photos = result.data.response.Photo;
          const photoData = await Promise.all(
            photos.map(async (photoId) => {
              const storage = getStorage();
              const imgref = ref(storage, `files/${photoId}`);
              const url = await getDownloadURL(imgref);
              return url;
            })
          );
          setMyPhotos(photoData); 
         }
       setLoading(false)
        } catch (error) {
          setLoading(false)
          alert(error);
        }
      }
      useEffect(()=>{
        getMyPhotos();
      },[])
  return (<>
  <Header></Header>
  <main className="flex lg:py-10 flex-1 w-full flex-col items-center justify-center text-center md:text-start px-4 sm:mt-0 pt-16 ">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
       
Photo
          <span className="relative whitespace-nowrap text-pink-700">
           
            <span className="relative ml-4">Gallery</span>
          </span>
        </h1>
      </main>
  {/* <div className='gallery py-10 sm:py-6 md:py-2 px-10 sm:px-16'>
    {(myPhotos.length>0)?(<>
    {myPhotos.map(image => (
      <div key={image.id} className='pics '>
        <img src={image} className='rounded-xl' alt={`Image ${image.id}`} />
      </div>
    ))}
    </>):(<></>)}
  </div> */}
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
  <div className='gallery py-10 sm:py-6 md:py-2 px-10 sm:px-16'>
    {(myPhotos.length>0)?(<>
    {myPhotos.map(image => (
      <div key={image.id} className='pics '>
        <img src={image} className='rounded-xl' alt={`Image ${image.id}`} />
      </div>
    ))}
    </>):(<></>)}
  </div>
  </>)}
  <div className="h-20"></div>
  <Footer></Footer></>
   
  )
}

export default PhotoGallery