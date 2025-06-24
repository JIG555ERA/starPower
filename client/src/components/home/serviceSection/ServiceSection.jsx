import React from 'react';
import { ArrowRight } from 'lucide-react';
import serviceImage from '../../../assets/backgroundImages/bgImage02.svg';
import MEPSolutionsIcon from '../../../assets/icons/icon01.svg';
import EPCContractingIcon from '../../../assets/icons/icon02.svg';

const ServiceSection = () => {
  const cardContext = [
    {
      id: 0,
      img: MEPSolutionsIcon,
      head: 'M.E.P. Solutions',
      description: 'Design, installation & maintenance of mechanical, electrical, and plumbing systems',
      link: ''
    },
    {
      id: 1,
      img: EPCContractingIcon,
      head: 'EPC Contracting',
      description: 'Design, installation & maintenance of mechanical, electrical, and plumbing systems',
      link: ''
    }
  ];

  return (
    <div className="w-full relative mt-[100px] text-black flex flex-col items-center ">
      {/* Background Image */}
      <img
        className="w-full h-[720px] lg:h-[690px] object-cover"
        src={serviceImage}
        alt="Services Background"
      />

      {/* Content Overlay */}
      <div className="absolute z-20 top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-[300px] ">
        {/* Heading */}
        <h1 className="text-[28px] sm:text-[32px] lg:text-[38px] font-semibold text-center mb-8 lg:translate-y-[-20px] ">
          Our Services
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-[80px] w-full max-w-[800px] mb-8 ">
          {cardContext.map((card) => (
            <a key={card.id} href={card.link}>
              <div className="w-full h-auto min-h-[250px] sm:h-[290px] flex flex-col justify-center items-center p-6 bg-white gap-4 sm:gap-[20px] shadow-md hover:shadow-lg transition">
                <img
                  className="w-[60px] sm:w-[70px] h-[60px] sm:h-[70px] object-contain"
                  src={card.img}
                  alt={card.head}
                />
                <h1 className="text-[18px] sm:text-[20px] font-semibold text-center">
                  {card.head}
                </h1>
                <p className="text-[14px] font-light text-center">
                  {card.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Button */}
        <a className="group" href="">
          <div className="transition-all duration-500 ease-out w-[220px] sm:w-[275px] h-[50px] sm:h-[60px] bg-[#082F70] flex mt-[10px] sm:mt-[20px] translate-y-[-15px] lg:translate-y-[20px]">
            <div className="mx-auto my-auto flex items-center">
              <p className="text-white text-[14px] sm:text-[15px] font-semibold mr-4">
                VIEW ALL SERVICES
              </p>
              <ArrowRight className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] text-white group-hover:rotate-[-24deg] duration-150" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ServiceSection;
