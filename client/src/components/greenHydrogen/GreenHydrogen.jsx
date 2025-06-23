import React from 'react'
import Navbar from '../globalComponents/navbar/Navbar';
import FooterSection from '../globalComponents/footerSection/FooterSection';
import HeroSection from './heroSection/HeroSection';
import InfoSection from './infoSection/InfoSection';
import Application from './application/Application';

const GreenHydrogen = () => {
    return (
        <div
        className=''>
            <Navbar active='greenHydrogen'/>
            <HeroSection />
            <InfoSection />
            <Application />
            <FooterSection />
        </div>
    )
}

export default GreenHydrogen;
