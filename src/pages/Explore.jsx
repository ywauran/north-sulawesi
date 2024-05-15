/* eslint-disable prettier/prettier */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import { Footer } from "../components/Footer";

function Explore() {
  const { lokasi } = useParams();
  const [wisata, setWisata] = useState([]);
  const getWisataDestination = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/destinations/location/" + lokasi,
      { params: { lokasi } }
    );
    const resData = response.data.data;
    setWisata(resData);
    console.log(lokasi);
  };

  useEffect(() => {
    getWisataDestination();
  }, [lokasi]);

  return (
    <>
      <section id="Destinasi">
        <div className="w-full h-full bg-theme3">
          <div className="relative px-4 py-64 text-center md:max-w-none">
            <div className="flex flex-wrap gap-10 mx-auto mt-12 justify-items-center w-fit">
              {wisata.map((value, index) => {
                return (
                  <div
                    style={{ backgroundImage: `url('${value.picture_url}')` }}
                    className="flex-wrap items-center justify-center mx-auto mt-5 card-container "
                    key={index}
                  >
                    <Cards item={value} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Explore;
