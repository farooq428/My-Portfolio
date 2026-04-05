import About from "./About";
import NameIntro from "./NameIntro";
import WaveShape from "./WaveShape";
import FindMe from "./FindMe";

const ImageComponent = () => {
  return (
    <div className="w-full h-full object-cover">
      <img
        src={import.meta.env.VITE_IMAGE_URL}
        alt="profile image"
        
      />
       <NameIntro />
       <About/>
       <FindMe />
      <WaveShape />
     
    </div>
  );
};

export default ImageComponent;
