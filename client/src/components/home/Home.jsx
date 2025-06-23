import React from 'react'
import Navbar from '../globalComponents/navbar/Navbar';
import HeroSection from './heroSection/HeroSection';
import InfoSection01 from './infoSection/InfoSection01';
import ServiceSection from './serviceSection/ServiceSection';
import SectorsServiceSection from './sectorsServiceSection/SectorsServiceSection';
import BlogsSection from './blogsSection/BlogsSection';
import CustomerTestimonialsSection from './customerTestimonialsSection/CustomerTestimonialsSection';
import ContactForm from './contactForm/ContactForm';
import FooterSection from '../globalComponents/footerSection/FooterSection';

const Home = () => {
  return (
    <div 
    className='w-full flex flex-col justify-center bg-white mx-auto font-[Poppins]'>
        <Navbar active='/'/>
        <HeroSection />
        <InfoSection01 />
        <ServiceSection />
        <SectorsServiceSection />
        <BlogsSection />
        <CustomerTestimonialsSection />
        <ContactForm />
        <FooterSection />
    </div>
  )
}

export default Home;
