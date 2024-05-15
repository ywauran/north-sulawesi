/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import Sampiro from "../assets/sampiro.jpg";
import Danau from "../assets/danau.jpg";
import Sara from "../assets/sara.jpg";
import Moat from "../assets/moat.jpg";
import Pantai from "../assets/pantai.jpg";

const images = [Sampiro, Danau, Sara, Moat, Pantai];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="beranda">
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="flex-shrink-0 object-cover w-full h-full"
            />
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent via-transparent to-black"></div>
        <div className="absolute top-0 flex flex-col justify-center w-full h-full text-center text-theme1">
          <h1 className="text-5xl font-black">North Sulawesi My Destination</h1>
          <p className="mx-5 text-base">
            Aplikasi Berbasis Website Sebagai Sarana Rekomendasi Destinasi
            Wisata Di Provinsi Sulawesi Utara
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
