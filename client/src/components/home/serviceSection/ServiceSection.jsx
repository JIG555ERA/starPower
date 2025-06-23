import React from 'react'
import { ArrowRight } from 'lucide-react'
import serviceImage from '../../../assets/backgroundImages/bgImage02.svg'
import MEPSolutionsIcon from '../../../assets/icons/icon01.svg'
import EPCContractingIcon from '../../../assets/icons/icon02.svg'

const ServiceSection = () => {

    const cardContext = [
        {id: 0, img: MEPSolutionsIcon, head: 'M.E.P. Solutions', description: 'Design, installation & maintenance of mechanical, electrical, and plumbing systems', link: ''},
        {id: 1, img: EPCContractingIcon, head: 'EPC Contracting', description: 'Design, installation & maintenance of mechanical, electrical, and plumbing systems', link: ''},
    ]

    return (
        <div
        className='w-full h-[690px] mt-[100px] flex flex-col justify-center items-center text-black'>
            <img 
            className='cover w-full'
            src={serviceImage} 
            alt="" />
            
            <div
            className='absolute z-20 w-[800px] h-[530px] px-[300px] py-[80px] flex flex-col justify-between items-center'>
                <div
                className='w-[800px]'>
                    <h1
                    className='text-[38px] font-semibold text-center translate-y-[-100px]'>
                        Our Services
                    </h1>
                </div>
                <div
                className='w-[800px] h-[290px] gap-[80px] grid grid-cols-2 my-[80px] translate-y-[-100px]'>
                    {cardContext.map((card, index, array) => (
                        <a 
                        key={card.id}
                        href={card.link}>
                            <div
                            className='w-[360px] h-[290px] flex flex-col justify-center items-center p-[40px] bg-white gap-[20px]'>
                                <img 
                                className='w-[70px] h-[70px] cover'
                                src={card.img} 
                                alt={card.img}/>

                                <h1
                                className='text-[20px] font-semibold'>
                                    {card.head}
                                </h1>

                                <p
                                className='text-[14px] font-light text-center'>
                                    {card.description}
                                </p>

                            </div>
                        </a>
                    ))}

                </div>
                <a 
                className='group'
                href={''}>
                    <div
                    className='transition-all duration-1200 ease-out w-[275px] h-[60px] bg-[#082F70] flex transform mt-[20px] translate-y-[-140px]'>
                        <div
                        className='mx-auto my-auto flex'>
                            <p
                            className='text-white text-[15px] font-semibold mr-[16px]'>
                                VIEW ALL SERVICES
                            </p>
                            <ArrowRight className='w-[24px] h-[24px] text-white font-semibold group-hover:rotate-[-24deg] duration-100'/>
                        </div>
                    </div>
                </a>
                
            </div>
        
        </div>
    )
}

export default ServiceSection;
