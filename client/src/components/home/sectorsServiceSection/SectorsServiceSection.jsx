import React from 'react';
import { ArrowRight } from 'lucide-react';
import meshImg from '../../../assets/backgroundImages/bgImage03.jpg';
import img01 from '../../../assets/serviceSectorImages/img01.svg';
import img02 from '../../../assets/serviceSectorImages/img02.svg';
import img03 from '../../../assets/serviceSectorImages/img03.svg';
import img04 from '../../../assets/serviceSectorImages/img04.svg';
import img05 from '../../../assets/serviceSectorImages/img05.svg';
import patternImage from '../../../assets/backgroundImages/bgPattern.svg';

const SectorsServiceSection = () => {
  const sectorCardContext = [
    {
      id: 0,
      head: 'Commercial & Residential Buildings',
      description: 'High-rise towers, office spaces, malls, and mixed-use developments',
      img: img01,
    },
    {
      id: 1,
      head: 'Healthcare & Hospitality',
      description: 'Hospitals, hotels, resorts, and wellness centers',
      img: img02,
    },
    {
      id: 2,
      head: 'Industrial & Manufacturing',
      description: 'Factories, warehouses, and heavy industries',
      img: img03,
    },
    {
      id: 3,
      head: 'Government & Utilities',
      description: 'Public infrastructure, smart city projects, and utility services',
      img: img04,
    },
    {
      id: 4,
      head: 'Renewable Energy & Sustainable Projects',
      description: 'Green buildings, solar energy solutions, and eco-friendly initiatives',
      img: img05,
    },
  ];

  return (
    <div className="w-full flex flex-col text-black p-[20px] lg:p-[50px] gap-[50px]">
      <div className="justify-center items-center w-full flex">
        <h1 className="text-[28px] lg:text-[38px] font-semibold text-center">
          Sectors We Serve
        </h1>
      </div>

      <div className="w-full lg:w-[1280px] mx-auto mt-[30px]">
        <div className="relative w-full lg:w-[1280px] bg-[#082F70]">
          <img
            className="absolute w-full h-auto z-10 object-cover"
            src={patternImage}
            alt=""
          />

          <div className="relative z-20 w-full px-2 sm:px-4 md:px-6 lg:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-[16px] translate-y-[60px] lg:translate-y-[120px] max-w-full lg:max-w-[1250px] mx-auto">
            {sectorCardContext.map((card) => (
              <div
                key={card.id}
                className="group w-full h-[370px] bg-white text-black hover:text-white transition duration-500 relative overflow-hidden shadow-md"
              >
                <div className="absolute top-0 left-0 w-full h-[240px] bg-[#E34147] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10" />

                <div className="flex flex-col gap-[20px] p-[20px] h-[240px] relative z-20">
                  <div className="flex flex-col gap-[10px] h-[140px]">
                    <h3 className="text-[14px] lg:text-[16px] font-semibold">{card.head}</h3>
                    <p className="text-[12px] font-light text-[#515151] group-hover:text-white transition duration-300">
                      {card.description}
                    </p>
                  </div>
                  <hr className="border-[#cccccc] group-hover:border-white" />
                  <a
                    href="#"
                    className="flex items-center gap-2 mt-[10px] text-[12px] font-medium text-[#515151] group-hover:text-white transition"
                  >
                    MORE DETAILS
                    <ArrowRight className="w-[12px] h-[12px] text-[#F35F24] group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>

                <div className="relative h-[130px]">
                  <img src={card.img} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-[#F35F24]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-auto lg:h-[260px] mt-[100px] lg:mt-[170px] flex flex-col items-center gap-[20px] px-4">
          <p className="text-[16px] lg:text-[18px] font-semibold text-center">
            Find out how we serve your industry
          </p>

          <a className="group" href="">
            <div className="transition-all duration-500 ease-out w-[220px] sm:w-[275px] h-[50px] sm:h-[60px] bg-[#082F70] flex">
              <div className="mx-auto my-auto flex items-center">
                <p className="text-white text-[14px] sm:text-[15px] font-bold mr-2">
                  EXPLORE OUR EXPERTISE
                </p>
                <ArrowRight className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] text-white font-semibold group-hover:rotate-[-24deg] duration-100" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectorsServiceSection;
