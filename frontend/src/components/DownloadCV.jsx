// DownloadCV.jsx
import React from "react";

function DownloadCV() {
  // Function to download PDF
  const handleDownload = () => {
    // Path to your CV file inside the public folder
    const fileUrl = "/M.umar-farooq-CV.pdf";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "M.umar-farooq-CV.pdf"; // Name of downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className=" absolute 
       leading-[1vw]
       left-[60.5vw]
       top-[80vw]
       font-raleway "
    >
      <button
        onClick={handleDownload}
        className="
        px-[1.7vw]
        py-[1.5vw] 
        bg-black 
        text-white 
        
        cursor-pointer 
        text-[1.3vw]
        font-bold
        hover:bg-blue-500
        transition-colors
        duration-300
      "
      >
        Download CV
      </button>
    </div>
  );
}

export default DownloadCV;
