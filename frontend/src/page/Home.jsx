import React, { useEffect, useState } from 'react';
import { colorTheme } from '../constants/colorTheme';
import herogif from '../assets/herogif6.mp4';
import Button from '../components/Button';
import { GrUserExpert } from "react-icons/gr";
import team1 from '../assets/team1.png';
import team2 from '../assets/team2.png';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import {ref,uploadBytes,getStorage ,getDownloadURL,deleteObject} from "firebase/storage";
import team3 from '../assets/team-3.png';
import { Link } from 'react-router-dom';

// <<<<<<< HEAD
// =======
import Glimpses from '../components/Glimpses';
import mothers from '../assets/mothersday rander2.mp4';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
	IoLogoInstagram,
	IoLogoLinkedin,
	IoPlayOutline,
} from 'react-icons/io5';
import { PiBowlFood, PiHandHeartFill } from 'react-icons/pi';
import { MdOutlineSupportAgent } from "react-icons/md";

import { LuHeartHandshake } from 'react-icons/lu';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { GiMedicines } from 'react-icons/gi';
import { BsFacebook, BsPeopleFill } from 'react-icons/bs';
import { FaBookOpenReader } from 'react-icons/fa6';
import PatientDonationCard from '../components/PatientDonationCard';
import Card from '../components/ProgramCard';
import NewsCard from '../components/NewsCard';
import randomDate from '../lib/getRandomDate';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '../components/ui/carousel';
import TeamCard from '../components/TeamCard';
import EventCard from '../components/EventCard';
import aboutimg from '../assets/aboutimg.png';
import { ImWoman } from "react-icons/im";

import Header from '../components/Header';
import axios from 'axios';

const Info = ({ title, description }) => {
	return (
		<div className="flex flex-col items-start justify-start space-y-1">
			<div className="text-3xl md:text-4xl font-bold">{title}</div>
			<div className="text-base font-medium text-[#868686] w-full md:w-[50%] selection:text-[#16191E]">
				{description}
			</div>
		</div>
	);
};

const InfoCard = ({ title, description, icon, color }) => {
	return (
		<div className="w-full flex items-start justify-start gap-3">
			<div
				className="w-fit flex items-center justify-center rounded-full p-2"
				style={{ backgroundColor: color }}
			>
				<span>{icon}</span>
			</div>
			<div className="w-full flex flex-col items-start justify-start space-y-2">
				<div className="text-2xl font-semibold">{title}</div>
				<div className="w-full text-base font-medium text-[#868686] lg:w-[80%] selection:text-[#16191E]	">
					{description}
				</div>
			</div>
		</div>
	);
};

const Home = () => {
	const [api, setApi] = useState();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);
	const [initial_length,final_length] = useState("");
	useEffect(() => {
		if (!api) {
			return;
		}
		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);


 const [ini_team,final_team] = useState([{
	tid:"",
	ProfilImage:"",
	Name:"",
	Position:"",
	InataId:"",
	FBId:"",
	About:" "
 }])

 
  const getTeamData  = async()=>{
	try{
       const response = await axios.get("https://backendsufal-shreyash-sanghis-projects.vercel.app/get_team_data");
	   const result  = response.data.result;
	   result.map((info)=>{
	   const storage = getStorage();
	   const imgref = ref(storage,`files/${info.ProfilImage}`);
	   getDownloadURL(imgref).then(async(url) => {
		final_team((team_data)=>[
		...team_data,{	
			tid:info._id,
			ProfilImage:url,
			Name:info.Name,
			Position:info.Position,
			InataId:info.InataId,
			FBId:info.FBId,
			About:info.About
		}
		])
	   })
	})
	}catch(error){
		toast(error);
	}
  }

  //Use Effect
  useEffect(() => {
	getTeamData();
  }, [])

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  const verifytoken = async()=>{
   try{
	  axios.defaults.headers.common["Authorization"] = token;
	  const result = await axios.get("https://backendsufal-shreyash-sanghis-projects.vercel.app/user_auth");
	  const OwnerEmail = result.data.OwnerEmail;
	  const Email = result.data.Email;
	  if(Email===OwnerEmail){
		navigate("/add_event");
	}
	else{
		navigate("/");
	}
   }catch(error){
	  alert(error);
	  console.log(error);
   }
  }
//   console.log(token);
	  useEffect(()=>{
		  if(token != null || token != undefined){
			  verifytoken();
		  }
	  },[])
	return (
	       <>
		   <Header/>
		<div className="w-full px-1 md:px-0 bg-[#fefaf6] ">
			<div
				id="home"
				className="max-w-7xl lg:mt-10 mx-auto px-3 py-6 flex flex-col lg:flex-row items-center justify-between"
			>
				<div className="w-full lg:w-1/2 mt-6 md:mt-0 space-y-5 flex flex-col items-center justify-start mx-auto	selection:bg-[#0a755862]">
					<div className="w-full flex flex-col items-start justify-start space-y-3">
						<span className="text-4xl md:text-5xl lg:text-6xl text-[#f2c145] lg:leading-snug leading-normal font-bold ">
						सुफल : <span className='text-gray-800'><br /> गर्भावस्था सपोर्ट  ग्रुप</span>
						</span>
						<span className="w-full md:w-[90%] lg:w-[80%] flex items-center justify-start pt-4 text-sm leading-relaxed font-medium text-[#454444] selection:text-[#16191E]">
						मातृत्व एक सुखद और भावनात्मक अनुभव है, जिसे हर स्त्री जीना चाहती है। गर्भावस्था के दौरान शारीरिक और मानसिक परिवर्तनों के कारण अक्सर अनजाना भय और तनाव होता है। इस समय को सुखद बनाने और अपनी तथा गर्भस्थ शिशु की पूरी देखभाल करने के उद्देश्य से गर्भसंस्कार एक महत्वपूर्ण प्रयास है। गर्भसंस्कार से श्रेष्ठ संतति का निर्माण संभव है और यह संस्कार देने का उत्तम समय है।

सुफल गर्भावस्था सपोर्ट ग्रुप, प्रत्येक माह एक विशेष विषय पर चर्चा करता है। इस प्रोग्राम में आप अपने परिवार के सदस्यों के साथ शामिल हो सकती हैं।






						</span>
					</div>
					<div className="w-full flex items-center justify-start md:space-x-4 pt-5 gap-3">
						<Button
							message="Join Now"
							className="px-3 sm:px-6 py-3 rounded-xl bg-[#0a7558]"
						/>
						<button className="flex items-center justify-center gap-2 border border-[#0a7558] text-[#0a7558] text-center font-semibold px-3 sm:px-6 py-3 rounded-xl">
							<span>
								<IoPlayOutline size={16} />
							</span>
							Watch Video
						</button>
					</div>
					<div className="w-fit sm:w-full px-2 md:px-0 flex items-start gap-x-3 md:gap-x-0 justify-start pt-5 ">
						<Info
							title={'10+'}
							description={'Years of Success'}
						/>
						<Info
							title={'120+'}
							description={'Events Successful'}
						/>
						<Info
							title={'3500+'}
							description={'Total Attendes'}
						/>
					</div>
					
				</div>
				<div className="w-full lg:w-1/2 mt-8 lg:mt-0 px-4 md:px-0 flex items-center justify-center">
					<video
						src={herogif}
						alt="Pattern"
						className="w-full h-auto  rounded-lg"
						playsInline={true}
						autoPlay={true}
						loop={true}
						draggable={false}
					/>
				</div>
			</div>
			<div
				id="about-us"
				className="max-w-7xl mx-auto px-5 pt-12 flex flex-col-reverse lg:flex-row rounded-xl items-start justify-between bg-white"
			>
				<div className="w-full lg:w-3/7 mt-8 lg:mt-0 flex items-center justify-center  pb-10">
					<img
						src={aboutimg}
						alt="Pattern"
						className="w-full h-auto object-cover rounded-lg"
						draggable={false}
					/>
				</div>
				<div className="w-full lg:w-4/7 flex flex-col items-start justify-start pb-10 lg:pl-10 space-y-6">
					<span className="text-2xl font-medium text-[#f7c957]">
						ABOUT US
					</span>
					<div className="w-full flex flex-col items-start justify-start space-y-3 pb-5">
						<span className="text-4xl md:text-5xl font-semibold leading-tight">
						Nurturing Healthy Pregnancies: Your Journey, Our Support.
						</span>
						<span className="w-full text-base font-semibold text-[#868686] selection:text-[#16191E]">
						We provide essential support to expectant mothers worldwide.
						</span>
					</div>
					<div className="w-full flex flex-col items-start justify-start gap-5">
						<InfoCard
							title={'Healthy Pregnancies'}
							description={
								'Ensuring a healthy pregnancy through comprehensive support, resources, and care for expectant mothers.'
							}
							icon={
								<PiHandHeartFill
									size={24}
									color={'#f9699b'}
								/>
							}
							color={'#fee0ea'}
						/>
						<InfoCard
							title={'Pre Pregnancy Care'}
							description={
								'Offering guidance, education, and support for women preparing for a healthy pregnancy journey.'
							}
							icon={
								<LuHeartHandshake
									size={24}
									color={'#fbd066'}
								/>
							}
							color={'#fef3d7'}
						/>
						<InfoCard
							title={'Support Assistance'}
							description={
								'Providing emotional and practical support to ensure the well-being of pregnant women and new mothers.'
							}
							icon={
								<MdOutlineSupportAgent size={24} color={"#7CB9E8"} />
							}
							color={'#F0F8FF'}
						/>
					</div>
				</div>
			</div>

			<section className="my-8 ">
	<div className="container flex flex-col items-center p-0 mx-auto space-y-6 md:p-8">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16 dark:text-violet-400">
			<polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
			<path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
		</svg>
		<p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-300">Ironman baby maker of India !</p>
		<div className="flex justify-center items-center space-x-3 lg:space-x-6">
			<img src={team3} alt="" className="size-20 lg:size-60 bg-center bg-cover rounded-md " />
			
			<div>
				<p className="leadi">Dr. Priya Bhave Chittawar</p>
				<p className="text-sm leadi dark:text-gray-300">Director, Sufal</p>
				
				<a className="flex items-center py-2 space-x-1 text-sm dark:text-violet-400" href="/">
					<span className='text-pink-800'><Link onClick={() => {window.scrollTo(0,0)}} to="dr-priya-bhave-chittawar">Read full story</Link></span>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
						<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
					</svg>
				</a>
			</div>
			
		</div>
		<p className='text-center px-4 bg-yellow-100 py-1 rounded-xl'>Dr. Priya Bhave Chittawar stands as an illustrious beacon of hope, a revered fertility specialist, and a trailblazing gynaecological endoscopic surgeon at the esteemed Bansal Hospital in the heart of Bhopal. With unparalleled expertise and unwavering dedication, she orchestrates miracles, ushering in new beginnings and fulfilling dreams.</p>
	</div>
</section>


			<div
				id="categories"
				className="max-w-7xl mx-auto px-5 md:px-0 pt-6 flex flex-col items-start justify-start selection:bg-[#0a755862]"
			>
				<div className="w-full flex flex-col items-center justify-center space-y-4">
					<span className="text-3xl font-medium text-[#fbd066]">
						SERVICES
					</span>
					<span className="text-3xl md:text-4xl text-center md:text-start lg:text-5xl font-semibold text-[#16191E] ">
						Empowering Beloved Mothers !
					</span>
				</div>
				<div className="w-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-5 items-center justify-center gap-2 md:gap-4 mt-8">
					<Card
						title={'Yoga Experts'}
						description={
							'Guidance on prenatal yoga for a healthy and balanced pregnancy.'
						}
						icon={
							<ImWoman
								size={44}
								color={'#fbd066'}
							/>
						}
						color={'#fef3d7'}
					/>
					<Card
						title={'Dietician'}
						description={
							'Personalized nutrition plans to support a healthy journey.'
						}
						icon={
							<PiBowlFood
								size={44}
								color={'#009F6B'}
							/>
						}
						color={'#D0F0C0'}
					/>
					<Card
						title={'Physcologists'}
						description={
							'Mental health support and counseling for expectant mothers.'
						}
						icon={
							<GiMedicines
								size={44}
								color={'#478ef9'}
							/>
						}
						color={'#e0ecfe'}
					/>
					<Card
						title={'Feeding Experts'}
						description={
							'Expert advice on breastfeeding and infant nutrition.'
						}
						icon={
							<GrUserExpert
								size={44}
								color={'#593ff9'}
								className='p-1'
							/>
						}
						color={'#e4e0fe'}
					/>
					<Card
						title={'Sound Therapy'}
						description={
							'Relaxation and stress relief through prenatal sound therapy.'
						}
						icon={
							<FaBookOpenReader
								size={44}
								color={'#f93f80'}
								className='p-1'
							/>
						}
						color={'#fee0ea'}
					/>
				</div>
			</div>

			<main className="flex py-6 lg:py-14 pt-10 md:pt-6 bg-white  flex-1 w-full flex-col items-center justify-center text-center md:text-start px-4 sm:mt-12 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          Our
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Memories</span>
          </span>
        </h1>
      </main>
    <section class=" overflow-hidden pb-10 md:pb-20 bg-white">
  <div class="container px-2 md:px-6 sm:px-0 py-0 mx-auto">
    <div class="lg:w-4/5 mx-auto rounded-xl flex flex-wrap justify-center text-center md:text-start">
      <video alt="ecommerce" playsInline={true} autoPlay={false} loop={true} controls={true} class=" md:w-4/5 lg:w-1/2 mx-4 md:mx-0 w-full lg:h-80 h-64 object-contain object-center rounded-xl" src={mothers}></video>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 px-4 md:px-20 mt-6 lg:mt-0">
        <h2 class="text-sm title-font mb-2 text-gray-500 tracking-widest">Initiative By Dr. Priya Bhave Chittawar</h2>
        <h1 class="text-3xl title-font font-medium mb-1">Mamta Exhibition</h1>
        <div class="flex mb-4 justify-center md:justify-start">
          <span class="flex items-center">
            <svg fill="yellow" stroke="purple" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="yellow" stroke="purple" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="yellow" stroke="purple" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="yellow" stroke="purple" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="yellow" stroke="purple" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-gray-400 ml-3">5 Star Reviews</span>
          </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p class="leading-tight">We are here because of our mothers, and what better day to celebrate this than Mother's Day ?
Mamta : 
the essence of motherhood!
It was great to be at the art gallery On the occasion of Mother's Day!🤗</p>
        <div class="flex mt-6 items-center pb-0 border-b-2 border-gray-100 mb-5">
          
    
        </div>
        <div class="flex justify-center md:justify-start">
          <span class="title-font font-medium text-2xl text-gray-500">You Loved It Right !!!</span>
          <button class="rounded-full w-8 h-8 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-blue-500 ml-4">
            <svg fill="red" stroke-linecap="violet" stroke-linejoin="violet" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
			{/* <div className="max-w-7xl mx-auto px-5 pt-6 flex flex-col items-start justify-start selection:bg-[#7fe0c662] gap-5">
				

				<div className="w-full flex flex-col items-center justify-center py-4">
					<div className="relative w-full h-[21rem] sm:h-[22rem] md:h-72 flex items-center justify-start md:rounded-r-full bg-[#0a7558] rounded-lg py-10		 lg:py-0">
						<div className="absolute top-[1rem] right-[1rem] w-[16rem] h-[16rem] hidden md:flex border-2 border-zinc-50 bg-image rounded-full lg:hidden">
							<div className="absolute top-[4rem] -right- sm:-right-[1rem] w-[8rem] h-[8rem] flex items-center justify-center bg-[#55b8ff] rounded-full">
								<span className="text-5xl font-bold">35%</span>
							</div>
						</div>

						<div className="w-full sm:w-[60%] lg:w-[50%] flex flex-col items-center lg:items-start justify-start mx-auto sm:mx-0 pl-5  py-10 md:pl-5 lg:pl-44">
							<div className="items-center justify-items-center gap-x-4 gap-y-5">
								<p className="mt-1 text-xl lg:text-2xl font-bold text-white lg:text-[#16191E]">
									Helping businesses succeed through the power
									of video.
								</p>
								<p className="mt-4 text-base font-medium text-white lg:text-[#16191ebd] leading-normal lg:leading-loose py-1 md:py-0">
									Helping businesses succeed through the power
									of video and content marketing that sets us
									apart from the competition and helps us stay
									ahead of the curve and achieve our goals for
									the future were we are here today to help
									you achieve your goals.
								</p>
								<div className="w-full flex items-start justify-start py-2 md:pt-2">
									<Button
										message="Sign Up"
										href="/auth?mode=signup"
										className="px-8 sm:px-12 py-2 text-base rounded-md border border-white text-white hover:bg-white hover:text-[#16191E] outline-none"
									/>
								</div>
							</div>
						</div>
						<div className="absolute top-[1rem] right-[1rem] hidden lg:flex w-[16rem] h-[16rem] flex-1 border-2 border-zinc-50 bg-image rounded-full">
							<div className="absolute top-[4rem] -right-[4rem] w-[8rem] h-[8rem] flex items-center justify-center bg-[#55b8ff] rounded-full">
								<span className="text-5xl font-bold">35%</span>
							</div>
						</div>
					</div>
				</div>

				
			</div> */}
			{/*  */}
{/* <<<<<<< HEAD */}

			
			<section class="text-gray-600">
  <div class="container mx-auto flex px-5 lg:px-24 py-10 md:py-20 md:flex-row flex-col items-center">
  <div class="lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://palavigarbhasanskar.com/wp-content/uploads/2024/02/vector-952x1024.png"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mt-10 md:mt-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Understanding <span className='text-yellow-700'> Garbhasanskar</span>
    
      </h1>
	  <div className='flex mb-4'>
		<img src="https://cdn-icons-png.freepik.com/256/1414/1414254.png?semt=ais_hybrid" className='size-10 rounded-full' alt="" />
		<img src="https://img.freepik.com/premium-photo/cute-woman-meditation-yoga-cartoon-vector-icon-illustration-people-sport-icon-concept-isolated-flat_839035-1015803.jpg" className='size-10 -ml-4 rounded-full' alt="" />
		<img src="https://cdn-icons-png.freepik.com/512/2906/2906476.png" className='size-10 rounded-full -ml-4' alt="" />
		<img src="https://cdn-icons-png.freepik.com/512/5001/5001175.png" className='size-10 rounded-full -ml-4' alt="" />
		<img src="https://images.onlymyhealth.com/imported/images/2020/April/25_Apr_2020/big_14-Color-Tharepy.jpg" className='size-10 rounded-full -ml-4' alt="" />
		<img src="https://thumbs.dreamstime.com/b/girl-listens-to-music-headphones-therapy-podcast-audiobook-radio-meditation-concept-profile-young-african-woman-vector-288627719.jpg" className='size-10 rounded-full -ml-4' alt="" />
	  </div>
      <p class="mb-8 leading-tight">Garbhasanskar is an ancient Indian practice that focuses on nurturing and educating the unborn child. The term "Garbhasanskar" is derived from two Sanskrit words: "Garbha" meaning "womb" and "Sanskar" meaning "ethics" or "values." It refers to a set of practices and rituals aimed at ensuring the physical, mental, and spiritual well-being of both the mother and the baby during pregnancy.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Explore</button>
      </div>
    </div>
    
  </div>
</section>
{console.log(initial_length)}
{/* {(initial_length>=1)?(<>
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
			</>):(<></>)} */}
			{/*  */}
			{/* <div
				id="campaign"
				className="max-w-7xl mx-auto px-5 pt-6 flex flex-col items-start justify-start selection:bg-[#0a755862]"
			>
				<div className="w-full flex flex-col items-center justify-center mt-8">
					<div className="w-full flex flex-col items-center justify-start">
						<div className="w-full flex items-center justify-start gap-5 ">
							<span className="text-3xl md:text-5xl font-semibold text-[#16191E]">
								Introduce Our Campaign
							</span>
						</div>
						<div className="w-full flex flex-col gap-3 md:gap-2 md:flex-row items-center justify-between">
							<span className="w-full text-sm md:text-base font-semibold text-[#868686] selection:text-[#16191E]">
								How do something great to help others
							</span>

							<span className="flex flex-row justify-center">
								<Button
									message="View All"
									icon={<FiArrowUpRight />}
									className="px-6 py-3 rounded-xl text-[#0a7558] "
									text={true}
									href={'/view-all'}
								/>
							</span>
						</div>
					</div>
					<div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-start">
						<PatientDonationCard
							title={'Help Donate For Cianjur Earthquake Victims'}
							tags={['Social Service']}
							description={
								'Help Donate for Cianjur Earthquake Victims by providing food, clothes, medicines for their daily needs.'
							}
							img={
								'https://c.ndtvimg.com/2023-02/3dp24qug_building_640x480_08_February_23.jpg'
							}
							amountRaised={'1250'}
							goal={'5000'}
							progress={'50'}
							href={'/donate'}
							buttonTitle={'Donate'}
							tagColor={'#dfdcfa'}
							tagTextColor={'#8c7cf9'}
						/>
						<PatientDonationCard
							title={'Campaign To Provide Books For Children'}
							tags={['Education']}
							description={
								'Campaign to provide quality books for children who are in need of proper education for their development.'
							}
							img={
								'https://pragya.org/assets/images/icons/1560508933_India_Issues_Inner_Edu1.jpg'
							}
							amountRaised={'2450'}
							goal={'3500'}
							progress={'70'}
							href={'/donate'}
							buttonTitle={'Donate'}
							tagColor={'#f9dce6'}
							tagTextColor={'#f96499'}
						/>
						<PatientDonationCard
							title={'Help Children Cancer Fighters'}
							tags={['Medical Help']}
							description={
								'Help the Children of Cancer Warriors to meet their needs for care and treatment as well as possible to achieve recovery.'
							}
							img={
								'https://st4.depositphotos.com/2249091/22137/i/450/depositphotos_221371480-stock-photo-weak-girl-cancer-wearing-pink.jpg'
							}
							amountRaised={'4050'}
							goal={'4500'}
							progress={'90'}
							href={'/donate'}
							buttonTitle={'Donate'}
							tagColor={'#cee3de'}
							tagTextColor={'#228268'}
						/>
					</div>
				</div>
			</div> */}
			
			<Glimpses></Glimpses>
			<div
				id="team"
				className="w-full max-w-7xl mx-auto px-3 pb-16 selection:bg-[#0a755862]"
			>
				<div className="w-full flex items-center justify-center gap-5 px-3 pb-5">
				<main className="flex py-6  md:pt-6   flex-1 w-full flex-col items-center justify-center text-center md:text-start px-4 sm:mt-0 mt-0">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          Our
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Team</span>
          </span>
        </h1>
      </main>
				</div>
				<div className="w-full flex items-center justify-center">
					<Carousel
						orientation="horizontal"
						opts={{
							align: 'start',
							loop: true,
						}}
					>
						<CarouselContent className=" w-[23rem] md:w-[44rem] lg:w-full	 ml-1 md:ml-0 py-5">
							{ini_team.map((info)=>{
								if(!info.tid) return null;
								const instaid = info.InataId;
								const facebookid = info.FBId;
								return(
									<>
										<CarouselItem className="px-5 basic-0  md:basis-1/2 lg:basis-[30%]">
								<TeamCard
									teamMemberName={info.Name}
									profession={info.Position}
									profileImage={info.ProfilImage}
									socialLinks={[
										{
											name: 'Linkedin',
											href: '#',
											icon: <IoLogoLinkedin size={24} />,
										},
										{
											name: 'Instagram',
											href: {instaid},
											icon: <IoLogoInstagram size={24} />,
										},
										{
											name: 'Facebook',
											href: {facebookid},
											icon: <BsFacebook size={24} />,
										},
									]}
								/>
							</CarouselItem>
									</>
								)
							})}
							{/* <CarouselItem className="px-5 basic-0  md:basis-1/2 lg:basis-1/3">
								<TeamCard
									teamMemberName="Shailja Mam"
									profession="Executive"
									profileImage={team1}
									socialLinks={[
										{
											name: 'Linkedin',
											href: '#',
											icon: <IoLogoLinkedin size={24} />,
										},
										{
											name: 'Instagram',
											href: '#',
											icon: <IoLogoInstagram size={24} />,
										},
										{
											name: 'Facebook',
											href: '#',
											icon: <BsFacebook size={24} />,
										},
									]}
								/>
							</CarouselItem>
							<CarouselItem className="px-5 basic-0  md:basis-1/2 lg:basis-1/3">
								<TeamCard
									teamMemberName="Shailja Mam"
									profession="Director"
									profileImage={team2}
									socialLinks={[
										{
											name: 'Linkedin',
											href: '#',
											icon: <IoLogoLinkedin size={24} />,
										},
										{
											name: 'Instagram',
											href: '#',
											icon: <IoLogoInstagram size={24} />,
										},
										{
											name: 'Facebook',
											href: '#',
											icon: <BsFacebook size={24} />,
										},
									]}
								/>
							</CarouselItem> */}
							
						</CarouselContent>
						<CarouselPrevious className="ml-[3.2rem] sm:ml-12 md:ml-[4rem]		 	md:-bottom-[2rem]" />
						<CarouselNext className="mr-10 sm:mr-12 md:-mr-[3rem] md:right-16	 md:-bottom-[2rem]" />
					</Carousel>
				</div>
				<div className="w-full h-auto  hidden  items-center justify-center ">
					<Carousel
						orientation="horizontal"
						opts={{
							align: 'start',
							loop: true,
						}}
					>
						<CarouselContent className=" w-[23rem] ml-1 md:ml-0 py-5">
							<CarouselItem className="px-5 basic-0  md:basis-1/2 lg:basis-1/3">
								<TeamCard
									teamMemberName="Vinay Kumar"
									profession="CEO 1"
									profileImage="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									socialLinks={[
										{
											name: 'Linkedin',
											href: '#',
											icon: <IoLogoLinkedin size={24} />,
										},
										{
											name: 'Instagram',
											href: '#',
											icon: <IoLogoInstagram size={24} />,
										},
										{
											name: 'Facebook',
											href: '#',
											icon: <BsFacebook size={24} />,
										},
									]}
								/>
							</CarouselItem>
							<CarouselItem className="px-5 basic-0  md:basis-1/2 lg:basis-1/3">
								<TeamCard
									teamMemberName="Sunil Kumar"
									profession="CEO 2"
									profileImage="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
									socialLinks={[
										{
											name: 'Linkedin',
											href: '#',
											icon: <IoLogoLinkedin size={24} />,
										},
										{
											name: 'Instagram',
											href: '#',
											icon: <IoLogoInstagram size={24} />,
										},
										{
											name: 'Facebook',
											href: '#',
											icon: <BsFacebook size={24} />,
										},
									]}
								/>
							</CarouselItem>
							
						</CarouselContent>
						<CarouselPrevious className="ml-[3.2rem] sm:ml-12 md:ml-32 	md:-bottom-44" />
						<CarouselNext className="mr-10 sm:mr-12 md:-mr-[3rem] md:-right-1 md:bottom-[9rem]" />
					</Carousel>
				</div>
			</div>
		</div>
		<Footer/>
		<ToastContainer/>
		</>
	);
};

export default Home;
