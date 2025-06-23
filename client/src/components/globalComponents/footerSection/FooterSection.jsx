import React from 'react'
import brandLogo from '../../../assets/brandLogo/starPowerFooterLogo.svg'
import callIcon from '../../../assets/icons/callIcon.svg'
import locationIcon from '../../../assets/icons/locationIcon.svg'
import mailIcon from '../../../assets/icons/mailIcon.svg'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const FooterSection = () => {

    const servicesContext = [
        'Mechanical Solutions',
        'Electrical Solutions',
        'Plumbing Solutions',
        'Engineering Solutions',
        'Procurement Solutions',
        'Construction Solutions'
    ]

    const quickLinkContext = [
        {id: 'About Us', link: ''},
        {id: 'Get Quote', link: ''},
        {id:'Privacy Policy', link: ''},
        {id: 'Terms & Condition', link: ''},
        {id: 'Contact Us',link: ''},
        {id: 'Project Portfolio', link: ''},
        {id: 'Careers', link: ''}
    ]

    return (
        <div
        className='w-full h-[500px] bg-[#0A142F]'>
            <div
            className='w-[1250px] h-[350px] mx-auto my-[40px] grid grid-cols-4 gap-[12.5px] mt-[20px]'>
                <div
                className='w-[300px] h-full flex flex-col justify-center'>
                    {/* logo */}
                    <img 
                    className='w-[110px] h-[60px]'
                    src={brandLogo} alt="" />
                    <p
                    className='text-[12px] text-white font-normal mt-[10px]'>
                        End to end expert MEP & EPC solutions
                    </p>
                    <hr className='text-gray-400 mt-[40px]'/>

                    <div
                    className='w-full h-[60px] flex mt-[40px]'>
                        <img 
                        className='w-[40px] h-[40px]'
                        src={callIcon} alt="" />
                        <div
                        className='w-full h-fit flex flex-col ml-[10px]'>
                            <p
                            className='text-[10px] text-white font-light'>
                                Call Our Support 24/7
                            </p>
                            <h1
                            className='text-[18px] text-white font-semibold'>
                                99121 55156
                            </h1>
                        </div>
                    </div>
                </div>
                <div
                className='w-[300px] h-full flex flex-col justify-center gap-[20px]'>
                    <p className='text-white text-[12px] font-semibold'>GET IN TOUCH <span className='text-red-500'>.</span></p>

                    <p className='text-white text-[12px] font-semibold'>Hyderabad, India</p>

                    <div
                    className='flex'>
                        <img className='mb-[45px]' src={locationIcon} alt="" />
                        <p
                        className='text-white font-light ml-[10px] text-[12px] mr-[60px]'>
                            8-2-602/D, Opposite Hanging Garden Road No.-10, Banjara Hills, HYD - 500034
                        </p>
                    </div>

                    <div
                    className='flex'>
                        <img className='' src={mailIcon} alt="" />
                        <p
                        className='text-white font-light ml-[10px] text-[12px] mr-[60px]'>
                            mktg.hyd@startradex.com
                        </p>
                    </div>
                </div>
                <div
                className='w-[300px] h-full flex flex-col justify-center'>
                    <p className='text-white text-[12px] font-semibold'>Services<span className='text-red-500'>.</span></p>

                    {servicesContext.map((service) => (
                        <p
                        key={service}
                        className='text-white text-[12px] font-normal mt-[10px]'>
                            {service}
                        </p>
                    ))}
                </div>
                <div
                className='w-[300px] h-full flex flex-col justify-center'>
                    <p className='text-white text-[12px] font-semibold'>Quick Link<span className='text-red-500'>.</span></p>

                    {quickLinkContext.map((link) => (
                        <p
                        key={link.id}
                        className='text-white text-[12px] font-normal mt-[10px]'>
                            <a href={link.link}>{link.id}</a>
                        </p>
                    ))}
                </div>

            </div>
            <hr className='text-gray-300 mx-[80px] translate-y-[-60px]'/>
            <div
            className='flex justify-center items center mx-auto gap-[20px] pb-[50px]'>
                <FaFacebookF className='w-[25px] h-[25px] text-white'/>
                <FaInstagram className='w-[25px] h-[25px] text-white'/>
                <FaLinkedinIn className='w-[25px] h-[25px] text-white'/>
            </div>
        
        </div>
    )
}

export default FooterSection;
