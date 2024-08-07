import React from 'react';
import Header from './components/Header';
import { colorTheme } from './constants/colorTheme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Auth from './page/Auth';
import AboutUs from './page/AboutUs';
import ContactUs from './page/ContactUs';
import Campaign from './page/Campaign';
import SupportUs from './page/SupportUs';
import Footer from './components/Footer';
import Categories from './page/Categories';
import Dashboard from './components/Dashboard/Dashboard';
import Event from './components/Dashboard/Events/Event';
import CreateRegisterForm from './components/CreateRegisterForm';
import UplodeMultipleImage from './components/Dashboard/UplodeMultipleImage';
import AddEvent from './components/Dashboard/Events/AddEvents';
import ViewRegister from './components/Dashboard/Events/ViewRegister';
import CreateTeam from './components/Dashboard/CreateTeam';
import MyTeam from './components/Dashboard/Myteam';
import EditProfile from './components/Dashboard/EditProfile';
import Events from './page/Events';
import { useTranslation } from 'react-i18next';
import Volunteer from './page/Volunteer.jsx';
import LanguageSelector from './components/LanguageSelector.jsx';
import OurTeam from './page/OurTeam.jsx';
import ViewPastEvent from './components/Dashboard/ViewPastEvent.jsx';
import VolunteerData from './components/Dashboard/VolunteerData.jsx';
import EventDetails from './components/EventDetails.jsx';
import PriyaMam from './page/PriyaMam.jsx';
import TeamReadMore from './components/TeamReadMore.jsx';
import VideoGallery from './page/VideoGallery.jsx';
import PhotoGallery from './page/PhotoGallery.jsx';
import AddAndUpdatePhoto from './components/Dashboard/AddAndUpdatePhoto.jsx';
import AddAndUpdateVideo from './components/Dashboard/AddAndUpdateVideo.jsx';
import UplodePhotoWithDate from './components/Dashboard/UplodePhotoWithDate.jsx';
import PhotoGalleryWithDate from './page/PhotoGalleryWithDate.jsx';
import EditAnEvent from './components/Dashboard/Events/EditAnEvent.jsx';
const App = () => {
	const {t} = useTranslation();
	return ( 
		<BrowserRouter>
			<div className="w-full h-full min-h-screen flex flex-col bg-[#fefaf6] text-[#16191E]">
			{/* <LanguageSelector></LanguageSelector> */}
				<main className="flex-1 w-full">
					<AppRouter />
				</main>
				
			</div>
		</BrowserRouter>
	);
};

export default App;

export const AppRouter = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/auth"
				element={<Auth />}
			/>
			<Route
				path="/about-us"
				element={<AboutUs />}
			/>
			<Route
				path="/categories"
				element={<Categories />}
			/>
			<Route
				path="/events"
				element={<Events />}
			/>
			<Route
				path="/blogs"
				element={<span>News</span>}
			/>
			<Route
				path="/volunteer"
				element={<Volunteer/>}
			/>
			<Route
				path="/contact-us"
				element={<ContactUs />}
			/>
			<Route
				path="/photo-gallery"
				element={<PhotoGallery />}
			/>
					<Route
				path="/photo_gallery_with_date"
				element={<PhotoGalleryWithDate />}
			/>
			<Route
				path="/video-gallery"
				element={<VideoGallery />}
			/>
			<Route
				path="/our-team"
				element={<OurTeam />}
			/>
			<Route
				path="/uplode_event_image/:eid"
				element={<UplodeMultipleImage />}
			/>
			<Route
				path="/past_event/:eid"
				element={<EventDetails/>}
			/>

<Route
				path="/view_past_event/:eid"
				element={<ViewPastEvent/>}
			/>
			<Route  path="/dr-priya-bhave-chittawar" element={<PriyaMam />}></Route>

			{/* Backend routes */}
			<Route exact path="/dashboard" Component={Dashboard}></Route>
			<Route exact path="/event/:kind_of_event" Component={Event}></Route>
        <Route exact path="/event/:kind_of_event/:rid" Component={Event}></Route>
        <Route exact path="/book/register_booking/:rid" Component={CreateRegisterForm}></Route>
		<Route exact path="/add_event" Component={AddEvent}></Route>
		<Route exact path="/new_member" Component={CreateTeam}></Route>
		<Route exact path="/my_team" Component={MyTeam}></Route>
		<Route exact path="/edit_profile/:id" Component={EditProfile}></Route>
		<Route exact path="/view_register/:Eid" Component={ViewRegister}></Route>
		<Route exact path="/volunteer_with_us" Component={VolunteerData}></Route>
		<Route exact path="/team_readMore/:id" Component={TeamReadMore}></Route>
		<Route exact path="/add_photo" Component={AddAndUpdatePhoto}></Route>
		<Route exact path="/add_video" Component={AddAndUpdateVideo}></Route>
		<Route exact path="/uplode_photo_with_date" Component={UplodePhotoWithDate}></Route>
		<Route exact path="/edit_event/:id" Component={EditAnEvent}></Route>
		</Routes>
	);
};