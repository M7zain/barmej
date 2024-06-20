import React from "react";
import { logos } from "../constants";
const Clients = () => {
  return (
    <div className="mt-36 bg-slate-200 py-20">
      {/* our clients Title */}
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-5xl text-pro-blue capitalize ">
          our clients
        </h2>
        <p className="mt-4 text-lg">
          we have been working with more than 500+ companies
        </p>
      </div>

      {/* Logos */}
      <div className="flex flex-col items-center lg:flex-row  lg:justify-center  my-10 ">
        {logos.map((logo) => (
          <img src={logo.imgURL} 
               alt={logo.name} 
               className=" m-16 lg:mx-16 w-20 lg:16" />
        ))}
      </div>
      {/* text */}
      <div className="flex flex-col items-center px-10 lg:px-none ">
        <h2 className="font-semibold text-4xl text-pro-blue ">
            Manage your entire website in a single click
        </h2>
        <p className="mt-4 text-lg">
          we have been working with more than 500+ companies
        </p>
      </div>
    </div>
  );
};

export default Clients;
