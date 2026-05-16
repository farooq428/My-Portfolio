import React from "react";

const SkillHeading1 = () => {
  return (
    <div className="flex items-center gap-[1vw]">
      {/* Icon */}
      <div
        className="
          w-[3.3vw]
          h-[3.3vw]
          border-4
          border-black
          rounded-full
          box-border
          flex-shrink-0
        "
        style={{
          background:
            "linear-gradient(270deg, #000000 47.5%, rgba(196, 196, 196, 0) 50%)",
        }}
      ></div>

      {/* Heading */}
      <p
        className="
          font-raleway
          font-normal
          text-[1.33vw]
          leading-[1.53vw]
          uppercase
          text-black
          whitespace-nowrap
        "
      >
        Frontend Skills 
      </p>
    </div>
  );
};

export default SkillHeading1;