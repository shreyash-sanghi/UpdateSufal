  import {React,useEffect,useState} from "react";
  import imageuplode from "./imageuplode.js";
  import DashboardNav from "./DashboardNav.jsx";
  import { ref,deleteObject, uploadBytes ,getStorage,getDownloadURL} from "firebase/storage"; 
  import {v4} from 'uuid';
  import axios from "axios";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { DotSpinner } from '@uiball/loaders';

  import { useNavigate, useParams } from "react-router-dom";
  const AddAndUpdatePhoto  = ()=>{
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

      const [images, setImages] = useState([]);
      const [myPhotos,setMyPhotos] = useState([]);
      const [message, setMessage] = useState('');
    const [link,setlink] = useState([]);

      const handleUpload = async (e) => {
        e.preventDefault();
        let arr = [];
    images.map(async(info)=>{
      try{
        for(let i=0;i<info.length;i++){
          const storage = getStorage();
          const image = `${info[i].name + v4()}`;
          const imgref = ref(storage,`files/${image}`);
          uploadBytes(imgref,info[i])
          arr.push(image);
        }
        const result = await axios.post(`${import.meta.env.VITE_Backend_URL}/uplode_photo`,
        { arr}
        )
        toast("Success...");
        setImages([])
        setTimeout(() => {
          getMyPhotos()
        }, 2000);
        setLoading(false);
      }catch(error){
        setLoading(false);
      toast(error)
      }
    })
  //    setTimeout(() => {
  //      navigate("/event/past_event");
  //    }, 1000);
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

        const getMyPhotos = async()=>{
          try {
            const result = await axios.get(`${import.meta.env.VITE_Backend_URL}/get_my_photo`);
           if(result.data.response != null){
            const photos = result.data.response.Photo;
            const photoData = await Promise.all(
              photos.map(async (photoId) => {
                const storage = getStorage();
                const imgref = ref(storage, `files/${photoId}`);
                const url = await getDownloadURL(imgref);
                return { ImageUrl: url, ImageId: photoId };
              })
            );
            setMyPhotos(photoData); 
           }
         
          } catch (error) {
            console.log(error)
          }
        }
        useEffect(()=>{
          getMyPhotos();
        },[])
        
      return(
          <div>
          <div className="flex md:flex-row flex-col bg-gray-800">
  <DashboardNav/>
    <div className="flex bg-gray-800  w-full lg:w-[98%] min-h-screen flex-col">
    <h1 className="text-white font-bold sm:text-xl text-lg lg:text-3xl underline my-10 flex justify-center">Uplode Photo's</h1>
    <div class="top-0 items-center  justify-between flex-col sm:flex-row w-full flex">
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
      {loading ? (
                      <DotSpinner size={40} speed={0.9} color="white" className="flex justify-center m-auto" />
                    ) : (
                      <div class="extraOutline p-4 w-max bg-whtie m-auto rounded-lg">
                      <div class="file_upload p-5 w-[90vw] sm:w-[50vw] lg:w-[25vw] md:relative border-4 border-dotted border-green-300 rounded-lg" >
                          {/* <svg class="text-green-500 w-28 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg> */}
                          <svg class="text-green-500 w-28 mx-auto mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"/>
              </svg>
              
                          <div class="input_field flex flex-col w-max mx-auto text-center">
                              <label>
                                  <button onClick={handleUpload} class="text bg-green-600 text-xl text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-green-500">Save Image</button>
                              </label>
              
                              {/* <div class="title text-indigo-500 uppercase">drop files here</div> */}
                          </div>
                      </div>
                  </div>
                    )}

      {/* <div className="flex border-2 h-fit px-16 mr-10  sm:text-lg lg:text-xl font-bold bg-green-200  py-3">Save Image</div> */}
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
              {/* {console.log(images[index].length)} */}
              <button className="font-semibold text-red-500" onClick={() => handleDelete(index)}>Delete</button>
              </div>
              </>)}
            </div>
          ))}
        </div>
    
        <div className="w-full h-1 my-10 bg-white"></div>
        {/* <div >
          <h1 className="text-white font-bold sm:text-xl text-lg lg:text-3xl underline flex justify-center">My Photo Gallery</h1>
      {(myPhotos.length>0)?(<>
      {myPhotos.map((info)=>{
        const storage = getStorage();
        const imgref = ref(storage,`files/${info}`);
        getDownloadURL(imgref).then(async(url,index) => {
          console.log(url)
          return(
            <>
          <img src={`${url}`} alt={`with index ${index}`}/>
            </>
          )
        }
    )
      })}
      </>):(<></>)}
        </div>   */}
            <div className="flex flex-col ml-10 flex-wrap   ">
            <h1 className="text-white font-bold sm:text-xl text-lg lg:text-3xl underline my-10 flex justify-center">My Photo's</h1>
<div>
<div className="flex flex-wrap">
          {myPhotos.map((photo, index) =>  (
            <div key={index} className="w-1/4 p-2">
              {console.log(photo)}
              <img src={photo.ImageUrl} alt={`Photo ${index}`} className="w-full" />
              <button className="text-red-600  align-middle flex justify-center items-center mx-auto mt-2" onClick={async()=>{
             try {
              const con = confirm("You have Confirm to delete...");
              if(con){
                const finalResult = [];
                let resultArray = myPhotos.filter((info)=>info.ImageId != photo.ImageId)
               resultArray.map((res)=>{
                finalResult.push(res.ImageId);
               })
                const response = await axios.post(`${import.meta.env.VITE_Backend_URL}/delete_my_photo`,{
                 resultArray:finalResult
                })
                const storage = getStorage();
                const desertRef = ref(storage,`files/${photo.ImageId}`);
                await deleteObject(desertRef)
                alert("Success...")
                 getMyPhotos();
              }
    
             } catch (error) {
              alert("They have some error due to which Photo have been not delete...")
             }
             }}>Delete</button>
            </div>
          ))}
          </div>
          </div>
        </div>
        </div>
        </div>
  
        <ToastContainer/>
          </div>
      )
  }

  export default AddAndUpdatePhoto;