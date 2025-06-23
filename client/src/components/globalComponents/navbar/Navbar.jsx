import React, { useState } from 'react';
import { Menu, XCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import starPowerLogo from '../../../assets/brandLogo/starPowerLogo.svg';
import starPowerFooter from '../../../assets/brandLogo/starPowerFooterLogo.svg';
import menuRightArrowIcon from '../../../assets/icons/menuRightArrowIcon.svg'
import menuDownArrowIcon from '../../../assets/icons/menuDownArrowIcon.svg'


const Navbar = ({active=''}) => {
    const navItems = [
        { id: 'home', page: 'Home', link: '/' },
        { id: 'about', page: 'About', link: '/about' },
        { id: 'services', page: 'Services', link: '/services' },
        { id: 'projects', page: 'Projects', link: '/projects' },
        { id: 'blog', page: 'Blog', link: '/blog' },
        { id: 'contact', page: 'Contact', link: '/contact' },
    ];

    const menuItems = [
        { id: 'home', page: 'Home', link: '/' },
        { id: 'about', page: 'About', link: '/about' },
        {
        id: 'services',
        page: 'Services',
        subItems: [
            { id: 'mech', page: 'Mechanical Solution', link: '/services/mechanical' },
            { id: 'electric', page: 'Electric Solution', link: '/services/electric' },
            { id: 'plumbing', page: 'Plumbing Solution', link: '/services/plumbing' },
        ]
        },
        { id: 'projects', page: 'Projects', link: '/projects' },
        { id: 'blog', page: 'Blog', link: '/blog' },
        { id: 'contact', page: 'Contact us', link: '/contact' },
        { id: 'greenHydrogen', page: 'Green Hydrogen', link: '/greenHydrogen' },
        { id: 'sectorsKeyIndustries', page: 'Sectors / Key Industries', link: '/sectorsKeyIndustries' },
        { id: 'projectsPortfolio', page: 'Projects Portfolio', link: '/projectsPortfolio' },
        { id: 'careers', page: 'Careers', link: '/careers' },
    ];

    const [isActive, setActive] = useState(false);
    const [ activePage, setActivePage ] = useState(active)
    const [isServicesOpen, setServicesOpen] = useState(false);
    const toggleMenu = () => setActive(!isActive);
    const toggleServices = () => setServicesOpen(!isServicesOpen);

    const handleMenuBar = () => {
        setActive(!isActive);
    };

    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="max-w-[1440px] mx-auto py-4 flex justify-between items-center">
                
                {/* Left Side: Logo & Hamburger */}
                <div className="flex items-center gap-4">
                    {/* Hamburger - visible on small screens */}
                    <button
                        className="p-1 border-2 border-red-400 rounded-md mr-[60px]"
                        onClick={handleMenuBar}
                    >
                        <Menu className="w-6 h-6 text-black" />
                    </button>

                    {/* Logo */}
                    <a 
                    href="/">
                        <img
                        src={starPowerLogo}
                        alt="Star Power Logo"
                        className="w-[110px] h-[60px]"
                    />
                    </a>
                </div>

                {/* Navigation Links - visible on large screens */}
                <nav className="hidden lg:flex space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            className="text-[#121212] text-[16px] font-semibold hover:text-blue-600 transition"
                        >
                            {item.page}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Slide-in Menu on Mobile */}
            <div
                className={`fixed top-0 left-0 h-full w-[350px] bg-[#0A142F] z-50 transform transition-transform duration-500 ${
                    isActive ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex justify-between items-center p-[40px]">
                    <img
                        src={starPowerFooter}
                        alt="Footer Logo"
                        className="w-[110px] h-[60px]"
                    />
                    <button onClick={handleMenuBar}>
                        <XCircle className="w-6 h-6 text-white mb-[4vh]" />
                    </button>
                </div>

                <div className="h-[calc(100%-80px)] overflow-y-auto"
                 style={{
                    overflowY: 'scroll',
                    scrollbarWidth: 'none',         
                    msOverflowStyle: 'none',        
                }}>
                    {/* <nav className="flex flex-col space-y-4 mt-4">
                    {menuItems.map((item) => (
                        <a
                        key={item.id}
                        href={item.link}
                        onClick={() => {
                            setActivePage(item.id);   // update active page
                            setActive(false);         // close menu
                        }}
                        className={`text-white text-[16px] font-medium hover:text-blue-600 transition px-3 py-2 ${
                            activePage === item.id ? 'bg-white/30' : ''
                        }`}
                        >
                        <span className='w-4 h-fit bg-white'></span>
                        {item.page}
                        </a>
                    ))}
                    </nav> */}
                    <nav className="flex flex-col space-y-4">
                    {menuItems.map((item) =>
                        !item.subItems ? (
                        <a
                            key={item.id}
                            href={item.link}
                            onClick={() => {
                            setActivePage(item.id);
                            toggleMenu(); // Close menu
                            }}
                            className={`relative flex items-center text-white text-[16px] font-medium px-[40px] hover:text-gray-300 transition  py-2 ${
                            activePage === item.id ? 'bg-white/30' : ''
                            }`}
                        >
                            {activePage === item.id && (
                            <span className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-md" />
                            )}
                            {item.page}
                        </a>
                        ) : (
                        <div key={item.id}>
                            <div
                            onClick={toggleServices}
                            className="flex justify-between items-center px-[40px] text-white text-[16px] font-medium cursor-pointer py-2 "
                            >
                            {item.page}
                            {isServicesOpen ? (
                                // <ChevronUp className="w-4 h-4" />
                                <img src={menuDownArrowIcon} className='w-[20px] h-auto transition-all duration-500 ease-in-out'/>
                            ) : (
                                // <ChevronDown className="w-4 h-4" />
                                <img src={menuRightArrowIcon} className='w-[20px] h-auto transition-all duration-500 ease-in-out'/>
                            )}
                            </div>

                            {isServicesOpen && (
                            <div className="mt-2 ml-4 space-y-2">
                                {item.subItems.map((sub) => (
                                <a
                                    key={sub.id}
                                    href={sub.link}
                                    onClick={() => {
                                    setActivePage(sub.id);
                                    toggleMenu();
                                    }}
                                    className={`relative flex items-center text-white text-sm hover:text-gray-300 px-[40px] py-2  ${
                                    activePage === sub.id ? 'bg-white/30' : ''
                                    }`}
                                >
                                    {activePage === sub.id && (
                                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-white " />
                                    )}
                                    {sub.page}
                                </a>
                                ))}
                            </div>
                            )}
                        </div>
                        )
                    )}
                    </nav>

                    {/* contact info */}
                    <div
                    className='flex flex-col p-[40px] space-y-4'>
                        <h1
                        className='text-[24px] font-semibold text-white'>
                            Contact Us
                        </h1>
                        <p
                        className='text-[#E1E1E1] text-[14px] font-light'>
                            8-2-602/D, Opposite Hanging Garden Road No.-10, Banjara Hills, HYD - 500034
                        </p>

                        <p
                        className='text-[#E1E1E1] text-[14px] font-light'>
                            99121 55156
                        </p>

                        <p
                        className='text-[#E1E1E1] text-[14px] font-light'>
                            mktg.hyd@startradex.com
                        </p>

                        <div
                        className='flex gap-[20px] pb-[50px]'>
                            <a href=""><FaFacebookF className='w-[14px] h-[14px] text-white'/></a>
                            <a href=""><FaLinkedinIn className='w-[14px] h-[14px] text-white'/></a>
                            <a href=""><FaInstagram className='w-[14px] h-[14px] text-white'/></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay (click to close menu) */}
            {isActive && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={handleMenuBar}
                />
            )}
        </header>
    );
};

export default Navbar;
