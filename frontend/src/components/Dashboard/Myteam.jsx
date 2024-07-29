import React, { useEffect, useState } from 'react';
import DashboardNav from "./DashboardNav";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {ref,getStorage ,getDownloadURL,deleteObject} from "firebase/storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Myteam =()=>{
  const navigate = useNavigate();
const [initila,final] = useState([
  {
    tid:"",
    Name:"",
    Position:"",
    DOB:"",
    About:"",
    Vision:"",
    Mission:"",
    ProfilImage:"",
    ImageName:""
}
])
const getdata = async()=>{
  try{
  const result = await axios.get(`https://backendsufal-shreyash-sanghis-projects.vercel.app/get_team_data`);
    const data = result.data.result;
    data.map((response)=>{
      const storage = getStorage();
      const imgref = ref(storage,`files/${response.ProfilImage}`);
      getDownloadURL(imgref).then((url) => { 
      final((info)=>[
          ...info,{
            tid:response._id,
            Name:response.Name,
            Position:response.Position,
            DOB:response.DOB,
            About:response.About,
            Vision:response.Vision,
            Mission:response.Mission,        
            ProfilImage:url,        
            ImageName:response.ProfilImage,        
         }
      ])
    })
    })

  }catch(error){
    toast(error.response.data.error);
  }
}
useEffect(()=>{
getdata();
},[])
    return(
        <>
              <div className="flex md:flex-row flex-col min-h-screen bg-gray-800">
        <DashboardNav />
        <div class="font-sans bg-grey-lighter flex flex-col w-full">
          <div class=" dark:text-white text-gray-600  flex overflow-hidden text-sm">
            <div class="flex-grow overflow-hidden  flex flex-col">

              <div class="flex-grow flex overflow-x-hidden">
                <div class="flex-grow   overflow-y-auto">
                  <div class="py-4">
                    {initila.length>1?
                  <table class="w-full whitespace-nowrap text-left overflow-scroll">
                            <thead>
                              <tr class="text-white border-b">
                                <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">User Profile</th>
                                <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Name</th>
                                <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Position</th>
                                <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Mission</th>
                                <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Vision</th>
                                {/* <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">About</th> */}
                                {/* <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Date Of Birth</th> */}
                                {/* <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Total Registration</th> */}

                              </tr>
                            </thead>
                            {initila.map((data, index) => {
                              if (!data.tid) return null;
                              return (<>
                                <tbody class="text-gray-600 dark:text-gray-100">
                                  <tr>
                                    <td class="sm:p-3 w-[70px] h-[70px] py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100"><img src={data.ProfilImage} className='rounded-full w-full h-full object-cover' />
                                    </td>
                                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.Name}</td>
                                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.Position}</td>
                                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.Mission}</td>
                                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.Vision}</td>
                                    {/* <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.About}</td> */}
                                    {/* <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.RegisterData.length}</td> */}
                                  <div className='flex flex-col'>
                                    <td class="sm:p-3 py-2 px-1">
                                      <div class="flex items-center">

                                        <button class="w-24 h-8 inline-flex items-center justify-center text-lg text-green-400 ml-auto"
                                        onClick={async () =>{navigate(`/edit_profile/${data.tid}`)}}>
                                          Edit
                                        </button>
                                      </div>
                                    </td>
                                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                      <div class="flex items-center">

                                      </div>
                                      <div class="flex items-center">

                                        <button class="w-24 h-8 inline-flex items-center justify-center text-lg text-red-400 ml-auto"
                                        onClick={async () => {
                                            const res = confirm("You have confirm to delete...");
                                            if (res) {
                                                try {
                                                    const response = await axios.delete(`https://backendsufal-shreyash-sanghis-projects.vercel.app/delete_team_member/${data.tid}`);
                                                    const storage = getStorage();
                                                    const desertRef = ref(storage,`files/${data.ImageName}`);
                                                   await deleteObject(desertRef)
                                                    final((info) =>
                                                        info.filter((about) => about.tid != data.tid)
                                                    );
                                                    alert("Success...");
                                                } catch (error) {
                                                    alert(error);
                                                }
                                            }
                                        }}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </td>
                                    </div>
                                  </tr>
                                </tbody>
                              </>
                              )
                            })}
                          </table>
          
                          :<div className='flex justify-center text-white mx-auto'>Data is Loding...</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <ToastContainer />
        </>
    )
}

export default Myteam;