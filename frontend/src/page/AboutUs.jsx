import React from 'react';
import Button from '../components/Button';
import TeamCard from '../components/TeamCard';
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5';
import { FaFacebookF } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import Header from '../components/Header';
import Footer from '../components/Footer';
import missionimg from '../assets/misson-img.png';
import aboutimg3 from '../assets/aboutimg4.png';
import visionimg from '../assets/vision-img.png';
const AboutUs = () => {
	return ( <>
	<Header></Header>
	<div className="w-full h-full flex px-2 lg:px-0 flex-col items-center justify-center transition-all selection:bg-[#0a755862] py-5 space-y-8	">
			<div className="max-w-7xl w-full h-full grid grid-cols-1  lg:grid-cols-2">
				<div className="px-1 md:px-4">
					<div className="py-6 md:py-24">
						<div className="items-center justify-items-center gap-x-4 gap-y-5 ">
							<div className="flex items-center justify-center">
								<div className="px-2 space-y-4">
									<p className="text-xl  -mb-2 text-[#14161a] md:text-4xl">
										About Us
									</p>
									<p className="mt-1 text-4xl lg:text-5xl font-bold text-gray-800 ">
									सुफल : We care you!
									</p>
									<p className="mt-4 text-base font-medium text-[#868686] leading-relaxed py-1  md:py-0">
									मातृत्व अपने आप में सुखद एवं भावनात्मक अनुभव है, जिसे हर स्त्री जीना चाहती है। गर्भावस्था में शारीरिक व मानसिक परिवर्तनों के कारण अनजाना भय और तनाव होता है। गर्भावस्था के समय सुखद अनुभूति कर पायें एवं अपनी व गर्भस्थ शिशु की पूरी देखभाल भलीभांति कर पायें, इस उद्देश्य के लिए गर्भसंस्कार एक खुबसूरत प्रयास है। गर्भसंस्कार से श्रेष्ठ संतति का निर्माण संभव है एवं संस्कार देने का उत्तम समय है।

सुफल गर्भावस्था सपोर्ट ग्रुप है जिसमें प्रत्येक माह एक विषय विशेष पर चर्चा की जाएगी। इस प्रोग्राम में आप अपने परिवार के सदस्यों के साथ सम्मलित हो सकती हैं।














									</p>
									<div className="w-full bg-pink-600 text-white flex items-start justify-center py-1 md:py-2">
										An Initiative by Dr. Priya Bhave
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex h-full w-full p-3 mx-auto">
					<img
						className="mx-auto h-full w-full rounded-md object-cover"
						src={aboutimg3}
						alt=""
						height={500}
						draggable="false"
						loading="lazy"
					/>
				</div>
			</div>
			<div className="max-w-7xl w-full h-full grid grid-cols-1  lg:grid-cols-2">
				<div className="flex h-full w-full p-3 mx-auto">
					<img
						className="mx-auto h-full w-full rounded-md object-cover"
						src={missionimg}
						alt=""
						height={500}
						draggable="false"
						loading="lazy"
					/>
				</div>
				<div className="px-1 md:px-4">
					<div className="py-6 md:py-24">
						<div className="items-center justify-items-center gap-x-4 gap-y-5 ">
							<div className="flex items-center justify-center">
								<div className="px-2 space-y-4">
									<p className="text-xl  -mb-2 text-[#0f1114] md:text-4xl">
										Our Mission
									</p>
									<p className="mt-1 text-4xl lg:text-5xl font-bold text-gray-800 ">
										Empowering Motherhood
									</p>
									<p className="mt-4 text-base font-medium text-[#868686] leading-normal  py-1  md:py-0">
									Our mission at Sufal is to empower pregnant women through the transformative practice of Garbhasanskar. We strive to provide comprehensive prenatal care that nurtures mental, emotional, and spiritual well-being, fostering a positive environment for both mother and child. By promoting healthy living, positive thinking, and spiritual growth, we aim to enhance maternal health and ensure a harmonious and enriching pregnancy experience for all women we serve.
									</p>
									<div className="w-full bg-pink-600 text-white flex items-start justify-center py-1 md:py-2">
										Our Mission Is To Empower Motherhood
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-7xl w-full h-full grid grid-cols-1  lg:grid-cols-2">
				<div className="px-1 md:px-4">
					<div className="py-6 md:py-24">
						<div className="items-center justify-items-center gap-x-4 gap-y-5 ">
							<div className="flex items-center justify-center">
								<div className="px-2 space-y-4">
									<p className="text-xl  -mb-2 text-[#16191E] md:text-4xl">
										Our Vision
									</p>
									<p className="mt-1 text-4xl lg:text-5xl font-bold text-gray-800 ">
										Holistic Careful Pregnancy
									</p>
									<p className="mt-4 text-base font-medium text-[#868686] leading-normal py-1  md:py-0">
									Our vision at Sufal is to create a world where every pregnancy is celebrated and supported with holistic care. We envision a future where the ancient wisdom of Garbhasanskar is integrated into modern prenatal practices, empowering mothers to cultivate a nurturing environment for their unborn children. Through education, community support, and spiritual guidance, we aim to foster generations of healthy, happy, and well-rounded individuals, contributing to a more compassionate and harmonious society.
									</p>
									<div className="w-full bg-pink-600 text-white flex items-start justify-center py-1 md:py-2">
										To Create World of Holistic Careful Pregnancy
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex h-full w-full p-3 mx-auto">
					<img
						className="mx-auto h-full w-full rounded-md object-cover"
						src={visionimg}
						alt=""
						height={500}
						draggable="false"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
		<div className="h-20"></div>
		<Footer></Footer>
	</>
		
	);
};

export default AboutUs;
