import React, { useEffect ,useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from "axios";
import EventCard from '../components/EventCard';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../components/ui/carousel';
import {ref,uploadBytes,getStorage ,getDownloadURL,deleteObject} from "firebase/storage";
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const [api, setApi] = useState();
  const navigate = useNavigate();
  const [CountCurrentEvent,SetCountCurrentEvent] = useState(0);
  const [initial, final] = useState([])
  const [years, setYears] = useState([]);
const [selectedYear, setSelectedYear] = useState('');
const [selectedMonth, setSelectedMonth] = useState('');
  const [loading,setLoading] = useState(true);

  
  const monthToNumber = (month) => {
    const monthDict = {
      "January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6,
      "July": 7, "August": 8, "September": 9, "October": 10, "November": 11, "December": 12
    };
    
    return monthDict[month];
  }
  const months = {
    "January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6,
    "July": 7, "August": 8, "September": 9, "October": 10, "November": 11, "December": 12
  };
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
  const parseDateString = (dateString) => {
    const [day, month, year] = dateString.split('/');
    const months = ["January", "February", "March", "April", "May",
      "June", "July", "August", "September", "October", "November", "December"];
    const monthIndex = months.indexOf(month);
    return new Date(year, monthIndex, day);
  };
  
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
    
    // Helper function to parse date string
    const parseDateString = (dateString) => {
      const [day, month, year] = dateString.split('/');
      const months = ["January", "February", "March", "April", "May",
        "June", "July", "August", "September", "October", "November", "December"];
      const monthIndex = months.indexOf(month);
      return new Date(year, monthIndex, day);
    };
  
    try {
      const { data } = await axios.get(`https://backendsufal-shreyash-sanghis-projects.vercel.app/get_current_event_data`);
      const result = data.result;
  
      // Fetch image URLs and process events
      const events = await Promise.all(result.map(async (info) => {
        let EventDate = info.EDate;
        const isDate1AfterDate = compareDates(todaydate, EventDate);
        const storage = getStorage();
        const imgref = ref(storage, `files/${info.EventBanner}`);
        const url = await getDownloadURL(imgref);
  
        if (isDate1AfterDate && info.PastConform === false) {
          await axios.post(`https://backendsufal-shreyash-sanghis-projects.vercel.app/send_to_past_event/${info._id}`);
          return {
            ...info,
            EventBanner: url,
            PastConform: true,
            CurrentConform: false,
          };
        } else {
          if (info.CurrentConform) {
            SetCountCurrentEvent(prevCount => prevCount + 1);
          }
          return {
            ...info,
            EventBanner: url,
          };
        }
      }));
  
      // Sort events based on EDate
      events.sort((a, b) => {
        const dateA = parseDateString(a.EDate);
        const dateB = parseDateString(b.EDate);
        return -(dateA - dateB); // Ascending order
      });

          // Extract unique years
    const uniqueYears = [...new Set(events.map(event => new Date(parseDateString(event.EDate)).getFullYear()))];
    setYears(uniqueYears);

  final(events)
      // // Update state with sorted events
      // setInitial(events);
      // setFinal(events);
  
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(error.message || "An error occurred while fetching data.");
    }
  };
  
  const handleYearChange = (year) => {
    setSelectedYear(year);
  };
  
  const filteredEvents = initial.filter(event => {
    const eventYear = new Date(parseDateString(event.EDate)).getFullYear();
    const eventMonth = new Date(parseDateString(event.EDate)).getMonth() + 1; // Months are 0-indexed
    const selectedMonthNumber = monthToNumber(selectedMonth);

    return (selectedYear === '' || eventYear === parseInt(selectedYear)) &&
           (selectedMonth === '' || eventMonth === selectedMonthNumber);
  });

  useEffect(() => {
    getdata();
  }, []);
  
  
  useEffect(() => {
    getdata();
  }, []);
  return (
    <>
    <Header></Header>
{(CountCurrentEvent>0)?(<>
    {(initial.length>1)?(<>
			<div
				id="upcoming-events"
				className="w-full max-w-7xl mx-auto px-3 pt-14 pb-16"
			>
				<div className="w-full flex flex-col mb-2 items-center justify-center">
					<span className="text-4xl font-medium text-[#f9c950]">
						Upcoming Events 
					</span> 
					
				</div>
				<Carousel
					orientation="horizontal"
					opts={{
						align: 'start',
						loop: true,
					}}
					setApi={setApi}
					className="w-full"
				>
					<CarouselContent className="w-full  mx-auto py-5">
				
						{initial.map((info)=>{
							if(!info._id) return null;
							if(!info.CurrentConform) return null
							return(<>
						<CarouselItem className="px-5 basic-0 mx-auto  md:basis-1/2 lg:basis-1/3">

							<EventCard
								eventTitle={info.EventName}
								eventDescription={info.Discreption}
								eventImg={info.EventBanner}
								eventDate={info.EDate}
								eventTags={['For Mothers']}
								eventLocation={info.Place}
								eventLink="/book/blood-donation"
								Duration={info.Duration}
								eventTime={info.Time}
								eventPrice={info.Fee}
								eventOrganizer={info.Organization}
								eventPurchaseLink={`/book/register_booking/${info._id}`}
								registrationAndrsvp = "Register Now!"
								isLiked={true}
							/>
						</CarouselItem>
						</>)
						})}
					</CarouselContent>
					<CarouselPrevious className="ml-4	 sm:ml-28 md:ml-16		 md:-bottom-8" />
					<CarouselNext className="mr-6 sm:mr-0 md:mr-1 md:-bottom-8" />
				</Carousel>
			</div>
			</>):(<></>)}
      </>):(<></>)}
    <section class="">
  <div class="container px-2 py-10 md:py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium mb-2 text-gray-900">Glimpses of Past Events</h1>
        <div class="h-1 w-80 bg-pink-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-700">Explore our memorable past events, showcasing our community's vibrant spirit and dedication. From inspiring campaigns to engaging workshops, these moments highlight our journey and achievements. Relive the experiences that have shaped our organization's impactful story.

</p>
    </div>
    <div class="flex flex-col flex-wrap -m-4">
      <div className='flex flex-col sm:flex-row mb-5  w-full items-center gap-10'>
    <section className="year-selector   w-full sm:w-1/2 md:w-[30%]  ">
      <div className="container  mx-auto">
        <label htmlFor="year-select" className="text-lg font-medium ml-3">Filter Event By Year</label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={(e) => handleYearChange(e.target.value)}
          className="ml-2 w-full p-2 border rounded"
        >
          <option value="">All Years</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
    </section>
    <section className="month-selector w-full sm:w-1/2 md:w-[30%]">
              <div className="container mx-auto mt-4">
                <label htmlFor="month-select" className="text-lg font-medium ml-3">Filter Event By Month</label>
                <select
                  id="month-select"
                  value={selectedMonth}
                  onChange={(e) =>setSelectedMonth(e.target.value)}
                  className="ml-2 w-full p-2 border rounded"
                >
                  <option value="">All Months</option>
                  {Object.keys(months).map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>
            </section>
            </div>
      {(loading)?(<>
      <div className='flex justify-between gap-20 mx-auto   items-center '>
        
<div role="status" class="max-w-sm flex-col hidden sm:flex  p-4 border border-gray-400 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
        <svg class="w-10 h-10 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div class="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-400 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-400 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-400 rounded-full dark:bg-gray-700"></div>
    <div class="flex items-center mt-4">
       <svg class="w-10 h-10 me-3 text-gray-400 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        <div>
            <div class="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div class="w-48 h-2 bg-gray-400 rounded-full dark:bg-gray-700"></div>
        </div>
    </div>
    <span class="sr-only">Loading...</span>
</div>
<div role="status" class="max-w-sm  flex-col hidden sm:flex p-4 border border-gray-400 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
        <svg class="w-10 h-10 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div class="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-400 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-400 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-400 rounded-full dark:bg-gray-700"></div>
    <div class="flex items-center mt-4">
       <svg class="w-10 h-10 me-3 text-gray-400 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        <div>
            <div class="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div class="w-48 h-2 bg-gray-400 rounded-full dark:bg-gray-700"></div>
        </div>
    </div>
    <span class="sr-only">Loading...</span>
</div>
<div role="status" class="max-w-sm flex-col hidden sm:flex  p-4 border border-gray-400 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
        <svg class="w-10 h-10 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div class="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-400 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-400 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-400 rounded-full dark:bg-gray-700"></div>
    <div class="flex items-center mt-4">
       <svg class="w-10 h-10 me-3 text-gray-400 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        <div>
            <div class="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div class="w-48 h-2 bg-gray-400 rounded-full dark:bg-gray-700"></div>
        </div>
    </div>
    <span class="sr-only">Loading...</span>
</div>
<div role="status" class="sm:max-w-sm w-full p-4 border border-gray-400 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
        <svg class="w-10 h-10 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div class="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-400 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-400 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-400 rounded-full dark:bg-gray-700"></div>
    <div class="flex items-center mt-4">
       <svg class="w-10 h-10 me-3 text-gray-400 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        <div>
            <div class="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div class="w-48 h-2 bg-gray-400 rounded-full dark:bg-gray-700"></div>
        </div>
    </div>
    <span class="sr-only">Loading...</span>
</div>

      </div>
      </>):(<div className='flex flex-wrap justify-center'>

      
      {filteredEvents.map((info)=>{
        if(!info._id) return null;
        if(!info.PastConform) return null;
        return(
          <>
               <div class="xl:w-1/4 md:w-1/2 p-4 ">
        <div class="bg-gradient-to-r pb-0 from-yellow-50 bg-pink-100 border border-gray-200 p-6 rounded-lg">
          <img class="h-40 sm:h-48 rounded w-full object-cover object-center mb-6" src={info.EventBanner} alt="content"/>
          <div className="flex flex-wrap gap-x-4 items-center justify-center sm:justify-between">
          <div className="">
          <h3 class="tracking-widest text-pink-600 text-sm mb-1 font-medium title-font">{info.EDate}</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{info.EventName}</h2>
          </div>
          <button 
  onClick={() => {
    window.scrollTo(0, 0);
    navigate(`/past_event/${info._id}`);
  }} 
  className='bg-pink-500 text-sm px-2 py-1 rounded-lg text-white'
>
  View More
</button>          </div>
          
          
          
        </div>
      </div>
          </>
        )
      })}
      
      </div>)}
      
      
    </div>
  </div>
</section>
<Footer></Footer>
    </>
    
  )
}

export default Events