import React, { useEffect, useState } from "react";
import Headers from "./Header"
import footer from "./Footer"
import Footer from "./Footer";
import axios from "axios"
import { useParams } from "react-router-dom";
import {ref,uploadBytes,getStorage ,getDownloadURL,deleteObject} from "firebase/storage";
const TeamReadMore = ()=>{
    const {id} = useParams();
    const [initial,final] = useState();
    const [profile,setprofile] = useState();
    const getdata = async()=>{
        try {
            const response = await axios.get(`https://backendsufal-shreyash-sanghis-projects.vercel.app/getPerticulatTeamMember/${id}`)
          const storage = getStorage();
          const imgref = ref(storage,`files/${response.data.result.ProfilImage}`);
          getDownloadURL(imgref).then((url) => { 
            setprofile(url)
          })
          final(response.data.result);
        } catch (error) {
            alert(error);
        }
    }
    useEffect(()=>{
     getdata();
    },[])
return(
    <>
    <Headers/>
{(initial === undefined)?(<>Loding...</>):(<>
    <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-20 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className=" size-40 md:size-64 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  {(profile!= undefined)?(<>
                                    <img src={profile} alt="" />
                  </>):(<></>)}
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{initial.Name                  }</h2>
                  <div className="w-24 h-1 bg-pink-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">{initial.Position}</p>
                  <p className="text-base">Contact Number : {initial.Number}</p>
                  <div className='flex mb-2 mt-6 md:hidden'>
		<img src="https://www.pngitem.com/pimgs/m/349-3495154_gynaecology-obstetrics-icon-png-download-gynaecology-obstetrics-icon.png" className='size-10 rounded-full' alt="" />
        <img src="  https://cdn.pixabay.com/photo/2017/05/15/23/47/stethoscope-icon-2316460_1280.png" className='size-10 rounded-full ' alt="" />

        <img src="https://images.vexels.com/content/130266/preview/female-athlete-circle-icon-52e338.png" className='size-10 rounded-full' alt="" />
		<img src="https://cdn-icons-png.freepik.com/512/172/172011.png" className='size-10 rounded-full ' alt="" />
		<img src="https://cdn-icons-png.flaticon.com/512/6592/6592099.png" className='size-10 rounded-full ' alt="" />
        <img src="https://cdn-icons-png.flaticon.com/512/8962/8962780.png" className='size-10 rounded-full ' alt="" />
		<img src="https://cdn-icons-png.flaticon.com/512/1312/1312585.png" className='size-10 rounded-full ' alt="" />
		
	  </div>
                </div>
              </div>
              <div className="sm:w-2/3 flex flex-col justify-center sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <div className=' mb-2 mt-6 hidden md:flex'>
		<img src="https://www.pngitem.com/pimgs/m/349-3495154_gynaecology-obstetrics-icon-png-download-gynaecology-obstetrics-icon.png" className='size-10 rounded-full' alt="" />
		<img src="https://images.vexels.com/content/130266/preview/female-athlete-circle-icon-52e338.png" className='size-10 rounded-full' alt="" />
		<img src="https://cdn-icons-png.flaticon.com/512/8962/8962780.png" className='size-10 rounded-full ' alt="" />
		<img src="https://cdn-icons-png.flaticon.com/512/1312/1312585.png" className='size-10 rounded-full ' alt="" />
		<img src="  https://cdn.pixabay.com/photo/2017/05/15/23/47/stethoscope-icon-2316460_1280.png" className='size-10 rounded-full ' alt="" />
		<img src="https://cdn-icons-png.freepik.com/512/172/172011.png" className='size-10 rounded-full ' alt="" />
		<img src="https://cdn-icons-png.flaticon.com/512/6592/6592099.png" className='size-10 rounded-full ' alt="" />
	  </div>
      <p className="leading-relaxed text-sm mb-4">
{initial.About}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class=" body-font">
  <div class="container px-5 py-0 md:py-20 mx-auto">
    <div class="text-center mb-8">
    <main className="flex pt-6  md:pt-6   flex-1 w-full flex-col items-center justify-center text-center md:text-start px-4 sm:mt-0 mt-0">
        <h1 className="mx-auto max-w-4xl font-display mt-14 text-4xl font-bold tracking-normal sm:text-5xl">
          Achievements <br className='md:hidden' />
          {/* <span className="relative whitespace-nowrap text-pink-700">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-yellow-300/90"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative ml-4">Positions</span>
          </span> */}
        </h1>
      </main>
    </div>
    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
    {initial.Achivements.map((info)=>{
        return(
            <div class="p-2 sm:w-1/2 w-full">
            <div class="bg-blue-100 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">{info.value}</span>
            </div>
          </div>
        )
    })}
  

      
    </div>
  </div>
</section>

      <div class="  flex flex-col justify-center items-center w-full  mx-auto">
<div class=" text-4xl px-5 md:text-start text-center font-semibold   pt-14 pb-8 mx-auto">
        <h1 className='font-semibold'><span className="text-pink-700 font-semibold">Proud</span> Awards</h1>
    </div>
  <div class="flex  mx-auto grid-cols-2 pb-10 justify-center text-center place-content-center items-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">

  {initial.Awards.map((info)=>{
    return(
        <>
         <div class="border border-gray-400 w-full  border-opacity-50 rounded-lg flex flex-col justify-center p-4">
     {/* <img src='https://www.pngall.com/wp-content/uploads/5/Star-Award-PNG-Image.png' className='size-14 self-center' /> */}
 
         
           <h2 class="text-xs text-gray-700 font-medium title-font lg:mt-4 mt-3 ">{info.value}</h2>
     </div>
        </>
    )
    
 })}
   
    

    

   

  </div>
</div>
</>)}
<Footer/>
    </>
)
}

export default TeamReadMore;