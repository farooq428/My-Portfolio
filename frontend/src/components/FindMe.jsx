const FindMe = () => {
  return (
    <div className="absolute left-[45.8vw]  top-[22vw]">
      <h3 className="w-[14.4vw] h-[2.1vw] font-['Raleway'] font-medium text-[1.8vw] leading-[2.1vw] tracking-[0.05em] capitalize flex items-center text-center text-white">
        FIND ME ON
      </h3>
      
      {/* facebook */}
      <div className="absolute w-[4.5vw] h-[4.1vw] top-[4.5vw] left-0 bg-white rounded-[4px]">
        <img
          className="absolute w-[2.3vw] h-[2.4vw] left-[1.1vw] top-[0.85vw]"
          src="facebook.svg"
          alt="facebook"
        />
      </div>
      
      {/* twitter */}
      <div className="absolute w-[4.5vw] h-[4.1vw] top-[4.5vw] left-[7.1vw] bg-white rounded-[4px]">
        <img
          className="absolute w-[2.3vw] h-[2.4vw] left-[1.1vw] top-[0.85vw]"
          src="twitter.svg"
          alt="twitter"
        />
      </div>
      
      {/* instagram */}
      <div className="absolute w-[4.5vw] h-[4.1vw] top-[4.5vw] left-[14.2vw] bg-white rounded-[4px]">
        <img
          className="absolute w-[2.3vw] h-[2.4vw] left-[1.1vw] top-[0.85vw]"
          src="instagram.svg"
          alt="instagram"
        />
      </div>
    </div>
  );
};

export default FindMe;