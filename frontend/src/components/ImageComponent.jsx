import About from "./About";
import NameIntro from "./NameIntro";
import WaveShape from "./WaveShape";
import FindMe from "./FindMe";
import Experience from "./Experience";
import Circles from "./Circles";
import Ellipse1 from "./Ellipse1";

const ImageComponent = () => {
  return (
    <div className="relative w-full ">
      
      <img
      className="absolute w-full"
        src={import.meta.env.VITE_IMAGE_URL}
        alt="profile image"
        
        
      />
       <NameIntro />
       <About/>
       <FindMe />
       <Experience />
       <Circles/>
       <Ellipse1/>
      <WaveShape />
     
    </div>
  );
};

export default ImageComponent;
