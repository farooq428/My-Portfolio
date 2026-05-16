import React from "react";

import SkillHeading1 from "../components/SkillHeading1";
import SkillHeading2 from "../components/SkillHeading2";
import ProgressBar1 from "../components/ProgressBar1";
import ProgressBar2 from "../components/ProgressBar2";
const Skills = () => {
  return (
    <div
      className="
        absolute
        top-[120vw]
        left-[12vw]
        w-[76vw]
        font-raleway
      "
    >
      {/* Heading and line centered */}
      <div className="flex flex-col items-center">
        <h2
          className="
            text-[3vw]
            font-semibold
            text-black
          "
        >
          Skills
        </h2>

        {/* Small black line (5px below heading) */}
        <div
          className="
            mt-[5px]
            mb-[15px]
            w-[5vw]
            h-[2px]
            bg-black
          "
        ></div>
      </div>

      {/* Two divs in one row */}
      <div
        className="
          mt-[3vw]
          flex
          gap-[3vw]
        "
      >
        {/* Left Div */}
        <div
          className="
            flex-1
            min-h-[20vw]
            bg-gray-100
            rounded-lg
            p-[2vw]
          "
        >
          {/* Left Content */}

          <SkillHeading1/>
          <ProgressBar1 />
        </div>

        {/* Right Div */}
        <div
          className="
            flex-1
            min-h-[20vw]
            bg-gray-100
            rounded-lg
            p-[2vw]
          "
        >
         <SkillHeading2 />
          <ProgressBar2 />

        </div>
      </div>


  <div className="h-[5vh]"></div>

    </div>
  );
};

export default Skills;