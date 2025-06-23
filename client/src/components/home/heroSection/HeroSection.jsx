import React from 'react'
import heroImage from '../../../assets/backgroundImages/bgImage01.svg'

const HeroSection = () => {
    return (
        <div
        className='w-full h-[555px] mt-[30px] flex flex-col justify-end items-center'>
            {/* bg image */}
            <img 
            className='cover w-full'
            src={heroImage} 
            alt="company image" />
            
            <div
            className=' w-[975px] h-[430px] absolute z-20 grid grid-cols-2 overflow-hidden'>
                <div
                className='text-white flex flex-col justify-between'>
                    <p
                    className='text-[12px] font-normal'>
                        Star Power - Raising The Industry Bar
                    </p>
                    <h1
                    className='text-[38px] font-medium leading-tight'>
                        Innovative solutions, lasting results.
                    </h1>
                    <div
                    className='w-[475px] h-[230px] bg-[#082F70] flex flex-col justify-center items-start p-[20px] mt-[43px] text-[22px] gap-[60px]'>
                        <p
                        className='font-light'>
                            Pillar of excellence in the construction industry for over three decades
                        </p>
                        <a 
                        className='font-semibold text-[15px]'
                        href={''}>
                            LEARN MORE
                        </a>
                    </div>
                </div>
                <div
                className='inline-block'>

                </div>

            </div>
        
        </div>
    )
}

export default HeroSection;
