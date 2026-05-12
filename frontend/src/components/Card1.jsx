import React from "react";

const Card1 = () => {
  return (
    <div
      className="absolute w-[28.09vw] h-[25.68vw] left-[39.5vw] top-[65.8vw] bg-white rounded-[1vw]"
     style={{
  boxShadow: "0 1.5vw 3vw rgba(0, 0, 0, 0.15), 0 0.5vw 1vw rgba(0, 0, 0, 0.1)  ,inset -3.7vw -4vw 2.3vw rgba(47, 97, 172, 0.1)"
}}
    >
      <div className="absolute w-[5.6vw] h-[5.6vw] left-1/2 -translate-x-1/2 top-[2vw]  bg-amber-100 rounded-full shadow-lg"></div>

      <h3 className="absolute  font-['Raleway'] top-[10.5vw] left-1/2 -translate-x-1/2 font-normal text-[1.8vw] leading-[1vw] tracking-[-0.015em] text-black whitespace-nowrap">
        FRONTEND DEVELOPMENT
      </h3>

      <p className="absolute w-[20.83vw] h-[6.6vw] top-[8vh] -translate-x-1/2 left-1/2 -translate-y-1/2 font-['Raleway'] font-extralight text-[1.49vw] leading-[120%] tracking-[0.04em]   text-center text-black">
        Building responsive and interactive user interfaces with React.js and modern JavaScript.
      </p>
    </div>
  );
};
export default Card1;
