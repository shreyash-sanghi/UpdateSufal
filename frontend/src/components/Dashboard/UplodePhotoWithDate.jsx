import {React,useEffect,useState} from "react";
import imageuplode from "./imageuplode.js";
import DashboardNav from "./DashboardNav.jsx";
import { ref, deleteObject,uploadBytes ,getStorage,getDownloadURL} from "firebase/storage"; 
import {v4} from 'uuid';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DotSpinner } from '@uiball/loaders';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
const UplodePhotoWithDate  = ()=>{
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
   const [images, setImages] = useState();
   const [ImageDate, setImageDate] = useState("");
   const [videoData,setVideoData] = useState([{
    Vid:"",
    Videoimage:"",
    ImageDate:"",
    VideoImageName:"",
   }])
   const savevideo = async()=>{
    try {
        const storage = getStorage();
          const image = `${images.name + v4()}`;
          const imgref = ref(storage,`files/${image}`);
          try {
            uploadBytes(imgref,images)
        } catch (error) {
            alert("Profile have been not Uplode...")
            return;
        }
          await axios.post(`https://backendsufal-shreyash-sanghis-projects.vercel.app/set_image_with_date`,{
              ImageDate,
              Image:image,})
            setImages();
            setImageDate("")
        alert("Success..")
    } catch (error) {
        alert(error);
    }
   }
    
   const getImagewithDate = async()=>{
    try {
        const response = await axios.get(`https://backendsufal-shreyash-sanghis-projects.vercel.app/get_image_with_date`)
        if(response.data.result.length >0 ){
            const res = response.data.result;
            res.map((info)=>{
                const storage = getStorage();
          const imgref = ref(storage,`files/${info.Image}`);
          getDownloadURL(imgref).then((url) => { 
            setVideoData((about)=>[
                ...about,{
                    Vid:info._id,
                    ImageDate:info.ImageDate,
                    VideoImageName:info.Image,
                    Videoimage:url
                    }
                ])
            })
            })
        }
    } catch (error) {
        alert("Can not fatch Video...")
    }
   }

   useEffect(()=>{
     getImagewithDate();
   },[])
   console.log(videoData)
    return(
        <div>
        <div className="flex md:flex-row flex-col bg-gray-800">
<DashboardNav/>
  <div className="flex bg-gray-800  w-full lg:w-[98%] min-h-screen flex-col">
  <div className="lg:w-[70%] sm:w-[90%] w-full flex justify-center flex-col items-center mx-auto" >
  <h1 className="text-white font-bold sm:text-xl text-lg lg:text-3xl underline my-10 flex justify-center">Uplode Image with Date </h1>
<div className="flex sm:flex-row flex-col items-center gap-10">
<div>
    {(images===undefined)?(<>
    <div className="items-center flex flex-col mt-10">
        <label className="text-white text-lg">Uplode image</label>
        <div class="extraOutline p-4 w-max bg-whtie m-auto rounded-lg">
        <div class="file_upload p-5 w-[90vw] sm:w-[50vw] lg:w-[25vw] md:relative border-4 border-dotted border-gray-300 rounded-lg" >
            <svg class="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
            <div class="input_field flex flex-col w-max mx-auto text-center">
                <label>
                    <input class="text-sm cursor-pointer w-36 hidden" onChange={(e) => setImages(e.target.files[0])} type="file"  />
                    <div class="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Select</div>
                </label>

                <div class="title text-indigo-500 uppercase">drop files here</div>
            </div>
        </div>
    </div>
    </div>
    </>):(<>
    <div className="w-[90vw] sm:w-[50vw] lg:w-[25vw] flex-col flex items-center justify-center mx-auto mt-10">
        <img className="w-full" src={URL.createObjectURL(images)} ></img>
        <label className="text-white border-2  mt-5 w-full items-center justify-center font-bold cursor-pointer flex py-1">
            <input  onChange={(e) => setImages(e.target.files[0])} type="file" hidden></input>
            Change Thumbnail
            </label>
        </div>
    </>)}
</div>
<div>
<div className="flex mt-10 flex-col items-center justify-center mx-auto w-full sm:w-[30vw]">
   
    <div className=" w-full justify-center mx-auto items-center" >
        <label className="text-white text-lg  my-2">Date</label>
        <input className="flex h-10 pl-1 w-full " placeholder="" type="date" onChange={(e)=>{setImageDate(e.target.value)}}></input>
    </div>

   
</div>
<button onClick={savevideo} className="border-2 w-full px-5 my-10 rounded-lg bg-green-600 font-bold text-white  py-1">Save Video</button>
</div>   
</div>  
</div> 
  
      <div className="w-full h-1 my-10 bg-white"></div>
 <div>
 <h1 className="text-white font-bold sm:text-xl text-lg lg:text-3xl underline my-10 flex justify-center">Image's</h1>
  <div className="flex flex-wrap  gap-5 justify-center">
    {/* {videoData.map((info)=>{
     if(!info.Vid) return null;
     return(
        <>
            <div class="relative bg-white py-6 px-6 rounded-3xl w-80 border border-gray-100 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                
            <img className='size-8' src={info.Videoimage}  alt="" />
            </div>
            <div class="mt-8">
            
                
                <div class="flex space-x-2 text-gray-400 text-sm my-3">
                 
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>{info.ImageDate}</p> 
                </div>
                <div class="border-t-2"></div>
            </div>
        </div>
        </>
     )

    })} */}
         {videoData.map((photo) => {
            if(!photo.Vid) return null;
            console.log(photo)
         return(
            <div className="w-1/4 p-2">
              <img src={photo.Videoimage}  className="w-full" />
            <div className="flex items-center ">
                <p className="text-white mt-2">{photo.ImageDate}</p>
             <button className="text-red-600  align-middle flex justify-center items-center mx-auto mt-2" onClick={async()=>{
             try {
              const con = confirm("You have Confirm to delete...");
              if(con){
                const response = await axios.delete(`https://backendsufal-shreyash-sanghis-projects.vercel.app/delete_photo_with_date/${photo.Vid}`)
                setVideoData(()=>
                   videoData.filter((data)=>data.Vid != photo.Vid )
                )
                const storage = getStorage();
               console.log(photo.VideoImageName)
                const desertRef = ref(storage,`files/${photo.VideoImageName}`);
                await deleteObject(desertRef)
                alert("Success...")
              }
    
             } catch (error) {
              alert("They have some error due to which Photo have been not delete...")
             }
             }}>Delete</button>
             </div>
            </div>
          )})}
  </div>
 </div>
      </div>
      </div>
 
      <ToastContainer/>
        </div>
    )
}

export default UplodePhotoWithDate;