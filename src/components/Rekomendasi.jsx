import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import { getDestinationsRecommended } from "../utils/data";
import ImageDefault from "../assets/default.png";
import { intToString } from "../utils/helper";
const Rekomendasi = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    setDestinations(getDestinationsRecommended());
  }, []);

  return (
    <section id="Rekomendasi">
      <div className="w-full min-h-[91vh] h-full bg-theme3">
        <div className="relative px-4 py-64 text-center md:max-w-none">
          <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-center text-theme1 sm:leading-none md:text-6xl lg:text-7xl">
            Rekomendasi
          </h1>
          <div className="mx-auto mt-1 text-theme1 md:mt-3 md:max-w-lg md:text-center lg:text-lg text">
            Destinasi Wisata Yang Paling Disukai
          </div>
          {/* Cards And Background Start */}
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 35,
              },
              1368: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            className="mySwiper flex items-center mx-auto justify-center mt-5 !p-8 "
          >
            {destinations.map((value, index) => {
              return (
                <SwiperSlide
                  src={
                    value.pictureUrl
                      ? require(`../assets/${intToString(value.locationsId)}/${
                          value.pictureUrl
                        }`)
                      : ImageDefault
                  }
                  className="card-container"
                  key={index}
                >
                  <Cards item={value} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* Cards And Background End */}
        </div>
      </div>
    </section>
  );
};

export default Rekomendasi;
