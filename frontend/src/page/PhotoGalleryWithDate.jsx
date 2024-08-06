import React, { useEffect, useState } from "react";
import axios from "axios";
import { ref, getStorage, getDownloadURL } from "firebase/storage";
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PhotoGalleryWithDate = () => {
  const [myPhotos, setMyPhotos] = useState([]);

  const getMyPhotos = async () => {
    try {
      const result = await axios.get(`https://backendsufal-shreyash-sanghis-projects.vercel.app/get_image_with_date`);
      if (result.data.result != null) {
        const photoData = await Promise.all(
          result.data.result.map(async (photoId) => {
            const storage = getStorage();
            const imgref = ref(storage, `files/${photoId.Image}`);
            const url = await getDownloadURL(imgref);
            return { ImageUrl: url, ImageDate: photoId.ImageDate };
          })
        );
        setMyPhotos(photoData);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getMyPhotos();
  }, []);

  // Group photos by year
  const photosByYear = myPhotos.reduce((acc, photo) => {
    const year = new Date(photo.ImageDate).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(photo);
    return acc;
  }, {});

  return (
    <>
      <Header />
      <main className="flex lg:py-10 flex-1 w-full flex-col items-center justify-center text-center md:text-start px-4 sm:mt-0 pt-16">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal sm:text-5xl">
          Photo
          <span className="relative whitespace-nowrap text-pink-700">
            <span className="relative ml-4">Gallery</span>
          </span>
        </h1>
      </main>
      <div className="gallery py-10 sm:py-6 md:py-2 px-10 sm:px-16">
        {Object.keys(photosByYear).map((year) => (
          <div className="flex flex-col" key={year}>
            <h2 className="text-2xl font-bold mb-4">{year}</h2>
            <div className="year-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {photosByYear[year].map((image, index) => (
                <div key={index}>
                  <img src={image.ImageUrl} className="rounded-xl" alt={`Image taken in ${year}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="h-20"></div>
      <Footer />
    </>
  );
};

export default PhotoGalleryWithDate;
