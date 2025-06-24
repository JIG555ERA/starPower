import React from 'react'
import greenHydrogenHero from '../../../assets/backgroundImages/greenHydrogenHero.svg'

const HeroSection = () => {
    return (
        <div
        className='w-full h-[655px] mt-[30px] flex flex-col justify-end items-center'>
            {/* bg image */}
            <img 
            className='cover w-full'
            src={greenHydrogenHero} 
            alt="company image" />
            
            <div
            className=' w-[975px] h-[330px] absolute z-20 grid grid-cols-2 overflow-hidden'>
                <div
                className='text-white flex flex-col '>
                    <p
                    className='text-[12px] font-normal'>
                        Star Power - Raising The Industry Bar
                    </p>
                    <h1
                    className='text-[38px] font-medium'>
                        Green Hydrogen
                    </h1>
                </div>
                <div
                className='inline-block'>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
