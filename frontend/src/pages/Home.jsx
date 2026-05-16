import React from 'react'
import ImageComponent from '../components/ImageComponent'
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';
import Card3 from '../components/Card3';
import ServicesSection from '../components/ServicesSection';
import DownloadCV from '../components/DownloadCV';


const Home = () => {


  return (

    <> 
    <ImageComponent />
    
    <Card1/>
    <Card2 />
    <Card3 />
    <ServicesSection />
    <DownloadCV />

    </>

  )
}

export default Home;