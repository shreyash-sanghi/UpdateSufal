import React,{lazy,Suspense} from "react";
import { Routes,Route } from "react-router-dom";
import Home from "./Home";

const AddAndUpdatePhoto = lazy(()=>import("./Dashboard/AddAndUpdatePhoto"));
const CreateRegisterForm = lazy(()=>import("./CreateRegisterForm"));
const Event = lazy(()=>import("./Dashboard/Events/Event"));
const AddEvent = lazy(()=>import("./Dashboard/Events/AddEvents"));
const Dashboard = lazy(()=>import("./Dashboard/Dashboard"));
const SignUp = lazy(()=>import("./SignUp"));
const SignIn = lazy(()=>import("./SignIn"));
const VideoGallery = lazy(()=>import("../page/VideoGallery"));
const PhotoGallery = lazy(()=>import("../page/PhotoGallery"));

const Routers = ()=>{
    return(
        <>
      <Routes>
      <Route exact path="/" Component={Home}></Route>
      <Suspense fallback={<div>loading</div>}>
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
      </Suspense>
      
        
        
     </Routes>  
        </>
    )
}

export default Routers;