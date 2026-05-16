import React from "react";

const ServicesSection = () => {
  return (
    <section
      className="
        absolute
        left-[60.5vw]
        top-[70.8vw]
        font-raleway
        max-w-[30vw]
      "
    >
      {/* Heading */}
      <h2
        className="
          text-[2vw]
          font-normal
          leading-[1.3]
          tracking-[0.05em]
          text-black
        "
      >
        My Awesome
        <span className="block text-blue-700 tracking-[0.0em] leading-[5vw]">
          Services
        </span>
      </h2>

      {/* Description */}
      <p
        className="
          mt-1
          text-[1.5vw]
          font-normal
          leading-[2.5vw]
          tracking-[0.02em]
          text-black
        "
      >
        Custom website development featuring responsive, user-centric UI
        design.
      </p>
    </section>
  );
};

export default ServicesSection;