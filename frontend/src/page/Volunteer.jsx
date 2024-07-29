import {React,useState} from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Button from '../components/Button';
import ContactUsCard from '../components/ContactUsCard';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoCall, IoMail } from 'react-icons/io5';
import Header from '../components/Header';
import Footer from '../components/Footer';
import contactimg from '../assets/contact-img3.png';
import volunteerimg from '../assets/Volunteer-img2.png';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactUs = () => {
	const navigate = useNavigate();
	const [initial, final] = useState({
        FName: "",
        LName: "",
        Email: "",
        Number: "",
        DOB: "",
        WhyYouWantToJoin: "",
      })

	  const setdata = (e)=>{
		const {name,value} = e.target;
		final((info)=>{
           return{
			...info,
			[name]:value
		   }
		})
	  }

	  const savedata = async(e)=>{
		try{
			e.preventDefault();
			const {FName,LName,Email,Number,DOB,WhyYouWantToJoin} = initial;
   const result = await axios.post(`https://backendsufal-shreyash-sanghis-projects.vercel.app/save_volunteer_data`,{
	FName,LName,Email,Number,DOB,WhyYouWantToJoin
   })
   setTimeout(()=>{
	   toast("Success");

   },1000)
   navigate("/")
		}catch(error){
			toast(error);
		}
	  }
	return (
		<>
		<Header></Header>
		<div
			id="contact-us"
			className="w-full h-full flex flex-col items-center justify-center transition-all selection:bg-[#0a755862]   "
		>
			<div className="max-w-7xl w-full h-full grid grid-cols-1  lg:grid-cols-2">
				<div className="mx-auto  px-3 md:px-0">
					<div className="w-full  py-12 md:py-24">
						<div className="items-center justify-items-center gap-x-4 gap-y-10 ">
							<div className="flex items-center justify-center">
								<div className="px-2">
									<p className="text-4xl sm:text-5xl  font-bold text-[#16191E] md:text-4xl">
										Volunteer Us
									</p>
									<p className="mt-4 text-lg text-[#16191E] leading-tight">
										Support & Serve in our mission towards healthier pregnancies.
									</p>
									<form

										className="mt-8 space-y-6"
									>
										<div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
											<div className="grid w-full  items-center gap-1.5">
												<label
													className="text-sm font-medium leading-none text-[#16191E] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
													htmlFor="first_name"
												>
													First Name
												</label>
												<input
													className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-[#16191E] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-[#16191E] dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
													type="text"
													id="first_name"
													placeholder="First Name"
													name="FName"
													onChange={setdata}
												/>
											</div>
											<div className="grid w-full  items-center gap-1.5">
												<label
													className="text-sm font-medium leading-none text-[#16191E] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
													htmlFor="last_name"
												>
													Last Name
												</label>
												<input
													className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-[#16191E] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-[#16191E] dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
													type="text"
													id="last_name"
													placeholder="Last Name"
													name="LName"
													onChange={setdata}
												/>
											</div>
										</div>
										<div className="grid w-full  items-center gap-1.5">
											<label
												className="text-sm font-medium leading-none text-[#16191E] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												htmlFor="email"
											>
												Email
											</label>
											<input
												className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-[#16191E] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-[#16191E] dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
												type="text"
												id="email"
												placeholder="Email"
												name="Email"
													onChange={setdata}
											/>
										</div>
										<div className="grid w-full  items-center gap-1.5">
											<label
												className="text-sm font-medium leading-none text-[#16191E] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												htmlFor="phone_number"
											>
												Phone number
											</label>
											<input
												className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-[#16191E] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-[#16191E] dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
												type="number"
												id="phone_number"
												placeholder="Phone number"
												name="Number"
													onChange={setdata}
											/>
										</div>
                                        <div className="grid w-full  items-center gap-1.5">
											<label
												className="text-sm font-medium leading-none text-[#16191E] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												htmlFor="message"
											>
												Date of Birth
											</label>
											<input
												className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-[#16191E] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-[#16191E] dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
												id="message"
												type='date'
												placeholder="Ex : 25th November, 2003"
												name="DOB"
													onChange={setdata}
												
											/>
										</div>
										<div className="grid w-full  items-center gap-1.5">
											<label
												className="text-sm font-medium leading-none text-[#16191E] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												htmlFor="message"
											>
												Why you want to join us ?
											</label>
											<textarea
												className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-[#16191E] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-[#16191E] dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
												id="message"
												placeholder="Leave us a message"
												name="WhyYouWantToJoin"
													onChange={setdata}
												rows={8}
												cols={8}
											/>
										</div>
                                        
                                        

										<div className="w-full flex items-center justify-start gap-1.5">
											<input
												id="link-checkbox"
												type="checkbox"
												value=""
												class="w-4 h-4 text-[#0a7558] focus:ring-[#0a7558] mr-2 bg-gray-100 border-gray-300 rounded   "
											/>
											<label
												for="link-checkbox"
												class="text-sm font-medium text-[#14191E] dark:text-[#16191E]"
											>
												You agree to our friendly{' '}
												<span class="text-[#0a7558] dark:text-[#0a7558] hover:underline">
													privacy policy
												</span>
												.
											</label>
										</div>

										{/* <Button
								 
											message={'Send Message'}
											className="px-3 md:px-6 py-2.5 rounded-md bg-[#0a7558] "
											text={true}
											containerWidth={true}
											onClick={()=>savedata()}
										/> */}
										<button
											// message={'Send Message'}
											className="px-3 md:px-6 py-2.5 text-white rounded-md bg-[#0a7558] "
											text={true}
											containerWidth={true}
											onClick={savedata}
										>Send Message</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="lg:flex h-full w-full p-2 mx-auto">
					<img
						className="mx-auto h-full w-full rounded-md object-contain"
				src={volunteerimg}
						alt=""
						height={500}
						draggable="false"
						loading="lazy"
					/>
				</div>
			</div>
			
		</div>
		<Footer></Footer>
		<ToastContainer/>
		</>
		
	);
};

export default ContactUs;
