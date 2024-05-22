import React from "react";
import { Link } from "react-router-dom";
import Default from "../assets/default.png";
import { locations } from "../utils/data";

const Jelajah = () => {
  return (
    <section id="Jelajah">
      <div className="w-full min-h-[91vh] h-full bg-theme3">
        <div className="relative px-4 py-32 text-left md:max-w-none md:text-center">
          <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-center text-theme1 sm:leading-none md:text-6xl lg:text-5xl">
            Mari Berjelajah!
          </h1>
          <div className="mx-auto mt-1 text-center text-theme1 md:mt-3 md:max-w-lg lg:text-lg">
            Jelajahi Destinasi Wisata Yang Ada Di Provinsi Sulawesi Utara
          </div>
          <div className="grid grid-cols-1 gap-10 mx-auto mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-fit">
            {locations.map((location, index) => (
              <div
                key={index}
                className="card-container w-80"
                style={{
                  backgroundImage: { Default },
                }}
              >
                <div className="min-h-full p-3 bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50">
                  <img
                    className="object-scale-down w-full h-40 rounded-xl"
                    src={
                      location.pictureUrl
                        ? require(`../assets/kab-kota/${location.pictureUrl}`)
                        : Default
                    }
                    alt={location}
                  />
                  <div className="p-2">
                    <Link to={`/explore/${location.id}`}>
                      <h2 className="mb-2 text-lg font-bold text-theme1 ">
                        {location.name}
                      </h2>
                    </Link>
                    <p className="text-sm text-justify text-gray-100">
                      {location.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jelajah;
