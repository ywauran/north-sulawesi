import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import { Footer } from "../components/Footer";
import { destinations } from "../utils/data";

function Explore() {
  const { id } = useParams();

  console.log(id);
  // console.log(id);
  // const filteredData = destinations.filter((item) => item.locationsId === id);
  // console.log(filteredData);

  return (
    <>
      <section id="Destinasi">
        <div className="w-full h-full bg-theme3">
          <div className="relative px-4 py-64 text-center md:max-w-none">
            <div className="flex flex-wrap gap-10 mx-auto mt-12 justify-items-center w-fit">
              {destinations.map((value, index) => {
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
      <Footer />
    </>
  );
}

export default Explore;
