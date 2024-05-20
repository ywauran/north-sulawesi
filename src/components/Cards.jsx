/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    <>
      <div className="min-h-full p-3 bg-slate-700 bg-opacity-30 backdrop-blur backdrop-brightness-50">
        <img
          className="object-cover w-full h-40 rounded-xl"
          src={props.item.pictureUrl}
          alt={props.item.name}
        />
        <div className="p-2">
          <Link to={`/detail/${props.item.id}`}>
            <h2 className="flex items-center justify-center h-12 mb-2 overflow-hidden text-lg font-bold text-theme1">
              {props.item.name}
            </h2>
          </Link>
          <p className="text-sm text-gray-100 ">
            {props.item.description.substring(0, 60) + "..."}
          </p>
        </div>
      </div>
    </>
  );
};

export default Cards;
