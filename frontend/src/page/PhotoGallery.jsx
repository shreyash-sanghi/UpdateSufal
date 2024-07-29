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
       
        } catch (error) {
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
  <div className='gallery py-10 sm:py-6 md:py-2 px-10 sm:px-16'>
    {(myPhotos.length>0)?(<>
    {myPhotos.map(image => (
      <div key={image.id} className='pics '>
        <img src={image} className='rounded-xl' alt={`Image ${image.id}`} />
      </div>
    ))}
    </>):(<></>)}
  </div>
  <Footer></Footer></>
   
  )
}

export default PhotoGallery