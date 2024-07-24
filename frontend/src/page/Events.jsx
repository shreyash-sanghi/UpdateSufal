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
    image_key: "",
    Duration: "",
    Fee: "",
    Organization: "",
    Title: "",
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
      const data = await axios.get("https://backendsufal-shreyash-sanghis-projects.vercel.app/get_current_event_data");
      const result = data.data.result;
      // console.log(result);
      result.map(async (info) => {
        console.log(info.CurrentConform)
        let EventDate = info.EDate;
        const isDate1AfterDate = compareDates(todaydate, EventDate);
		const storage = getStorage();
        const imgref = ref(storage,`files/${info.EventBanner}`);
        getDownloadURL(imgref).then(async(url) => {
        if (isDate1AfterDate && info.PastConform == false) {
          
        //   await axios.post(`https://sufalbackend-shreyash-sanghis-projects.vercel.app/send_to_past_event/${info._id}`);
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
              image_key: info.public_id,
              Duration: info.Duration,
              Fee: info.Fee,
              Organization: info.Organization,
              Title: info.Title,
            }
          ])
        } else {
          if(info.CurrentConform){
            SetCountCurrentEvent = CountCurrentEvent +1;
          }
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
              image_key: info.public_id,
			  Duration: info.Duration,
              Fee: info.Fee,
              Organization: info.Organization,
              Title: info.Title,
            }
          ])
        }
      })
	})

    } catch (error) {
      console.log(error);
      alert(error);
    }
  }
  // const getdata = (async()=>{
  //   try {
  //     const result = await axios.get("https://backendsufal-shreyash-sanghis-projects.vercel.app/get_past_event_data");
  //     const response = result.data.result;
  //     response.map((info)=>{
  //       const storage = getStorage();
  //       const imgref = ref(storage,`files/${info.EventBanner}`);
  //       getDownloadURL(imgref).then(async(url) => {
  //       final((data)=>[
  //        ...data,{
  //         eid: info._id,
  //         EventName: info.EventName,
  //         Place: info.Place,
  //         Time: info.Time,
  //         EDate: info.EDate,
  //         EventBanner:url,
  //         Discreption: info.Discreption,
  //        }
  //       ])
  //     })
  //   })
  //   } catch (error) {
  //     console.log(error);
  //     alert(error);
  //   }
  // })
  console.log(CountCurrentEvent)
  useEffect(()=>{
   getdata();
  },[])
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
							console.log(info)
							if(!info.eid) return null;
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
								eventPurchaseLink={`/book/register_booking/${info.eid}`}
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
    <div class="flex flex-wrap -m-4">
      {initial.map((info)=>{
        if(!info.eid) return null;
        if(!info.PastConform) return null;
        return(
          <>
               <div class="xl:w-1/4 md:w-1/2 p-4 ">
        <div class="bg-gradient-to-r pb-0 from-yellow-50 bg-pink-100 border border-gray-200 p-6 rounded-lg">
          <img class="h-40 sm:h-48 rounded w-full object-cover object-center mb-6" src={info.EventBanner} alt="content"/>
          <div className="flex gap-x-4 items-center justify-center sm:justify-between">
          <div className="">
          <h3 class="tracking-widest text-pink-600 text-sm mb-1 font-medium title-font">{info.EDate}</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{info.EventName}</h2>
          </div>
          <button 
  onClick={() => {
    window.scrollTo(0, 0);
    navigate(`/past_event/${info.eid}`);
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
      
      
      
      
    </div>
  </div>
</section>
<Footer></Footer>
    </>
    
  )
}

export default Events