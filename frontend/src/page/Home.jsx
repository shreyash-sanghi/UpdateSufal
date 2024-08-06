import React, { useEffect, useState } from 'react';
import herogif from '../assets/herogiffinal.mp4';
import Button from '../components/Button';
import { GrUserExpert } from "react-icons/gr";
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Carousel2 from '../components/Carousel2';
import garbhavideo from '../assets/garbha-video.mp4';
import EUI from '../extraComponent/EUI';
import EJim from '../extraComponent/EJim';
import EInvestBusiness from '../extraComponent/EInvestBusiness';


import {ref,uploadBytes,getStorage ,getDownloadURL,deleteObject} from "firebase/storage";
import team3 from '../assets/mam5.png';
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
import aboutimg from '../assets/aboutimgfinal.png';
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
       const response = await axios.get(`https://backendsufal-shreyash-sanghis-projects.vercel.app/get_team_data`);
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
	  const result = await axios.get(`https://backendsufal-shreyash-sanghis-projects.vercel.app/user_auth`);
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
   }
  }
	  useEffect(()=>{
		  if(token != null || token != undefined){
			  verifytoken();
		  }
	  },[])

	  const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: true
			}
		  },
		  {
			breakpoint: 768,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };
	
	  const images = [
		"image1.jpg",
		"image2.jpg",
		"image3.jpg",
		"image4.jpg",
		"image5.jpg",
		"image6.jpg"
	  ];
	
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
						<span className="text-4xl md:text-5xl font-semibold leading-tight md:leading-normal">
						स्वस्थ गर्भधारण का पोषण: आपकी यात्रा, हमारा समर्थन।
						</span>
						<span className="w-full text-base font-semibold text-[#868686] selection:text-[#16191E]">
						We provide essential support to expectant mothers worldwide.
						</span>
					</div>
					<div className="w-full flex flex-col items-start justify-start gap-5">
						<InfoCard
							title={'स्वस्थ गर्भावस्था'}
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
							title={'गर्भावस्था पूर्व देखभाल'}
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
							title={' सहायता तथा समर्थन'}
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
			<EUI></EUI>
			

		



			<div
				id="categories"
				className="max-w-7xl mx-auto px-5 md:px-0 py-10 flex flex-col items-start justify-start selection:bg-[#0a755862]"
			>
				<div className="w-full flex flex-col items-center justify-center space-y-4">
					<span className="text-3xl font-medium text-[#f0c048]">
					सुफल में सुविधाएँ
					</span>
					<span className="text-3xl md:text-4xl text-center md:text-start lg:text-5xl font-semibold text-[#16191E] ">
						Empowering Beloved Mothers !
					</span>
				</div>
				<div className="w-full grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-5 items-center justify-center gap-2 md:gap-4 mt-8">
					<Card
						title={'योग विशेषज्ञ'}
						
						icon={
							<ImWoman
								size={44}
								color={'#fbd066'}
							/>
						}
						color={'#fef3d7'}
					/>
					<Card
						title={'आहार विशेषज्ञ'}
						
						icon={
							<PiBowlFood
								size={44}
								color={'#009F6B'}
							/>
						}
						color={'#D0F0C0'}
					/>
					<Card
						title={'मनोविज्ञानी'}
						
						icon={
							<GiMedicines
								size={44}
								color={'#478ef9'}
							/>
						}
						color={'#e0ecfe'}
					/>
					
					<Card
						title={'ध्वनि चिकित्सा'}
						
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

			<EJim></EJim>
			
<Carousel2></Carousel2>
			<EInvestBusiness></EInvestBusiness>

			<div
				id="team"
				className="w-full max-w-7xl mx-auto px-3 pb-16 selection:bg-[#0a755862]"
			>
				<div className="w-full flex items-center justify-center gap-5 px-3 pb-5">
				<main className="flex py-6  md:pt-6   flex-1 w-full flex-col items-center justify-center text-center md:text-start px-4 sm:mt-0 mt-0">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
		हमारे 
          <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">विशेषज्ञ</span>
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
						<CarouselContent className=" w-[23rem] md:w-[35rem] lg:[90%]	 ml-1 md:ml-0 py-5">
							{ini_team.map((info)=>{
								if(!info.tid) return null;
								const instaid = info.InataId;
								const facebookid = info.FBId;
								return(
									<>
										<CarouselItem className="px-5 basic-0 md:w-1/3 sm:w-1/2 w-full lg:w-1/4 py-2  md:basis-1/2 lg:basis-[30%]">
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
							
							
						</CarouselContent>
						<CarouselPrevious className="ml-[3.2rem] sm:ml-12 md:ml-[4rem]		 	md:-bottom-[2rem]" />
						<CarouselNext className="mr-10 sm:mr-12 md:-mr-[3rem] md:right-16	 md:-bottom-[2rem]" />
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
