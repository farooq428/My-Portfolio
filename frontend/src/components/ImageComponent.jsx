import About from "./About";
import NameIntro from "./NameIntro";
import WaveShape from "./WaveShape";

const ImageComponent = () => {
  return (
    <div className="relative">
      <img
        src={import.meta.env.VITE_IMAGE_URL}
        alt="profile image"
        className=""
      />
       <NameIntro  className="absolute left-[15%] top-[30%] text-white"/>
      <WaveShape />
     
    </div>
  );
};

export default ImageComponent;
