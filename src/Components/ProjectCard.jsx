import React from "react";


const ProjectCard = ({CardImg}) => {
  return (
    <>
      <div className=" group flex max-w-[350px] max-h-[200px] my-16 relative  ">
        <img src={CardImg.imgURL} alt="nike" 
        className="rounded-2xl 
                   object-contain
                   drop-shadow-3xl 
                   group-hover:animate-hoverUp " />
      <div className=" absolute bottom-[-40px] left-24  p-10 backdrop-blur-sm bg-white/30 rounded-xl  hover:bg-white   transition duration-400 cursor-pointer  "> 
          <p > this is a test </p>
        </div>

      </div>

    </>
  );
};

export default ProjectCard;
