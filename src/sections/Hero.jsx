import React from "react";

import { useState } from "react";

import Slider from "../Components/Slider";
import { slides } from "../constants";


const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="overflow-hidden max-h-screen">
      
        <Slider/>

    </div>
  );
};

export default Hero;
