import React, { useState, useRef, useEffect,lazy, Suspense  } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DashboardNav from "../DashboardNav";
import { imageDb } from "../../Config.js";
import { ref, uploadBytes, getStorage } from "firebase/storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DotSpinner } from '@uiball/loaders';

const EventCard = lazy(()=> import("../../EventCard"));


import { v4 } from 'uuid';
const EditAnEvent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [initialAddEvent, finalAddEvent] = useState({
        EventName: "",
        Discreption: "",
        Place: "",
        EDate: "",
        Time: "",
        Title: "",
        Organization: "",
        Duration: "",
        Fee: "",
    })
    // State to manage input fields
    const [inputFields, setInputFields] = useState([{ value: '' }]);

    // Function to handle adding new fields
    const handleAddField = () => {
        setInputFields([...inputFields, { value: '' }]);
    };

    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        values[index].value = event.target.value;
        setInputFields(values);
    };


    const handleRemoveField = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    const [initialAddEventfile, finalAddEventfile] = useState();
    const [limiterror, setlimitError] = useState("");
    //-------------------------------------
    const EventData = (e) => {
        const { name, value } = e.target;
        finalAddEvent((Edata) => {
            return {
                ...Edata,
                [name]: value
            }
        })

        // Count words in description
        // const wordCount = value.trim().split(/\s+/).length;
        // if (value.length > 500) {
        //     setlimitError("Description should be within 500 characters.");
        // } else {
        //     setlimitError("");
        // }
    }
    const EventSave = async (event) => {
        event.preventDefault();
        setLoading(true);
        //Date
        let EDate = initialAddEvent.EDate;
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
        let date = EDate.split("-");
        date = `${date[2]}/${months[date[1] - 1]}/${date[0]}`;  

        let CurrentConform = false;
        let PastConform = false;
        if (date >= todaydate) {
            CurrentConform = true;
        }
        if (date < todaydate) {
            PastConform = true;
        }

        try {
            const { EventName, Discreption, Place, Time, Organization, Duration, Fee } = initialAddEvent;
            // if (initialAddEventfile === null || initialAddEventfile === undefined) {
            //     toast("Please Uplode image...")
            //     setLoading(false);
            //     return;
            // }
            // const storage = getStorage();
            // const image = `${initialAddEventfile.name + v4()}`;
            // const imgref = ref(storage, `files/${image}`);

            const response = await axios.post(`https://backendsufal-shreyash-sanghis-projects.vercel.app/updateAnEvent/${id}`
                , { ChiefGuest: inputFields, EventName, Discreption, Place, Time, Organization, Duration, Fee  })
            // try {
            //     uploadBytes(imgref, initialAddEventfile)
            // } catch (error) {
            //     toast("Your Banner is not uplode");
            //     setLoading(false);
            // }
            // finalAddEvent({
            //     EventName: "",
            //     Discreption: "",
            //     Place: "",
            //     EDate: "",
            //     Time: "",
            // })
            // finalAddEventfile();
            toast("success...")
            setLoading(false);
            setTimeout(() => {
                navigate("/event/current_event")
            }, 2000)
        } catch (error) {
            toast(error);
            setLoading(false);
        }
    }
    // ---------------------------------------------------

    // //Create Registration Form
    const parseDate = (dateString) => {
        // Split the date string into components
        const [day, monthName, year] = dateString.split('/');
      
        // Create a mapping of month names to month numbers
        const monthNames = {
          'January': '01',
          'February': '02',
          'March': '03',
          'April': '04',
          'May': '05',
          'June': '06',
          'July': '07',
          'August': '08',
          'September': '09',
          'October': '10',
          'November': '11',
          'December': '12',
        };
      
        // Get the month number from the month name
        const month = monthNames[monthName];
      
        // Ensure day is two digits
        const formattedDay = day.padStart(2, '0');
      
        // Return the formatted date
        return `${year}-${month}-${formattedDay}`;
      };
    const getdata = async () => {
        try {
            const response = await axios.get(`https://backendsufal-shreyash-sanghis-projects.vercel.app/getEventData/${id}`)
            const result = response.data.result;
            const formattedDate = parseDate(result.EDate);
            finalAddEvent({
                EventName: result.EventName,
                Discreption: result.Discreption,
                Place: result.Place,
                EDate: formattedDate,
                Time: result.Time,
                Title: result.Title,
                Organization: result.Organization,
                Duration: result.Duration,
                Fee: result.Fee,
            })
            result.ChiefGuest.map((info)=>{
                setInputFields((data)=>[
                    ...data,
                    {
                        value:info.value
                    }
                ])
        })            
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        getdata();
    }, [])
    return (
        <>
            <div className="flex flex-col md:flex-row z-0 bg-gray-800">
                <DashboardNav />
                <div className=" flex flex-col  mx-auto  w-full lg:w-[70%] bg-gray-800">
                    <h1 className="text-3xl mt-5 justify-center flex text-gray-400 font-medium">
                       Update An Event
                    </h1>
                    <div className="flex flex-col-reverse lg:flex-row ">
                        <div className="px-8 py-16 event-form text-lg w-full   text-white" >

                            <div


                                ref={form}
                                id="form"
                            >
                                <div className="md:relative  z-0 w-full mb-8 group">
                                    <label
                                        for="floating_date"
                                        className="peer-focus:font-medium block md:hidden     "
                                    >
                                        Name of the event
                                    </label>
                                    <input
                                        type="text" // Change the input type to "date"
                                        name="EventName"
                                        value={initialAddEvent.EventName}
                                        onChange={EventData}
                                        id="floating_date"
                                        className="event-input block py-1.5  px-0 w-full  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=""
                                        autoComplete="off"
                                    />
                                    <label
                                        for="floating_date"
                                        className="peer-focus:font-medium hidden md:block absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Name of the event
                                    </label>

                                </div>



                                <div className="md:relative z-0 my-5  w-full mb-8 group">
                                    <label
                                        for="floating_date"
                                        className="peer-focus:font-medium block md:hidden     "
                                    >
                                        Venue
                                    </label>
                                    <input
                                        type="text"
                                        name="Place"
                                        value={initialAddEvent.Place}
                                        onChange={EventData}
                                        autoComplete="off"
                                        id="floating_repeat_password"
                                        className="event-input block py-1.5 px-0 w-full   bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                    />
                                    <label
                                        for="floating_repeat_password"
                                        className="peer-focus:font-medium hidden md:block    absolute   duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Venue
                                    </label>
                                </div>
                                <div className="md:relative z-0 my-5  w-full mb-8 group">
                                    <label
                                        for="floating_date"
                                        className="peer-focus:font-medium block md:hidden     "
                                    >
                                        Organization Name
                                    </label>
                                    <input
                                        type="text"
                                        name="Organization"
                                        value={initialAddEvent.Organization}
                                        onChange={EventData}
                                        autoComplete="off"
                                        id="floating_repeat_password"
                                        className="event-input block py-1.5 px-0 w-full   bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                    />
                                    <label
                                        for="floating_repeat_password"
                                        className="peer-focus:font-medium hidden md:block    absolute   duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Organization Name
                                    </label>
                                </div>
                                <div className="md:grid md:grid-cols-2 mb-8 md:gap-6">
                                    <div className="md:relative z-0 w-full mb-6 group">
                                        <label
                                            htmlFor="floating_date"
                                            className="peer-focus:font-medium block md:hidden"
                                        >
                                            <i className="fas fa-calendar white-icon"></i> {/* Add white-icon class here */}
                                            Event Date 
                                        </label>
                                        <input
                                            type="date"
                                            name="EDate"
                                            value={initialAddEvent.EDate}
                                            onChange={EventData}
                                            autoComplete="off"
                                            id="floating_first_name"
                                            className="event-input block text-white py-1.5 px-0 w-full   bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder={initialAddEvent.EDate}
                                        />
                                        <label
                                            for="floating_first_name"
                                            className="peer-focus:font-medium hidden md:block absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Event Date
                                        </label>
                                    </div>
                                    <div className="md:relative z-0 w-full md:mb-6 group">
                                        <label
                                            for="floating_date"
                                            className="peer-focus:font-medium block md:hidden     "
                                        >
                                            Event Time
                                        </label>
                                        <input
                                            type="time"
                                            name="Time"
                                            value={initialAddEvent.Time}
                                            onChange={EventData}
                                            autoComplete="off"
                                            id="floating_last_name"
                                            className="event-input block py-1.5 px-0 w-full   bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                        />
                                        <label
                                            for="floating_last_name"
                                            className="peer-focus:font-medium hidden md:block absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Time
                                        </label>
                                    </div>
                                </div>
                                <div className="md:grid md:grid-cols-2 mb-8 md:gap-6">

                                    <div className="md:relative z-0 w-full mb-6 group">
                                        <label
                                            for="floating_date"
                                            className="peer-focus:font-medium block md:hidden     "
                                        >
                                            Duration
                                        </label>
                                        {/* <input
                    type="time"
                    name="Duration"
                    value={initialAddEvent.Duration}
                    onChange={EventData}
                    autoComplete="off"
                    id="floating_last_name"
                    className="event-input block py-1.5 px-0 w-full   bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  /> */}
                                        <select
                                            name="Duration"
                                            value={initialAddEvent.Duration}
                                            onChange={EventData}
                                            className="event-input block py-1.5 px-0 w-full   bg-transparent bg-gray-800 border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        >
                                            <option disabled value="">Select Duration</option>
                                            <option className="text-black" value="1 hour">1 hour</option>
                                            <option className="text-black" value="2 hours">2 hours</option>
                                            <option className="text-black" value="3 hours">3 hours</option>
                                            <option className="text-black" value="4 hours">4 hours</option>
                                            <option className="text-black" value="5 hours">5 hours</option>
                                            <option className="text-black" value="6 hours">6 hours</option>
                                            <option className="text-black" value="7 hours">7 hours</option>
                                            <option className="text-black" value="8 hours">8 hours</option>
                                            <option className="text-black" value="9 hours">9 hours</option>
                                            <option className="text-black" value="10 hours">10 hours</option>
                                            <option className="text-black" value="11 hours">11 hours</option>
                                            <option className="text-black" value="12 hours">12 hours</option>
                                            <option className="text-black" value="13 hours">13 hours</option>
                                            <option className="text-black" value="14 hours">14 hours</option>
                                            <option className="text-black" value="15 hours">15 hours</option>
                                            <option className="text-black" value="16 hours">16 hours</option>
                                            <option className="text-black" value="17 hours">17 hours</option>
                                            <option className="text-black" value="18 hours">18 hours</option>
                                            <option className="text-black" value="19 hours">19 hours</option>
                                            <option className="text-black" value="20 hours">20 hours</option>
                                            <option className="text-black" value="21 hours">21 hours</option>
                                            <option className="text-black" value="22 hours">22 hours</option>
                                            <option className="text-black" value="23 hours">23 hours</option>
                                            <option className="text-black" value="24 hours">24 hours</option>
                                        </select>
                                        <label
                                            for="floating_last_name"
                                            className="peer-focus:font-medium hidden md:block absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Duration
                                        </label>
                                    </div>
                                    <div className="md:relative z-0 w-full mb-6 group">
                                        <label
                                            for="floating_date"
                                            className="peer-focus:font-medium text-sm block md:hidden     "
                                        >
                                            Entry Fee (if free then enter Free)
                                        </label>
                                        <input
                                            type="text"
                                            name="Fee"
                                            value={initialAddEvent.Fee}
                                            onChange={EventData}
                                            autoComplete="off"
                                            id="floating_last_name"
                                            className="event-input block py-1.5 px-0 w-full   bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=""
                                        />
                                        <label
                                            for="floating_last_name"
                                            className="peer-focus:font-medium hidden md:block absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Entry Fee (if free then enter Free)
                                        </label>
                                    </div>

                                </div>
                                <div className=" mb-8">

                                    <label
                                        for="floating_date"
                                        className="peer-focus:font-medium block md:hidden     "
                                    >
                                        Discreption
                                    </label>
                                    <div className="md:relative z-0 w-full mb-6 group">
                                        <textarea
                                            type="text"
                                            name="Discreption"
                                            value={initialAddEvent.Discreption}
                                            onChange={EventData}
                                            autoComplete="off"
                                            id="floating_password"
                                
                                            className=" event-input block min-h-24  py-1.5 px-0 w-full   bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                        />
                                        <div >

                                            <label
                                                for="floating_password"
                                                className="peer-focus:font-medium   hidden md:block absolute  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Event Description (max 500 characters)
                                            </label>
                                            {limiterror && (
                                                <div className="text-red-500">{limiterror}</div>
                                            )}
                                        </div>
                                    </div>


                                    {/* <div className="md:relative z-0 w-full  mt-5 md:mt-0 mb-6 group">
                                        <input
                                            type="file"
                                            onChange={(ev) => { finalAddEventfile(ev.target.files[0]) }}
                                            className="event-input block py-2.5 px-0   w-full  bg-transparent border-0 border-b-2 border-gray-100 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            for="floating_company"
                                            className="peer-focus:font-medium hidden md:block absolute  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Event Banner (Landscape)
                                        </label>
                                    </div> */}

                                </div>
                                <div className="my-5 md:my-10 gap-5">
            <label
                htmlFor="floating_date"
                className="peer-focus:font-medium block mb-5"
            >
                Chief Guests
            </label>
            <div className="flex flex-col gap-5">
                <div className="flex flex-wrap gap-5">
                    {inputFields.map((inputField, index) => (
                        <div className="flex flex-col" key={index}>
                            <input
                                className="bg-transparent border-2 border-white"
                                type="text"
                                value={inputField.value}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                            <button
                                className="text-lg cursor-pointer w-fit border-2 bg-red-600 px-3 mt-2 rounded-full h-fit font-bold"
                                onClick={() => handleRemoveField(index)}
                            >
                                -
                            </button>
                        </div>
                    ))}
                </div>
                <div className="flex gap-3 items-center">
                    <button
                        className="flex justify-start border-2 w-fit p-2 rounded-full px-4 text-lg font-bold"
                        onClick={handleAddField}
                    >
                        +
                    </button>
                    <h1>Add Chief Guest</h1>
                </div>
            </div>
        </div>

                                <div className='flex justify-between'>
                                    {loading ? (
                                        <DotSpinner size={40} speed={0.9} color="white" className="flex justify-center m-auto" />
                                    ) : (
                                        <input onClick={EventSave} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        </input>
                                    )}
                                </div>
                            </div>

                        </div>

                        {/* <div className="px-5 mt-5 basic-0 mx-auto lg:mt-24 md:basis-1/2 lg:basis-1/3">
{(initialAddEventfile === undefined) ? (<>
  <EventCard
  eventTitle={initialAddEvent.EventName}
  eventDescription={initialAddEvent.Discreption}
  eventImg={"https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"}
  eventDate={initialAddEvent.EDate}
  eventTags={['For Mothers']}
  eventLocation={initialAddEvent.Place}
  eventLink="/book/blood-donation"
  Duration={initialAddEvent.Duration}
  eventTime={initialAddEvent.Time}
  eventPrice={initialAddEvent.Fee}
  eventOrganizer={initialAddEvent.Organization}
  // eventPurchaseLink={`/book/register_booking/${info.eid}`}
  registrationAndrsvp = "Register Now!"
  isLiked={true}
/>
  </>) : (<>
    <EventCard
  eventTitle={initialAddEvent.EventName}
  eventDescription={initialAddEvent.Discreption}
  eventImg={URL.createObjectURL(initialAddEventfile)}
  eventDate={initialAddEvent.EDate}
  eventTags={['For Mothers']}
  eventLocation={initialAddEvent.Place}
  eventLink="/book/blood-donation"
  Duration={initialAddEvent.Duration}
  eventTime={initialAddEvent.Time}
  eventPrice={initialAddEvent.Fee}
  eventOrganizer={initialAddEvent.Organization}
  // eventPurchaseLink={`/book/register_booking/${info.eid}`}
  registrationAndrsvp = "Register Now!"
  isLiked={true}
/>
  </>)}
</div> */}
                    </div>

                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default EditAnEvent;
