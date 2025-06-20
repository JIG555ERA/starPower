import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const InfoSection01 = () => {

    // scroll effect

    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(ref.current);
            }
        },
        { threshold: 0.5 }
        );

        if (ref.current) {
        observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);



    return (
        <div
        ref={ref}
        className='w-[1280px] h-[230px] mx-auto grid grid-cols-2 text-black my-[80px] gap-[80px]'>
            <div
            className=''>
                <h1
                className={`transition-all duration-1200 ease-out text-[48px] font-bold transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-25"
                }`}>
                    Engineering Efficiency Building The Future
                </h1>
            </div>
            <div
            className=''>
                <p
                className={`transition-all duration-1200 ease-out text-[18px] font-normal transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-25"
                }`}>
                    Star Power, an ISO 9001:2015 certified company and an extension of Star Export India, is a leader in providing Mechanical, Electrical, and Plumbing (MEP) solutions and Engineering, Procurement, and Construction (EPC) services. We specialize in delivering sustainable, cost-effective, and future-ready solutions for commercial, industrial, institutional, and infrastructure projects across India. Our expertise includes high-performance MEP installations and turnkey EPC contracting, ensuring we can cater to all your project needs
                </p>
                <a 
                href={''}>
                    <div
                    className={`transition-all duration-1200 ease-out w-[275px] h-[60px] bg-[#082F70] flex transform mt-[20px] ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-25"}`}>
                        <div
                        className='mx-auto my-auto flex'>
                            <p
                            className='text-white text-[18px] font-bold mr-[16px]'>
                                MORE ABOUT US 
                            </p>
                            <ArrowRight className='w-[30px] h-[30px] text-white font-semibold hover:rotate-[-24deg] duration-200'/>
                        </div>
                    </div>
                </a>
            </div>
        
        </div>
    )
}

export default InfoSection01;
