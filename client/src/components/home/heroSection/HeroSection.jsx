import React from 'react';
import heroImage from '../../../assets/backgroundImages/bgImage01.svg';

const HeroSection = () => {
  return (
    <div className="w-full h-auto mt-[30px] flex flex-col justify-end items-center relative">
      {/* Background Image */}
      <img 
        src={heroImage} 
        alt="company image"
        className="w-full h-[555px] object-cover"
      />

      {/* Content Container */}
      <div className="absolute z-20 w-full max-w-[975px] h-auto lg:h-[430px] px-4 sm:px-6 md:px-10 lg:px-0 lg:grid grid-cols-2 overflow-hidden top-[calc(100%-430px)]">
        
        {/* Left Side Content */}
        <div className="text-white flex flex-col justify-between gap-4 lg:mt-[0px] mt-[138px]">
          <p className="text-[12px] lg:text-[12px] font-normal lg:mb-[0px] mb-[16px]">
            Star Power - Raising The Industry Bar
          </p>

          <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] font-medium leading-tight lg:mb-[0px] mb-[40px]">
            Innovative solutions, lasting results.
          </h1>

          <div className="w-full sm:w-[90%] md:w-[475px] h-auto lg:h-[230px] bg-[#082F70] flex flex-col justify-center items-start p-4 lg:p-[20px] lg:mt-[43px] text-[16px] sm:text-[18px] gap-6 lg:gap-[60px]">
            <p className="font-light lg:text-[22px]">
              Pillar of excellence in the construction industry for over three decades
            </p>
            <a 
              href=""
              className="font-semibold text-[14px] sm:text-[15px]"
            >
              LEARN MORE
            </a>
          </div>
        </div>

        {/* Right Side Empty Placeholder*/}
        <div className="hidden lg:inline-block"></div>
      </div>
    </div>
  );
};

export default HeroSection;
