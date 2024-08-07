import { React, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ref, getStorage, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const OurTeam = () => {
  const navigate = useNavigate();
  const [ini_team, final_team] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTeamData = async () => {
    try {
      const response = await axios.get(`https://backendsufal-shreyash-sanghis-projects.vercel.app/get_team_data`);
      const result = response.data.result;

      // Fetch image URLs and sort the data by Sequence
      const sortedTeamData = await Promise.all(result.map(async (info) => {
        const storage = getStorage();
        const imgref = ref(storage, `files/${info.ProfilImage}`);
        const url = await getDownloadURL(imgref);
        return {
          tid: info._id,
          ProfilImage: url,
          Name: info.Name,
          Position: info.Position,
          InataId: info.InataId,
          FBId: info.FBId,
          Sequence: info.Sequence,
          About: info.About,
        };
      }));

      // Sort the team data by Sequence
      sortedTeamData.sort((a, b) => a.Sequence - b.Sequence);

      // Update the state with the sorted data
      final_team(sortedTeamData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast(error.message);
    }
  };

  useEffect(() => {
    getTeamData();
  }, []);

  return (
    <>
      <Header />
      <main className="flex lg:py-10 flex-1 w-full flex-col items-center justify-center text-center md:text-start px-4 sm:mt-0 pt-16 ">
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
            <span className="relative ml-4"> विशेषज्ञ</span>
          </span>
        </h1>
      </main>

      {loading ? (
        <div className="flex flex-col gap-10 w-[80%] justify-center mx-auto">
          <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
              </svg>
            </div>
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="p-6 lg:px-24 dark:text-gray-100">
          {ini_team.map((info) => {
            if (!info.tid) return null;
            return (
              <div key={info.tid} className="flex flex-col pt-8 space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <img
                  src={info.ProfilImage}
                  alt=""
                  className="self-center flex-shrink-0 size-32 lg:size-48 border rounded-xl md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
                />
                <div className="flex flex-col">
                  <h4 className="text-lg lg:text-xl font-semibold text-center md:text-left">
                    {info.Name}
                  </h4>
                  <h4 className="text-lg text-gray-600 mb-2 font-semibold text-center md:text-left">
                    {info.Position}
                  </h4>
                  <p className="dark:text-gray-400 text-sm line-clamp-6 lg:line-clamp-5">
                    <span className="font-bold">About :</span> {info.About}
                  </p>
                  <div className="flex justify-start pt-2 space-x-4 align-center">
                    {info.Name === "Dr. Priya Bhave Chittawar" ? (
                      <button
                        onClick={() => navigate(`/dr-priya-bhave-chittawar`)}
                        rel="noopener noreferrer"
                        className="py-1 rounded-md bg-pink-600 text-white px-6 text-xs hover:dark:text-violet-400"
                      >
                        Read ...
                      </button>
                    ) : (
                      <button
                        onClick={() => navigate(`/team_readMore/${info.tid}`)}
                        rel="noopener noreferrer"
                        className="py-1 rounded-md bg-pink-600 text-white px-6 text-xs hover:dark:text-violet-400"
                      >
                        Read ...
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="h-20"></div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default OurTeam;
