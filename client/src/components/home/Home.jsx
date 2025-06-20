import React from 'react'
import Navbar from '../globalComponents/navbar/Navbar';
import HeroSection from './heroSection/HeroSection';
import InfoSection from './infoSection/infoSection';
import ServiceSection from './serviceSection/ServiceSection';
import SectorsServiceSection from './sectorsServiceSection/SectorsServiceSection';
import BlogsSection from './blogsSection/BlogsSection';
import CustomerTestimonialsSection from './customerTestimonialsSection/CustomerTestimonialsSection';
import ContactForm from './contactForm/contactForm';
import FooterSection from './footerSection/FooterSection';

const Home = () => {
  return (
    <div 
    className='w-full flex flex-col justify-center bg-white mx-auto font-[Poppins]'>
        <Navbar />
        <HeroSection />
        <InfoSection />
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
