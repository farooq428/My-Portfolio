import React from "react";
import { FaReact } from "react-icons/fa";

const Card1 = () => {
  return (
    <div
      className="absolute w-[22.021vw] h-[20.05vw] left-[29.5vw] top-[60.8vw] bg-white rounded-[1vw] group transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-3 cursor-pointer"
      style={{
        boxShadow: "0 1.5vw 3vw rgba(0, 0, 0, 0.15), 0 0.5vw 1vw rgba(0, 0, 0, 0.1), inset -3.7vw -4vw 2.3vw rgba(47, 97, 172, 0.1)",
        transition: "all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 2.5vw 5vw rgba(0, 0, 0, 0.2), 0 1vw 2vw rgba(0, 0, 0, 0.15), inset -3.7vw -4vw 2.3vw rgba(47, 97, 172, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 1.5vw 3vw rgba(0, 0, 0, 0.15), 0 0.5vw 1vw rgba(0, 0, 0, 0.1), inset -3.7vw -4vw 2.3vw rgba(47, 97, 172, 0.1)";
      }}
    >
      <div className="absolute w-[4.3vw] h-[4.3vw] left-1/2 -translate-x-1/2 top-[2vw] bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
        <FaReact className="text-[3vw] text-blue-500 transition-all duration-500 group-hover:rotate-360 group-hover:text-blue-600" />
      </div>

      <h3 className="absolute font-['Raleway'] top-[8.5vw] left-1/2 -translate-x-1/2 font-normal text-[1.1vw] leading-[1vw] tracking-[-0.015em] text-black whitespace-nowrap transition-all duration-300 group-hover:text-blue-600">
        FRONTEND DEVELOPMENT
      </h3>

      <p className="absolute w-[20.83vw] h-[6.6vw] top-[15vw] -translate-x-1/2 left-1/2 -translate-y-1/2 font-['Raleway'] font-extralight text-[1vw] leading-[150%] tracking-[0.05em] text-center text-black pl-4 pr-4 transition-all duration-300 group-hover:text-gray-700
      
      ">
        Building responsive and interactive user interfaces with React.js and modern JavaScript.
      </p>
    </div>
  );
};

export default Card1;