import React, { useState, useEffect } from 'react';
import DashboardNav from "../DashboardNav";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {ref,uploadBytes,getStorage ,getDownloadURL,deleteObject} from "firebase/storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CurrentEvent = () => {
  const { kind_of_event, rid } = useParams();
  const navigate = useNavigate();

  //Show Event data
  const [initial, final] = useState([{
    eid: "",
    EventName: "",
    Place: "",
    Time: "",
    EDate: "",
    EventBanner: "",
    PastConform: "",
    CurrentConform: "",
    Discreption: "",
    ImageName: "",
    EventImage: [],
  }])


  const monthToNumber = (month) => {
    const monthDict = {
      "January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6,
      "July": 7, "August": 8, "September": 9, "October": 10, "November": 11, "December": 12
    };
    return monthDict[month];
  }
  const compareDates = (date1, date2) => {
    const [day1, month1, year1] = date1.split('/');
    const [day2, month2, year2] = date2.split('/');
    if (year1 !== year2) {
      if (parseInt(year1) > parseInt(year2)) {
        return true;
      }
    } else if (monthToNumber(month1) !== monthToNumber(month2)) {
      if (monthToNumber(month1) > monthToNumber(month2)) {
        return true;
      }
    } else if (parseInt(day1) !== parseInt(day2)) {
      if (parseInt(day1) > parseInt(day2)) {
        return true;
      }
    }
    return false;
  }
  const getdata = async () => {

    let todaydate = new Date();
    const months = ["January", "February", "March", "April", "May",
      "June", "July", "August", "September", "October", "November", "December"];
    let month = months[todaydate.getMonth()];
    let curdate = todaydate.getDate();
    let curyear = todaydate.getFullYear();
    if (curdate < 10) {
      curdate = `0${curdate}`;
    }
    todaydate = `${curdate}/${month}/${curyear}`;
    try {
      const data = await axios.get(`https://backendsufal-shreyash-sanghis-projects.vercel.app/get_current_event_data`);
      const result = data.data.result;
      result.map(async (info) => {
  
        let EventDate = info.EDate;
        const isDate1AfterDate = compareDates(todaydate, EventDate);
        const storage = getStorage();
        const imgref = ref(storage,`files/${info.EventBanner}`);
        getDownloadURL(imgref).then(async(url) => {
          // conosle.log(url)
        if (isDate1AfterDate && info.PastConform == false) {
          await axios.post(`https://backendsufal-shreyash-sanghis-projects.vercel.app/send_to_past_event/${info._id}`);
     
          final((about) => [
            ...about, {
              eid: info._id,
              EventName: info.EventName,
              Place: info.Place,
              Time: info.Time,
              EDate: info.EDate,
              EventBanner: url,
              PastConform: true,
              CurrentConform: false,
              Discreption: info.Discreption,
              ImageName: info.EventBanner,
              EventImage: info.EventImage,
      
            }
          ])
        } else {
          final((about) => [
            ...about, {
              eid: info._id,
              EventName: info.EventName,
              Place: info.Place,
              Time: info.Time,
              EDate: info.EDate,
             EventBanner: url,
              PastConform: info.PastConform,
              CurrentConform: info.CurrentConform,
              Discreption: info.Discreption,
               ImageName: info.EventBanner,
               EventImage: info.EventImage,
            }
          ])
        }
      })
    })
    } catch (error) {
      toast(error);
    }
  }

  //Use Effect
  useEffect(() => {
    getdata();
  }, [])

  return (
    <>
      <div className="flex md:flex-row flex-col min-h-screen bg-gray-800">
        <DashboardNav />
        <div class="font-sans bg-grey-lighter flex flex-col w-full">
          <div class=" dark:text-white text-gray-600  flex overflow-hidden text-sm">
            <div class="flex-grow overflow-hidden  flex flex-col">

              <div class="flex-grow flex overflow-x-hidden">
                <div class="flex-grow   overflow-y-auto">
                  <div class="py-4">
                    {(kind_of_event === "current_event") ? (<>
                      <table class="w-full whitespace-nowrap text-left overflow-scroll">
                        <thead>
                          <tr class="text-white border-b">
                            <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Event Name</th>
                            <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Vanue</th>
                            <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Date</th>
                            <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Time</th>
                            <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">About Event</th>
                            <th class="font-normal px-3 pt-0 pb-3 border-b border-gray-200 "></th>

                          </tr>
                        </thead>
                        {initial.map((data) => {
               
                          if (!data.eid) return null;
                          if (!data.CurrentConform) return null;
                          return (<>


                            <tbody class="text-gray-600 dark:text-gray-100">
                              <tr>
                                <td class="sm:p-3 py-2 px-3 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.EventName}</td>
                                <td class="sm:p-3 py-2 px-3 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.Place}</td>
                                <td class="sm:p-3 py-2 px-3 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.EDate}</td>
                                <td class="sm:p-3 py-2 px-3 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.Time}</td>
                                <td class="sm:p-3 px-3 max-w-20 overflow-x-hidden py-2 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.Discreption}</td>
                                <td class="sm:p-3 py-2 px-3 border-b border-gray-200 dark:border-gray-800">
                                  <div class="flex items-center">
                                  </div>
                                  <div class="flex items-center">

                                    <button class="w-24 h-8 inline-flex items-center justify-center text-lg text-green-400 ml-auto"
                                      onClick={()=>navigate(`/edit_event/${data.eid}`)}
                                    >
                                      Edit
                                    </button>
                                  </div>
                                </td>
                                <td class="sm:p-3 py-2 px-3 border-b border-gray-200 dark:border-gray-800">
                                  <div class="flex items-center">
                                  </div>
                                  <div class="flex items-center">

                                    <button class="w-24 h-8 inline-flex items-center justify-center text-lg text-red-400 ml-auto"
                                      onClick={async () => {
                                        const res = confirm("You have confirm to delete request ");
                                        if (res) {
                                          try {
                
                                            const response = await axios.post(`https://backendsufal-shreyash-sanghis-projects.vercel.app/send_to_past_event/${data.eid}`);
                                            // getdata();
                                            final((info) =>
                                              info.filter((about) => about.eid != data.eid)
                                            );

                                            toast("Success...");
                                          } catch (error) {
                                            toast(error);
                                           
                                          }
                                        }
                                      }}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </>
                          )
                        })}
                      </table>
                    </>) : (<>
                      {(kind_of_event === "registration_record") ? (<>
                        <table class="w-full whitespace-nowrap text-left overflow-scroll">
                            <thead>
                              <tr class="text-white border-b">
                                <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Event Name</th>
                                <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Vanue</th>
                                <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Date</th>
                                {/* <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Total Registration</th> */}

                              </tr>
                            </thead>
                            {initial.map((data, index) => {
                              if (!data.eid) return null;
                              return (<>
                                <tbody class="text-gray-600 dark:text-gray-100">
                                  <tr>
                                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.EventName}</td>
                                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.Place}</td>
                                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.EDate}</td>
                                    {/* <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.RegisterData.length}</td> */}
                                    <td class="sm:p-3  overflow-x-hidden py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100"><button
                                      onClick={() => {
                                        navigate(`/view_register/${data.eid}`);
                                      }}

                                      className='border-2 px-4 py-2 font-semibold hover:bg-sky-400 rounded-lg'>View Registration</button></td>
                                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
                                      <div class="flex items-center">

                                      </div>
                                      <div class="flex items-center">

                                        <button class="w-24 h-8 inline-flex items-center justify-center text-lg text-red-400 ml-auto"
                                        onClick={async () => {
                                            const res = confirm("You have confirm to delete all registration...");
                                            if (res) {
                                                try {
                                                    const response = await axios.delete(`https://backendsufal-shreyash-sanghis-projects.vercel.app/delete_all_registration/${data.eid}`);
                                                    final((info) =>
                                                        info.filter((about) => about.eid != data.eid)
                                                    );
                                                 
                                                    toast("Success...");
                                                } catch (error) {
                                                    toast(error);
                                                }
                                            }
                                        }}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </>
                              )
                            })}
                          </table>
                      </>) :(<>
                                <table class="w-full whitespace-nowrap text-left overflow-scroll">
                                  <thead>
                                    <tr class="text-white border-b">
                                      <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Event Name</th>
                                      <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Vanue</th>
                                      <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Date</th>
                                      <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 "></th>
                                    </tr>
                                  </thead>
                                  {initial.map((data) => {
                             
                                    if (!data.eid) return null;
                                    if (!data.PastConform) return null;
                                    return (<>

                                      <tbody class="text-gray-600 dark:text-gray-100">
                                        <tr>
                                          <td class="sm:p-3 py-2 px-3 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.EventName}</td>
                                          <td class="sm:p-3 py-2 px-3 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.Place}</td>
                                          <td class="sm:p-3 py-2 px-3 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.EDate}</td>
                                          {/* <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.Time}</td> */}
                                          <td class="sm:p-3  overflow-x-hidden py-2 px-3 border-b border-gray-200 dark:border-gray-800 text-gray-100"><button onClick={()=>navigate(`/uplode_event_image/${data.eid}`)} className='border-2 px-4 py-2 font-semibold hover:bg-sky-400 rounded-lg'>Add Photos</button></td>
                                          <td class="sm:p-3 py-2 px-3 border-b border-gray-200 dark:border-gray-800">
                                  <div class="flex items-center">
                                  </div>
                                  <div class="flex items-center">

                                    <button class="w-24 h-8 inline-flex items-center justify-center text-lg text-green-400 ml-auto"
                                      onClick={()=>navigate(`/edit_event/${data.eid}`)}
                                    >
                                      Edit
                                    </button>
                                  </div>
                                </td>
                                          <td class="sm:p-3 py-2 px-3 border-b border-gray-200 dark:border-gray-800">
                                            <div class="flex items-center">

                                              <button class="w-28 h-8 inline-flex items-center justify-center text-lg text-green-400 ml-auto"
                                                onClick={async () => {
                                                  try {
                                                    navigate(`/view_past_event/${data.eid}`)
                                                    final((info) =>
                                                      info.filter((about) => about.verify != data.uid)
                                                    );
                                                  } catch (error) {
                                                    toast(error);
      
                                                  }
                                                }}
                                              >
                                                View Past Event
                                              </button>
                                            </div>
                                            <div class="flex items-center">

                                              <button class="w-24 h-8 inline-flex items-center justify-center text-lg text-red-400 ml-auto"
                                              onClick={async () => {
                                                  const res = confirm("You have confirm to delete request ");
                                                  if (res) {
                                                      try {
                                                        {data.EventImage.map(async(info)=>{
                                                                 const storage = getStorage();
                                                        const desertRef = ref(storage,`files/${info}`);
                                                       await deleteObject(desertRef)
                                                        })}
                                
                                                          const response = await axios.delete(`https://backendsufal-shreyash-sanghis-projects.vercel.app/delete_event/${data.eid}`);
                                                          final((info) =>
                                                              info.filter((about) => about.eid != data.eid)
                                                          );
                                                        
                                                          toast("Success...");
                                                      } catch (error) {
                                                          toast(error);
                                                  
                                                      }
                                                  }
                                              }}
                                              >
                                                Remove
                                              </button>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </>
                                    )
                                  })}
                                </table>
                              </>)}
                    </>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  )
}

export default CurrentEvent;