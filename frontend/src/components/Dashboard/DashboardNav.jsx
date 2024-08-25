import {React,useEffect,useState} from 'react'
import { Link ,NavLink, useNavigate} from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import axios from 'axios';
const DashboardNav = ()=>{
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

      // Toggle function to handle the navbar's display
      const handleNav = () => {
        setNav(!nav);
      };
  const logout = ()=>{
    localStorage.clear("token");
    navigate("/");
  }
  useEffect(()=>{
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
  },[])

  const navPath = [
    {Name:"Add an event",Path:"/add_event"},
    {Name:"Add Team Member",Path:"/new_member"},
    {Name:"My Photo Gallery",Path:"/add_photo"},
    {Name:"Photo With Date",Path:"/uplode_photo_with_date"},
    {Name:"My Team",Path:"/my_team"},
    {Name:"Current event",Path:"/event/current_event"},
    {Name:"Past event",Path:"/event/past_event"},
    {Name:"Volunteer With Us",Path:"/volunteer_with_us"},
    {Name:"Registration Record",Path:"/event/registration_record"},
  ]
    return(
        <>
            <div className="p-3 space-y-2 hidden md:block min-h-screen border-white    bg-gray-900 text-white  w-[16%] ">
          <div className="flex items-center justify-center mr-3 p-2 ">
              <h2 className="text-lg font-bold">Dashboard</h2>
            
          </div>
          <div className="divide-y  dark:divide-gray-700 max-w-xs ">
            <ul className="pt-2 pb-4 space-y-1  text-sm">
 {navPath.map((info)=>{

  return(
    <li>
    <Link
     to={`${info.Path}`}
      className="flex items-center font-semibold p-2 space-x-3 rounded-md"
    >
    <svg class="w-6 h-6 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
<path fill-rule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v6.41A7.5 7.5 0 1 0 10.5 22H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clip-rule="evenodd"/>
<path fill-rule="evenodd" d="M9 16a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-3a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>
</svg>

      <span >{info.Name}</span>
    </Link>
  </li>
  )
 })}
         
    
   

            </ul>
            <ul className="pt-4 pb-2 space-y-1 text-sm">
            <button onClick={logout}>
              <li>
                <div className="flex items-center font-semibold p-2 space-x-3 rounded-md">
                <svg class="w-6 h-6 mr-2 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M10 5a2 2 0 0 0-2 2v3h2.4A7.48 7.48 0 0 0 8 15.5a7.48 7.48 0 0 0 2.4 5.5H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1V7a4 4 0 1 1 8 0v1.15a7.446 7.446 0 0 0-1.943.685A.999.999 0 0 1 12 8.5V7a2 2 0 0 0-2-2Z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M10 15.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Zm6.5-1.5a1 1 0 1 0-2 0v1.5a1 1 0 0 0 .293.707l1 1a1 1 0 0 0 1.414-1.414l-.707-.707V14Z" clip-rule="evenodd"/>
</svg>

                  Logout
                  </div>
              </li>
                  </button>
            </ul>
          </div>
        </div>
        <div class=" pl-10 py-3 md:hidden ">
            <svg onClick={handleNav} class="fill-current  text-white h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z"/></svg>
          </div>

              {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0  top-0 w-full sm:w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-full  sm:w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >

 <div className="flex z-999 justify-between bg-gray-900 items-center">
        <h1 className='w-full text-3xl font-bold text-[#9fa3a3] m-4'>Dashboard</h1>

          <div onClick={handleNav} className='block pr-5 text-white md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
           </div>
        </div>

          <div className="divide-y  dark:divide-gray-700 max-w-xs ">
            <ul className="pt-2 pb-4 space-y-1 text-white  text-sm">
            {navPath.map((info)=>{

return(
              <li>
                <Link
                 to={`${info.Path}`}
                  className="flex items-center  font-semibold p-2 space-x-3 rounded-md"
                >
                <svg class="w-6 h-6 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v6.41A7.5 7.5 0 1 0 10.5 22H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M9 16a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm6-3a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>
</svg>

                  <span >{info.Name}</span>
                </Link>
              </li>
 
)})}

            </ul>
            <ul className="pt-4 pb-2 space-y-1 text-sm">
            <button onClick={logout}>
              <li>
                <div className="flex items-center text-white font-semibold p-2 space-x-3 rounded-md">
                <svg class="w-6 h-6 mr-2 text-gray-100 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M10 5a2 2 0 0 0-2 2v3h2.4A7.48 7.48 0 0 0 8 15.5a7.48 7.48 0 0 0 2.4 5.5H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1V7a4 4 0 1 1 8 0v1.15a7.446 7.446 0 0 0-1.943.685A.999.999 0 0 1 12 8.5V7a2 2 0 0 0-2-2Z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M10 15.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Zm6.5-1.5a1 1 0 1 0-2 0v1.5a1 1 0 0 0 .293.707l1 1a1 1 0 0 0 1.414-1.414l-.707-.707V14Z" clip-rule="evenodd"/>
</svg>

                  Logout
                  </div>
              </li>
                  </button>
            </ul>
          </div>
      </ul>
        </>
    )
}

export default DashboardNav;