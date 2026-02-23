import React from 'react';

const ImageComponent = () => {
  return (
    <div className="relative w-full h-500px md:h-700px overflow-hidden">

      {/* Image */}
      <img
        src={import.meta.env.VITE_IMAGE_URL}
        alt="profile image"
        className="w-full h-full object-cover object-bottom"
      />

      {/* Wave Shape */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
      >
        <path
          d="M0 588.175 
             C26.63 626.876 139.806 682.992 427.406 597.85
             C468.239 583.337 551.234 570.437 615.146 597.85
             C719.001 659.126 793.032 824.573 929.376 880.045
             C1065.72 935.516 1293.31 903.158 1390.07 880.045
             C1469.29 859.082 1611.1 807.803 1717.61 880.045
             C1824.13 952.287 1896.92 1043.45 1920 1080
             L1920 1080 L0 1080 Z"
          className="fill-gray-200"
        />
      </svg>

    </div>
  );
};

export default ImageComponent;