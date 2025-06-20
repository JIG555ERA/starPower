import React from 'react'
import Navbar from '../globalComponents/navbar/Navbar';
import HeroSection from './heroSection/HeroSection';
import InfoSection01 from './infoSection/InfoSection01';
import ServiceSection from './serviceSection/ServiceSection';
import SectorsServiceSection from './sectorsServiceSection/SectorsServiceSection';
import BlogsSection from './blogsSection/BlogsSection';
import CustomerTestimonialsSection from './customerTestimonialsSection/CustomerTestimonialsSection';
import Contact from '../contact/Contact';
import FooterSection from './footerSection/FooterSection';

const Home = () => {
  return (
    <div 
    className='w-full flex flex-col justify-center bg-white mx-auto font-[Poppins]'>
        <Navbar />
        <HeroSection />
        <InfoSection01 />
        <ServiceSection />
        <SectorsServiceSection />
        <BlogsSection />
        <CustomerTestimonialsSection />
        <Contact />
        <FooterSection />
    </div>
  )
}

export default Home;
