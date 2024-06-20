import React from "react";
import Button from "./Button";
import { slides } from "../constants";

const Slider = () => {
  return (
    <>
      {slides.map((slides) => (
        <div className="flex flex-col lg:flex-row items-center mx-40 my-52 w-6xl ">
          {/* text */}

          <div className="space-y-5 text-black mr-5 lg:mr-72">
            <h1 className="text-5xl font-semibold leading-none">
              {slides.headLine} <br />
              <span className="text-pro-blue">{slides.underLine}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              sit illo unde.
            </p>

            <Button ButtonText={"Learn more"} />
          </div>

          {/* image */}
          <div className="mt-32 lg:mt-0">
            <img
              src={slides.imgURL}
              alt="mobile"
              className="w-full lg:w-auto "
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Slider;
