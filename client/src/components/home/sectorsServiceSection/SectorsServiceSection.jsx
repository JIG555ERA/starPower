import React, { useState } from 'react'
import meshImg from '../../../assets/backgroundImages/bgImage03.jpg'
import { ArrowRight } from 'lucide-react'
import img01 from '../../../assets/serviceSectorImages/img01.svg'
import img02 from '../../../assets/serviceSectorImages/img02.svg'
import img03 from '../../../assets/serviceSectorImages/img03.svg'
import img04 from '../../../assets/serviceSectorImages/img04.svg'
import img05 from '../../../assets/serviceSectorImages/img05.svg'
import patternImage from '../../../assets/backgroundImages/bgPattern.svg'

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
    ]

    return (
        <div
        className='w-full flex flex-col text-black p-[50px] gap-[50px]'>
            <div
            className='justify-center items-center w-full flex'>
                <h1
                className='text-[38px] font-semibold'>
                    Sectors We Serve
                </h1>
            </div>
            <div
            className='w-[1280px] h-[640px] mx-auto mt-[30px]'>
                <div
                className='w-[1280px] h-[380px] bg-[#082F70] '>
                    <img 
                    className='absolute w-[1280px] h-auto z-10'
                    src={patternImage} alt="" />
                    <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[16px] translate-y-[120px] w-[1250px] mx-auto">
                    {sectorCardContext.map((card) => (
                        <div
                        key={card.id}
                        className="group w-full h-[370px] bg-white text-black hover:text-white transition duration-500 relative overflow-hidden shadow-md"
                        >
                        {/* Red overlay for text section */}
                        <div className="absolute top-0 left-0 w-full h-[240px] bg-[#E34147] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10" />

                        {/* Card Content */}
                        <div className="flex flex-col gap-[20px] p-[20px] h-[240px] relative z-20">
                            <div className="flex flex-col gap-[10px] h-[140px]">
                            <h3 className="text-[16px] font-semibold">{card.head}</h3>
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

                        {/* Image with red blur overlay */}
                        <div className="relative h-[130px]">
                            <img src={card.img} alt="" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-[#F35F24]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
                        </div>
                        </div>
                    ))}
                    </div>

                </div> 
                <div
                className='w-full h-[260px] bg-white mt-[150px] flex flex-col items-center gap-[20px]'>
                    <div>
                        <p
                        className='text-[18px] font-semibold'>
                            Find out how we serve your industry
                        </p>
                    </div>
                    
                    <a 
                    className='group'
                    href={''}>
                        <div
                        className='transition-all duration-1200 ease-out w-[275px] h-[60px] bg-[#082F70] flex'>
                            <div
                            className='mx-auto my-auto flex'>
                                <p
                                className='text-white text-[15px] font-bold mr-[8px]'>
                                    EXPLORE OUR EXPERTISE
                                </p>
                                <ArrowRight className='w-[24px] h-[24px] text-white font-semibold group-hover:rotate-[-24deg] duration-100'/>
                            </div>
                        </div>
                    </a>
                    
                </div>

            </div>
            
        </div>
    )
}

export default SectorsServiceSection;
