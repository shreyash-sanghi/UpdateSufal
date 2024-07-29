import {React,useEffect,useState} from "react";
import DashboardNav from "./DashboardNav";
import axios from "axios"
const VolunteerData = ()=>{
    const [initial, final] = useState([{
        vid: "",
        FName: "",
        LName: "",
        Email: "",
        Number: "",
        DOB: "",
        WhyYouWantToJoin: "",
      }])
      const getdata = async () => {
        try {
          const data = await axios.get(`${import.meta.env.VITE_Backend_URL}/get_volunteer_data`);
          const response = data.data.result;
            response.map((result)=>{
              final((info)=>[
                ...info,{
                vid: result._id,
                FName: result.FName,
                LName: result.LName,
                Email: result.Email,
                Number: result.Number,
                DOB: result.DOB,
                WhyYouWantToJoin: result.WhyYouWantToJoin,
                }]
              )
            })
        } catch (error) {
          console.log(error);
          alert(error);
        }
      }
      //Use Effect
      useEffect(() => {
        getdata();
      }, [])
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
                  <table class="w-full whitespace-nowrap text-left overflow-scroll">
                            <thead>
                              <tr class="text-white border-b">
                                <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">First Name</th>
                                <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Last Name</th>
                                <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Number</th>
                                <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Email</th>
                                <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Date Of Birth</th>
                                <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Why You Want To Join</th>
                                {/* <th class="font-bold text-lg px-3 pt-0 pb-3 border-b border-gray-200 ">Total Registration</th> */}

                              </tr>
                            </thead>
                            {initial.map((data, index) => {
                              console.log(data);
                              if (!data.vid) return null;
                              return (<>
                                <tbody class="text-gray-600 dark:text-gray-100">
                                  <tr>
                                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.FName} </td>
                    
                                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.LName}</td>
                                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.Number}</td>
                                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.Email}</td>
                                    <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.DOB}</td>
                                    <td class="sm:p-3 py-2 px-1 whitespace-normal border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.WhyYouWantToJoin}</td>
                                    {/* <td class="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-gray-100">{data.RegisterData.length}</td> */}
                                  <div className='flex flex-col'>
                      
                                    <td class="sm:p-3 py-2 px-1 dark:border-gray-800">
                                      <div class="flex items-center">

                                      </div>
                                      <div class="flex items-center">

                                        <button class="w-24 h-8 inline-flex items-center justify-center text-lg text-red-400 ml-auto"
                                        onClick={async () => {
                                            const res = confirm("You have confirm to delete...");
                                            if (res) {
                                                try {
                                                    const response = await axios.delete(`${import.meta.env.VITE_Backend_URL}/delete_volunteer_member/${data.vid}`);
                                                    final((info) =>
                                                        info.filter((about) => about.vid != data.vid)
                                                    );
                                                    console.log(response);
                                                    alert("Success...");
                                                } catch (error) {
                                                    alert(error);
                                                    console.log(error);
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
          
    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
            </>
        )
}

export default VolunteerData;
