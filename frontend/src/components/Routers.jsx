import React from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard/Dashboard";
import AddEvent from "./Dashboard/Events/AddEvents";
import Event from "./Dashboard/Events/Event";
import CreateRegisterForm from "./CreateRegisterForm";
import VideoGallery from "../page/VideoGallery";
import PhotoGallery from "../page/PhotoGallery";
import AddAndUpdatePhoto from "./Dashboard/AddAndUpdatePhoto";
const Routers = ()=>{
    return(
        <>
      <Routes>
      <Route exact path="/" Component={Home}></Route>
      <Route exact path="/photo-gallery" Component={PhotoGallery}></Route>
      <Route exact path="/video-gallery" Component={VideoGallery}></Route>
        <Route exact path="/signin" Component={SignIn}></Route>
        <Route exact path="/signup" Component={SignUp}></Route>
        <Route exact path="/dashboard" Component={Dashboard}></Route>
        <Route exact path="/add_event/:about_type" Component={AddEvent}></Route>
        <Route exact path="/event/:kind_of_event" Component={Event}></Route>
        <Route exact path="/event/:kind_of_event/:rid" Component={Event}></Route>
        <Route exact path="/create_form" Component={CreateRegisterForm}></Route>
        <Route exact path="/add_photo" Component={AddAndUpdatePhoto}></Route>
        
        
     </Routes>  
        </>
    )
}

export default Routers;