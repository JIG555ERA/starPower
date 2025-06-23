import React from 'react'
import greenEnergyIcon from '../../../assets/icons/greenEnergyIcon.svg'

const InfoSection = () => {

    const card = [
        {id: 0, reference: '01', head: 'Selective Catalysts', description: 'We have developed advanced catalysts specifically aimed at prioritizing hydrogen production over chlorine formation. This ensures cleaner and more efficient chemical reactions'},
        {id: 1, reference: '02', head: 'Membrane Technology', description: 'Our state-of-the-art proton-exchange membranes (PEMs) and separators enhance system efficiency, improve longevity, and guarantee reliability'},
        {id: 2, reference: '03', head: 'Renewable Energy Integration', description: 'The entire process is powered by renewable energy sources such as solar and wind, ensuring a zero-carbon footprint and aligning with our commitment to sustainability'},
        {id: 3, reference: '04', head: 'Scalability', description: 'Our technology is designed for scalability, making it suitable for both industrial and commercial-scale applications while ensuring long-term operational sustainability'},
    ]

    return (
        <div
        className='w-[1280px] mx-auto my-[24px] h-[1290px] gird grid-cols-2 text-black'>
            <div
            className='w-full h-[580px] gird grid grid-rows-2 mx-auto'>
                <div
                className='flex flex-col items-center my-auto'>
                    <h1
                    className='text-[32px] font-bold'>
                        Star Power
                    </h1>
                    <h1
                    className='text-[32px] font-bold bg-gradient-to-r from-[#2DC300] to-[#082F70] bg-clip-text text-transparent'>
                         Pioneering Seawater-Based Green Hydrogen Production
                    </h1>
                    <p
                    className='text-[16px] font-light text-center my-[40px]'>
                        At Star Power, we are proud to be among the first to explore the groundbreaking potential of producing green hydrogen directly from seawater. By harnessing advanced electrolysis technology, we utilize the abundant resource of seawater to generate clean hydrogen energy thereby eliminating the need for using freshwater
                    </p>
                </div>
                <div
                className='flex border-[#E6E6E6] border-2 rounded-4xl my-auto shadow-xl shadow-[#E6E6E6]'>
                    <div
                    className='mx-auto my-[24px]'>
                        <img 
                        className='w-[120px] h-[120px] bg-cover'
                        src={greenEnergyIcon} 
                        alt={greenEnergyIcon} />
                    </div>
                    <div
                    className='flex flex-col text-[16px] font-normal w-[1040px]  mx-auto my-[32px] gap-[24px]'>
                        <p>
                            <span className='text-[#25AA00]'>• This innovative </span>approach combines cutting-edge research with sustainable energy practices, setting us apart as leaders in the clean energy revolution
                        </p>
                        <p>
                            <span className='text-[#25AA00]'>• Our Hydrogen Sea Water Pilot Plant </span>represents a significant step toward a zero-carbon future, using renewable energy sources like solar and wind to power the electrolysis process. This scalable and eco-friendly solution is designed for long-term industrial and commercial applications, making a substantial contribution to decarbonizing industries and reducing our global reliance on fossil fuels
                        </p>
                        <p>
                            <span className='text-[#25AA00]'>• By Integrating </span>seawater electrolysis into the energy landscape, it supports the hydrogen economy and contributes to a sustainable transition to clean energy
                        </p>
                    </div>
                </div>
            </div>

            <div
            className='w-[1280px] h-[630px] pt-[80px] grid grid-rows-2 text-black'>
                <div
                className='w-full h-[210px] flex justify-between'>
                    <div
                    className='w-[520px] font-bold text-[32px]'>
                        <h1
                        className=''>
                            Innovative Seawater Electrolysis
                        </h1>
                        <h1
                        className='text-[24px] bg-gradient-to-r from-[#E34147] to-[#082F70] bg-clip-text text-transparent'>
                            Revolutionizing Green Hydrogen Production
                        </h1>
                    </div>
                    <div
                    className='w-[710px] '>
                        <p
                        className='text-[17px] text-[#2F2F2F] font-normal'>
                            At Star Power, we are at the forefront of transforming energy production with our groundbreaking seawater electrolysis technology. This innovative process enables the efficient production of green hydrogen directly from seawater, offering a sustainable solution without the need for freshwater resources. Our advanced electrolysis technology addresses the key challenges in conventional systems, including chlorine production, electrode corrosion, and energy efficiency, all while maximizing hydrogen output
                        </p>

                    </div>
                </div>
                <div
                className='w-full h-[375px] translate-y-[-2.75vh] flex justify-between'>
                    {card.map((item, index, array) => (
                        <div
                        key={item.id}
                        className='w-[300px] h-[375px] rounded-4xl bg-[#F5FBF0] flex flex-col  p-[40px]'> 
                            <h1
                            className='bg-gradient-to-r from-[#2DC300] to-[#082F70] bg-clip-text text-transparent text-[54px] font-semibold w-[70px]'>
                                {item.reference}
                            </h1>

                            <h2
                            className='text-[#1A1A1A] text-[20px] font-semibold pt-[15px]'>
                                {item.head}
                            </h2>

                            <p
                            className='text-[14px] font-light text-[#4A4A4A] pt-[15px]'>
                                {item.description}
                            </p>
                            
                        </div>
                    ))}

                </div>

            </div>

            
        </div>
    )
}

export default InfoSection
