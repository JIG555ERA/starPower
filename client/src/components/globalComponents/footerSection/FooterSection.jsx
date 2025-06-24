import React from 'react'
import brandLogo from '../../../assets/brandLogo/starPowerFooterLogo.svg'
import callIcon from '../../../assets/icons/callIcon.svg'
import locationIcon from '../../../assets/icons/locationIcon.svg'
import mailIcon from '../../../assets/icons/mailIcon.svg'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

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
        { id: 'About Us', link: '' },
        { id: 'Get Quote', link: '' },
        { id: 'Privacy Policy', link: '' },
        { id: 'Terms & Condition', link: '' },
        { id: 'Contact Us', link: '' },
        { id: 'Project Portfolio', link: '' },
        { id: 'Careers', link: '' }
    ]

    return (
        <div className='w-full bg-[#0A142F] pt-[80px] '>
            {/* Main Footer Grid */}
            <div className='w-full max-w-[1250px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] px-4 '>

                {/* Logo + Phone */}
                <div className='flex flex-col'>
                    <img className='w-[110px] h-[60px]' src={brandLogo} alt="Star Power Logo" />
                    <p className='text-[12px] text-white font-normal mt-[10px]'>
                        End to end expert MEP & EPC solutions
                    </p>
                    <hr className='border-t border-[#D9D9D9] mt-[40px]' />
                    <div className='flex items-start mt-[40px]'>
                        <img className='w-[40px] h-[40px]' src={callIcon} alt="Call Icon" />
                        <div className='ml-[10px]'>
                            <p className='text-[10px] text-white font-light'>Call Our Support 24/7</p>
                            <h1 className='text-[18px] text-white font-semibold'>99121 55156</h1>
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className='flex flex-col gap-[20px]'>
                    <p className='text-white text-[16px] font-semibold'>GET IN TOUCH <span className='text-red-500'>.</span></p>
                    <p className='text-white text-[14px] font-semibold'>Hyderabad, India</p>
                    <div className='flex items-start'>
                        <img className='mt-[4px]' src={locationIcon} alt="Location Icon" />
                        <p className='text-[#9DA1AC] font-light ml-[10px] text-[14px]'>
                            8-2-602/D, Opposite Hanging Garden Road No.-10, Banjara Hills, HYD - 500034
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <img src={mailIcon} alt="Mail Icon" />
                        <p className='text-[#9DA1AC] font-light ml-[10px] text-[14px]'>
                            mktg.hyd@startradex.com
                        </p>
                    </div>
                </div>

                {/* Services */}
                <div className='flex flex-col'>
                    <p className='text-white text-[16px] font-semibold'>Services<span className='text-red-500'>.</span></p>
                    {servicesContext.map((service) => (
                        <p key={service} className='text-[#9DA1AC] text-[14px] font-normal mt-[10px]'>
                            {service}
                        </p>
                    ))}
                </div>

                {/* Quick Links */}
                <div className='flex flex-col'>
                    <p className='text-white text-[16px] font-semibold'>Quick Link<span className='text-red-500'>.</span></p>
                    {quickLinkContext.map((link) => (
                        <p key={link.id} className='text-[#9DA1AC] text-[14px] font-normal mt-[10px]'>
                            <a href={link.link}>{link.id}</a>
                        </p>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <hr className='border-t border-[#D9D9D9] mx-[20px] mt-[40px]' />

            {/* Social Icons */}
            <div className='flex justify-center gap-[20px] py-[40px]'>
                <a href="#"><FaFacebookF className='w-[20px] h-[20px] text-white' /></a>
                <a href="#"><FaInstagram className='w-[20px] h-[20px] text-white' /></a>
                <a href="#"><FaLinkedinIn className='w-[20px] h-[20px] text-white' /></a>
            </div>
        </div>
    )
}

export default FooterSection
