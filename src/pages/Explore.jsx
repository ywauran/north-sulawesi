import React from "react";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import { Footer } from "../components/Footer";
import { destinations } from "../utils/data";
import ImageDefault from "../assets/default.png";

function Explore() {
  const { id } = useParams();
  const filteredDestinations = destinations.filter(
    (destination) => destination.locationsId === parseInt(id)
  );

  return (
    <>
      <section id="Destinasi">
        <div className="w-full h-full bg-theme3">
          <div className="relative px-4 py-64 text-center md:max-w-none">
            <div className="flex flex-wrap gap-10 mx-auto mt-12 justify-items-center w-fit">
              {filteredDestinations.map((item) => {
                console.log(item);
                return (
                  <div
                    key={item.id}
                    style={{
                      backgroundImage: `url(${
                        item.pictureUrl
                          ? require(`../assets/manado/${item.pictureUrl}`)
                          : ImageDefault
                      })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="flex-wrap items-center justify-center mx-auto mt-5 card-container"
                  >
                    <Cards item={item} />
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
