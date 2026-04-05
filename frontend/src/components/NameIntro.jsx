import React from "react";

const NameIntro = ({ className = "" }) => {
  // Add className prop
  return (
    <div className={className}>
      {" "}
      {/* Apply className here */}
      <span className="font-['Raleway'] font-normal text-[3vw] leading-[1.2] tracking-[0.05em] fill-[#2F61AC]">
        Hello!
      </span>
      <h1 className="absolute w-[40vw] h-[11.8vw]  font-['Jellee'] font-normal text-[5vw] leading-[7.2vw] tracking-[0.105em] text-white">
        I'm FAROOQ
      </h1>
    </div>
  );
};

export default NameIntro;
