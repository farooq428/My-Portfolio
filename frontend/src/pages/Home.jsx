import React from 'react'
import ImageComponent from '../components/ImageComponent'
import Card1 from '../components/Card1';
import About from "../components/About";
import NameIntro from "../components/NameIntro";
import WaveShape from "../components/WaveShape";
import FindMe from "../components/FindMe";
import Experience from "../components/Experience";
import Circles from "../components/Circles";
import Ellipse1 from "../components/Ellipse1";


const Home = () => {


  return (

    <> 
    <ImageComponent />
     <NameIntro />
       <About/>
       <FindMe />
       <Experience />
       <Circles/>
       <Ellipse1/>
      <WaveShape />
    <Card1/>

    </>

  )
}

export default Home;