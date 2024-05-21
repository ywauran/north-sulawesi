import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";
import { getDestinationById } from "../utils/data";

const Destination = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    setDestination(getDestinationById(id));
  }, [id]);
  return (
    <>
      <section id="Destinasi">
        <div className="w-full min-h-[91vh] h-full bg-theme3">
          <div className="relative px-10 py-32 pb-60 md:px-[7.5rem] lg:px-52 sm:px-20 mx-auto my-auto md:max-w-none">
            <Button />
            <div
              className="h-full overflow-hidden bg-center bg-no-repeat bg-cover rounded-lg bg-opacity-30"
              style={{ backgroundImage: `url('${destination.pictureUrl}')` }}
            >
              <div className="min-h-full p-4 backdrop-blur-xl backdrop-brightness-50">
                <div>
                  <img
                    className="object-cover w-full h-40 md:h-80 rounded-xl"
                    src={destination.pictureUrl}
                    alt=""
                  />
                </div>
                <div className="mt-4 text-theme1">
                  <h1 className="text-xl font-bold text-center">
                    {destination.name}
                  </h1>
                  <p className="mt-4 text-base text-justify">
                    {destination.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;
