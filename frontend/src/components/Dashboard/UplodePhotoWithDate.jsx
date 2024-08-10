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
   const [images, setImages] = useState([]);
   const [ImageDate, setImageDate] = useState("");

   const [videoData,setVideoData] = useState([{
    Vid:"",
    Videoimage:[],
    ImageDate:"",
   }])

   const savevideo = async()=>{
    try {
        setLoading(true)
        if(ImageDate === undefined ){
            alert("Please Enter Year...")
        }
        else if(images.length <1){
            alert("Please Uploade atlest one Image...")
        }else{
            let arr = [];
            console.log(images)
            images.map(async(info)=>{
                try{
                  for(let i=0;i<info.length;i++){
                    const storage = getStorage();
                    const image = `${info[i].name + v4()}`;
                    const imgref = ref(storage,`files/${image}`);
                    uploadBytes(imgref,info[i])
                    arr.push(image);
                  }
                }catch(error){
                    toast(error)
                }
            })
            await axios.post(`https://backendsufal-shreyash-sanghis-projects.vercel.app/set_image_with_date`,{
                ImageDate,
                Images:arr,})
                setTimeout(()=>{
                    setImages([]);
                    setImageDate()
                    toast("Success..");
                    setVideoData(
                        [{
                            Vid:"",
                            Videoimage:[],
                            ImageDate:"",
                            VideoImageName:[],
                           }]
                    )
                    getImagewithDate();
                    setLoading(false);
                },2000)
            }
        } catch (error) {
        setLoading(false);
        toast(error);
    }
   }
    
   const getImagewithDate = async () => {
    try {
        const response = await axios.get('https://backendsufal-shreyash-sanghis-projects.vercel.app/get_image_with_date');
        if (response.data.result.length > 0) {
            const res = response.data.result;

            for (const info of res) {
                const ImageArr = [];
                const ImageNameArr = [];

                if (info.Images.length >= 1) {
                    // Collect all promises for image URLs
                    const imagePromises = info.Images.map(async (myImage) => {
                        const storage = getStorage();
                        const imgref = ref(storage, `files/${myImage}`);
                        const url = await getDownloadURL(imgref);
                        let result = {url,myImage}
                        ImageArr.push(result);
                    });

                    // Wait for all image URL promises to resolve
                    await Promise.all(imagePromises);

                    // Update state after all images are processed
                    setVideoData((about) => [
                        ...about,
                        {
                            Vid: info._id,
                            ImageDate: info.ImageDate,
                            VideoImageName: ImageNameArr,
                            Videoimage: ImageArr,
                        },
                    ]);
                }
            }
        }
    } catch (error) {
        alert("Cannot fetch Video...");
    }
};

   const handleDelete = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  function arrayToFileList(array) {
    const dataTransfer = new DataTransfer();
    array.forEach(file => {
      dataTransfer.items.add(file);
    });
    return dataTransfer.files;
  }

const handleDelete2 = (objectIndex, fileIndex) => {
    const updatedFilesArray = [...images];
    let updatedObject =  updatedFilesArray[objectIndex]
    const filesArray = Array.from(updatedObject);
    filesArray.splice(fileIndex, 1);
     // Convert the array back to a FileList
     const fileList = arrayToFileList(filesArray);
updatedFilesArray.splice(objectIndex, 1);
updatedFilesArray.push(fileList)
setImages(updatedFilesArray)
  };

   useEffect(()=>{
     getImagewithDate();
   },[])


    return(
        <div>
        <div className="flex md:flex-row flex-col bg-gray-800">
<DashboardNav/>
  <div className="flex bg-gray-800  w-full lg:w-[98%] min-h-screen flex-col">
  <div className="lg:w-[70%] sm:w-[90%] w-full flex justify-center flex-col items-center mx-auto" >
  <h1 className="text-white font-bold sm:text-xl text-lg lg:text-3xl underline my-10 flex justify-center">Uplode Image with Date </h1>
<div className="flex sm:flex-row flex-col items-center gap-10">
<div>
    {/* {(images===undefined)?(<> */}
    <div className="items-center flex flex-col mt-10">
        <label className="text-white text-lg">Uplode image</label>
        <div class="extraOutline p-4 w-max bg-whtie m-auto rounded-lg">
        <div class="file_upload p-5 w-[90vw] sm:w-[50vw] lg:w-[25vw] md:relative border-4 border-dotted border-gray-300 rounded-lg" >
            <svg class="text-indigo-500 w-24 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
            <div class="input_field flex flex-col w-max mx-auto text-center">
                <label>
                    <input class="text-sm cursor-pointer w-36 hidden" onChange={(e) => setImages((info)=>[
            ...info,e.target.files
        ])} type="file" multiple />
                    <div class="text bg-indigo-600 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-indigo-500">Select</div>
                </label>

                <div class="title text-indigo-500 uppercase">drop files here</div>
            </div>
        </div>
    </div>
    </div>
    {/* </>):(<>
    <div className="w-[90vw] sm:w-[50vw] lg:w-[25vw] flex-col flex items-center justify-center mx-auto mt-10">
        <img className="w-full" src={URL.createObjectURL(images)} ></img>
        <label className="text-white border-2  mt-5 w-full items-center justify-center font-bold cursor-pointer flex py-1">
            <input  onChange={(e) => setImages(e.target.files[0])} type="file" hidden></input>
            Change Thumbnail
            </label>
        </div>
    </>)} */}
</div>
<div>
<div className="flex mt-10 flex-col items-center justify-center mx-auto w-[80vw] sm:w-[30vw]">
   
    <div className=" w-full justify-center mx-auto items-
    center" >
        <label className="text-white text-lg  my-2">Year</label>
        <input className="flex h-10 pl-1 w-full " placeholder="Enter Year" type="number" min="1900"
        max="2100" onChange={(e)=>{setImageDate(e.target.value)}}></input>
    </div>

   
</div>
<button onClick={savevideo} className="border-2 w-full px-5 my-10 rounded-lg bg-green-600 font-bold text-white  py-1">Save </button>
</div>   
</div>  
</div> 
<div className="flex flex-wrap ">
        {images.map((image, index) => (
          <div className="flex-wrap mt-10  object-cover  flex justify-evenly  " key={index}>
            {(images[index].length >1)?(<>
            <div className="flex flex-wrap">
            {Object.values(images[index]).map((info,fileIndex)=>{
                return(
                    <div className="flex sm:w-[40vw] md:w-[30vw] xl:w-[20vw]    m-2 flex-col">
                    <img className="w-full" src={URL.createObjectURL(info)} alt={`Image ${index}`}     />
                <button className="font-semibold text-red-500" onClick={() => handleDelete2(index,fileIndex)}>Delete</button>    
                    </div>
                )

            })}
            </div>
            </>):(<>
            <div className="flex sm:w-[40vw] md:w-[30vw] xl:w-[20vw] m-2 flex-col">
            <img src={URL.createObjectURL(image[0])} alt={`Image ${index}`}  />
            <button className="font-semibold text-red-500" onClick={() => handleDelete(index)}>Delete</button>
            </div>
            </>)}
          </div>
        ))}
      </div>
      <div className="w-full h-1 my-10 bg-white"></div>
 <div>
 <h1 className="text-white font-bold sm:text-xl text-lg lg:text-3xl underline my-10 flex justify-center">Image's</h1>
  <div className="flex flex-wrap  gap-5 justify-center">
         {videoData.map((photo) => {
            if(!photo.Vid) return null;
         return(
            <div className="flex flex-col-reverse items-center">
                <div className="flex justify-center gap-5 flex-wrap">
                {photo.Videoimage.map((imgUrl)=>{
                    return(
                        <div className="flex sm:w-1/4 justify-center  flex-col items-center">
                        <img src={imgUrl.url} className="p-2 "  />
                        <button className="text-red-600  align-middle flex justify-center items-center mx-auto mt-2" onClick={async()=>{
                            try {
                             const con = confirm("You have Confirm to delete...");
                             if(con){

                               const response = await axios.post(`https://backendsufal-shreyash-sanghis-projects.vercel.app/delete_photo_with_date/${photo.Vid}`,{
                                ImgName:imgUrl.myImage
                               })
                              if(response.request.status === 202){
                             const storage = getStorage();
                               const desertRef = ref(storage,`files/${imgUrl.myImage}`);
                               await deleteObject(desertRef)
                               alert("Success...")
                              }
  
                               setVideoData([
                                {
                                    Vid:"",
                                    Videoimage:[],
                                    ImageDate:"",
                                   }
                               ])
                               setTimeout(()=>{
                                   getImagewithDate();
                               },1000)
                            //    setVideoData(()=>
                            //     videoData.filter((data)=>data.Vid != photo.Vid )
                            //  )
                             }
                   
                            } catch (error) {
                             alert("They have some error due to which Photo have been not delete...")
                            }
                            }}>Delete</button>
                            </div>
                    )
                })}
                
                </div> 
                <p className="text-white mt-2">{photo.ImageDate}</p>
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