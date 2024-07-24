import React, { useState,useRef } from 'react';
import DashboardNav from './DashboardNav';
import axios from 'axios';
import User_profile from "../../assets/user_profile.jpg";
import { imageDb } from "../Config.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DotSpinner } from '@uiball/loaders';
import { ref, uploadBytes ,getStorage} from "firebase/storage"; 
import {v4} from 'uuid';
import { useNavigate } from 'react-router-dom';
const MyTeam =()=>{
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [initial,final] = useState({
        Name:"",
        Position:"",
        Gender:"",
        Speciality:"",
        About:"",
        FBId:"",
        InstaId:"",
        Vision:"",
        Number:"",
        Linkdin:""
    })
    const [profile,setProfile] = useState();

     //Achivements
  const [AchivementsInputFields, setAchivementsInputFields] = useState([{ value: '' }]);

  const AchivementsAddField = () => {
    setAchivementsInputFields([...AchivementsInputFields, { value: '' }]);
  };

  const AchivementsInputChange = (index, event) => {
    const values = [...AchivementsInputFields];
    values[index].value = event.target.value;
    setAchivementsInputFields(values);
  };


  const AchivementsRemoveField = (index) => {
    const values = [...AchivementsInputFields];
    values.splice(index, 1);
    setAchivementsInputFields(values);
  };
     //Awards
  const [AwardsInputFields, setAwardsInputFields] = useState([{ value: '' }]);

  const AwardsAddField = () => {
    setAwardsInputFields([...AwardsInputFields, { value: '' }]);
  };

  const AwardsInputChange = (index, event) => {
    const values = [...AwardsInputFields];
    values[index].value = event.target.value;
    setAwardsInputFields(values);
  };


  const AwardsRemoveField = (index) => {
    const values = [...AwardsInputFields];
    values.splice(index, 1);
    setAwardsInputFields(values);
  };
    
    const savedata = async(e)=>{
        e.preventDefault();
        if(profile===null || profile === undefined){
            toast("Please Uplode Profile...")
            return ;
        }
        try {
            setLoading(true)
            const storage = getStorage();
            const image = `${profile.name + v4()}`;
           const imgref = ref(storage,`files/${image}`);
            const {Name,Position,Gender,Speciality,About,FBId,InstaId,Vision,Mission,Number,Linkdin} = initial;
            // console.log(Name,Position,Gender,Speciality,About,FBId,InstaId,Vision,Mission)
           const result = await axios.post("https://backendsufal-shreyash-sanghis-projects.vercel.app/save_team_data",
            {Achivements:AchivementsInputFields,
                Awards:AwardsInputFields,Name,Position,Gender,Speciality,About,FBId,InstaId,Vision,Mission,ProfilImage:image,Number,Linkdin}
           );
           try {
            uploadBytes(imgref,profile)
          } catch (error) {
            toast("Your Profile have not uplode")
            setLoading(false)

          }
         
           toast("Success");
           setLoading(false)

           setTimeout(() => {
               navigate("/my_team")            
           }, 1000);
        } catch (error) {
            toast(error);
        
        }
    }
    const setdata =(e)=>{
     const {name,value} = e.target;
     final((info)=>{
        return{
            ...info,
            [name]:value
        }
     })
    }
    // console.log(URL.createObjectURL(profile))
    // URL.createObjectURL(e.data.urlOrBold)
    return(
        <>
        <section class="flex md:flex-row flex-col my-auto bg-gray-800 dark:bg-gray-900">
            <DashboardNav/>
    <div class="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
        <div
            class="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl rounded-xl h-fit mt-8 dark:bg-gray-100"
            >
            {/* <!--  --> */}
            <div class=" flex flex-col justify-between w-full ">
                <div  method='POST'>
                    {/* <!-- Cover Image --> */}
                    <div
                        class="w-full rounded-sm bg-cover bg-center bg-no-repeat items-center">
                        {/* <!-- Profile Image -->{console.log(URL.createObjectURL(profile))} */}
                        {(profile === undefined) ? (<>
                            <div
                            class={`mx-auto flex justify-center w-[130px] h-[130px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat`}
                            style={{ backgroundImage: `url(${User_profile})` }}                       
                            >
                          <a href="#">       
              </a>
                            <div class="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">

                                <input onChange={(e)=>setProfile(e.target.files[0])} type="file" name="profile" id="upload_profile" hidden />

                                <label for="upload_profile">
                                        <svg data-slot="icon" class="w-6 h-5 text-blue-700" fill="none"
                                            stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                            </path>
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                            </path>
                                        </svg>
                                    </label>
                            </div>
                        </div>                </>) : (<>
                            <div
                            class={`mx-auto flex justify-center w-[130px] h-[130px] bg-blue-300/20 rounded-full bg-cover bg-center bg-no-repeat`}
                            style={{ backgroundImage: `url(${URL.createObjectURL(profile)})` }}                       
                            >
                          <a href="#">
        
              </a>
                            <div class="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">

                                <input onChange={(e)=>setProfile(e.target.files[0])} type="file" name="profile" id="upload_profile" hidden />

                                <label for="upload_profile">
                                        <svg data-slot="icon" class="w-6 h-5 text-blue-700" fill="none"
                                            stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                            </path>
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                            </path>
                                        </svg>
                                    </label>
                            </div>
                        </div>                </>)}
                   
                        <div class="flex justify-end">
                            {/* <!--  --> */}
                            {/* <input type="file" name="profile" id="upload_cover" hidden required/> */}

                        </div>
                    </div>
                    <h2 class="text-center mt-1 font-semibold text-gray-300">Upload Profile and Cover Image
                    </h2>
                    <div class="flex lg:flex-row md:flex-col items-center sm:flex-col xs:flex-col gap-2 justify-center w-full">
                        <div class="w-full  mb-4 mt-6">
                            <label for="" class="mb-2  font-semibold text-gray-300">Full Name</label>
                            <input type="text"
                            name='Name'
                            onChange={setdata}
                                    class="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="First Name"/>
                        </div>
                        <div class="w-full  mb-4 lg:mt-6">
                            <label for="" class=" mb-2  font-semibold text-gray-300">Position</label>
                            <input type="text"
                                  name='Position'
                                  onChange={setdata}
                                    class="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Position"/>
                        </div>
                    </div>
                    <div class="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                        <div class="w-full">
                            <h3 class="font-semibold text-gray-300 mb-2">Sex</h3>
                            <select
                            onChange={setdata} name='Gender'
                                    class="w-full text-grey border-2 rounded-lg p-2 pl-2 pr-2 dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800">
                                    <option disabled value="">Select Sex</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                        </div>
                        <div class="w-full">
                            <h3 class="text-gray-300 mb-2">Speciality</h3>
                            <input type="text"
                            onChange={setdata} name='Speciality'
                                    class="text-grey p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"/>
                        </div>
                    </div>

                 
                    <div class="flex lg:flex-row md:flex-col items-center sm:flex-col xs:flex-col gap-2 justify-center w-full">
                        <div class="w-full  mb-4 mt-6">
                            <label for="" class="mb-2  font-semibold text-gray-300">Vision</label>
                            <input type="text"
                            onChange={setdata}
                            name='Vision'
                                    class="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Vision"/>
                        </div>
                        <div class="w-full  mb-4 lg:mt-6">
                            <label for="" class=" mb-2  font-semibold text-gray-300">Mission</label>
                            <input type="text"
                            name='Mission'
                            onChange={setdata}
                                    class="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Last Name"/>
                        </div>
                    </div>
                    <div class="flex lg:flex-row md:flex-col items-center sm:flex-col xs:flex-col gap-2 justify-center w-full">
                        <div class="w-full  mb-4 mt-6">
                            <label for="" class="mb-2  font-semibold text-gray-300">Mobile Number</label>
                            <input type="number"
                            onChange={setdata}
                            name='Number'
                                    class="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="1234567890"/>
                        </div>
                        <div class="w-full  mb-4 lg:mt-6">
                            <label for="" class=" mb-2  font-semibold text-gray-300">Linkdin Id</label>
                            <input type="text"
                            name='Linkdin'
                            onChange={setdata}
                                    class="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Linkdin"/>
                        </div>
                    </div>
                    <div class="flex lg:flex-row md:flex-col items-center sm:flex-col xs:flex-col gap-2 justify-center w-full">
                    
                    <div class="flex flex-col items-center sm:flex-col xs:flex-col justify-center w-full">
                            <div class="w-full  mb-4 mt-3">
                            <label for="" class="mb-2  font-semibold text-gray-300">Insta Link</label>
                            <input type="text"
                            name='InstaId'
                            onChange={setdata}
                                    class="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Insta Link"/>
                        </div>
                        <div class="w-full  ">
                            <label for="" class=" mb-2  font-semibold text-gray-300">Facebook Link</label>
                            <input type="text"
                                 onChange={setdata}
                                 name='FBId'
                                    class="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Facebook Link"/>
                        </div>
                        </div>
                        <div class="flex flex-col mt-2 sm:flex-col xs:flex-col gap-2  w-full">
                        <label for="" class="  font-semibold text-gray-300">About </label>
                            <textarea type="text"
                            onChange={setdata}
                            name='About'
                                    class="mt-2 p-1 h-36 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                    placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col gap-5'>
                    <div class="flex lg:w-1/2 flex-col sm:flex-col xs:flex-col gap-2 mt-5 ">
                    
                            <label for="" class="font-semibold text-gray-300">Achivements</label>
                    <div class="flex flex-col  sm:flex-col xs:flex-col justify-center w-full">
                            <div class="w-full  mb-4 mt-2">
                                        {AchivementsInputFields.map((AchivementsInputField, index) => (
        <div className="flex flex-col" key={index}>
          <input
          class="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
            type="text"
            value={AchivementsInputField.value}
            onChange={(event) => AchivementsInputChange(index, event)}
          />
           <button className="text-lg cursor-pointer  rounded-full h-fit font-bold" onClick={() => AchivementsRemoveField(index)}>
           <svg class="w-6 h-6 text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
</svg>

           </button>
        </div>
      ))}
                        </div>
                        <div className="flex gap-3 items-center">

                        <button className="flex justify-start  rounded-full text-lg font-bold" onClick={AchivementsAddField}>
                        <svg class="w-6 h-6 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
</svg>

                            </button>

                            <h1 className='text-white'>Add Achivements</h1>
                            </div>
                        </div>
            

                    </div>
                    <div class="flex lg:w-1/2 flex-col sm:flex-col xs:flex-col gap-2 mt-5 ">
                    
                            <label for="" class="font-semibold text-gray-300">Awards</label>
                    <div class="flex flex-col  sm:flex-col xs:flex-col justify-center w-full">
                            <div class="w-full  mb-4 mt-2">
                                        {AwardsInputFields.map((AwardsInputField, index) => (
        <div className="flex flex-col" key={index}>
          <input
          class="mt-2 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
            type="text"
            value={AwardsInputField.value}
            onChange={(event) => AwardsInputChange(index, event)}
          />
           <button className="text-lg cursor-pointer  rounded-full h-fit font-bold" onClick={() => AwardsRemoveField(index)}>
           <svg class="w-6 h-6 text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
</svg>

           </button>
        </div>
      ))}
                        </div>
                        <div className="flex gap-3 items-center">

                        <button className="flex justify-start  rounded-full text-lg font-bold" onClick={AwardsAddField}>
                        <svg class="w-6 h-6 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z" clip-rule="evenodd"/>
</svg>

                            </button>

                            <h1 className='text-white'>Add Awards</h1>
                            </div>
                        </div>
            

                    </div>
                    </div>
                    <div class="w-fit px-10 rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                        <button onClick={savedata} type="submit" class="w-full p-2">
                        {loading ? (
                     <DotSpinner size={40} speed={0.9} color="white" className="flex justify-center m-auto" />
                  ) : (
                     "Submit"
                  )}
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<ToastContainer/>
        </>
    )
}

export default MyTeam;
