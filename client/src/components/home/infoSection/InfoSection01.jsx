import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const InfoSection01 = () => {
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
      className="w-full max-w-screen-xl px-4 lg:px-0 mx-auto grid grid-cols-1 lg:grid-cols-2 mt-[80px] gap-10 lg:gap-[80px]"
    >
      {/* Left: Heading */}
      <div>
        <h1
          className={`transition-all duration-1000 ease-out text-[28px] sm:text-[32px] lg:text-[38px] font-bold leading-tight transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[150px]'
          }`}
        >
          Engineering Efficiency Building The Future
        </h1>
      </div>

      {/* Right: Paragraph + Button */}
      <div>
        <p
          className={`transition-all duration-1000 ease-out text-[15px] sm:text-[16px] font-normal text-[#2F2F2F] transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[150px]'
          }`}
        >
          Star Power, an ISO 9001:2015 certified company and an extension of Star Export India, is a leader in providing Mechanical, Electrical, and Plumbing (MEP) solutions and Engineering, Procurement, and Construction (EPC) services. We specialize in delivering sustainable, cost-effective, and future-ready solutions for commercial, industrial, institutional, and infrastructure projects across India. Our expertise includes high-performance MEP installations and turnkey EPC contracting, ensuring we can cater to all your project needs
        </p>

        <a className="group" href="">
          <div
            className={`transition-all duration-1000 ease-out w-full max-w-[275px] h-[60px] bg-[#082F70] flex mt-[30px] transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[150px]'
            }`}
          >
            <div className="mx-auto my-auto flex items-center">
              <p className="text-white text-[16px] sm:text-[18px] font-bold mr-4">
                MORE ABOUT US
              </p>
              <ArrowRight className="w-[24px] sm:w-[30px] h-[24px] sm:h-[30px] text-white font-semibold group-hover:rotate-[-24deg] duration-150" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default InfoSection01;
