import React from 'react'
import img01 from '../../../assets/backgroundImages/img01.jpg'
import img02 from '../../../assets/backgroundImages/img02.jpg'
import img03 from '../../../assets/backgroundImages/img03.jpg'
import img04 from '../../../assets/backgroundImages/img04.jpg'
import img05 from '../../../assets/backgroundImages/img05.jpg'
import img06 from '../../../assets/backgroundImages/img06.jpg'

const Application = () => {

    const card = [
        {id: 0, img: img01, head: 'Energy & Power Generation', description: 'Used in fuel cells to generate electricity for homes, businesses, and grid-scale energy storage'},
        {id: 1, img: img02, head: 'Transportation', description: 'Powers hydrogen fuel cell vehicles (cars, buses, trucks, trains, and even ships and aircraft) as a clean alternative to fossil fuels'},
        {id: 2, img: img03, head: 'Industrial Processes', description: 'Essential for refining petroleum, producing ammonia (for fertilizers), and manufacturing chemicals like methanol'},
        {id: 3, img: img04, head: 'Steel & Manufacturing', description: 'Replacing coal in steelmaking to produce low-carbon or "green steel."'},
        {id: 4, img: img05, head: 'Space Exploration', description: 'Used as rocket fuel due to its high energy content and clean combustion'},
        {id: 5, img: img06, head: 'Heating & Building Solutions', description: 'Can be blended with natural gas for heating homes and industries'},
    ]

    return (
        <div
        className='w-[1280px] h-[1100px] mx-auto mt-[48px] flex flex-col'>
            <div
            className='w-full h-[120px] text-center'>
                <h1
                className='text-[32px] font-bold'>
                    Applications of Hydrogen Across Industries
                </h1>
                <p
                className='text-[20px] text-[#898989] font-normal'>
                    Hydrogen is a versatile energy carrier with applications across multiple industries, including
                </p>

            </div>
            <div
            className='w-[1280px] grid grid-cols-3 gap-[26px] mx-auto'>
                {card.map((card, index, array) => (
                    <div
                    key={card.id}
                    className='w-[400px] h-[400px] relative'
                    > 
                        <img 
                        className='w-full h-full object-cover'
                        src={card.img} alt="" />
                        
                        <div
                        className='absolute inset-0 bg-gradient-to-t from-[#082F70] via-white/5 to-white/0 z-10 '/>

                        <div
                        className='absolute z-20 text-white flex flex-col bottom-4 left-4'>
                            <h1
                            className='text-[20px] font-semibold pb-[8px]'>
                                {card.head}
                            </h1>
                            <p
                            className='text-[16px] font-normal pb-[15px] pr-[16px]'>
                                {card.description}
                            </p>
                        </div>
                        

                    </div>
                ))}

            </div>
            <div
            className='w-full h-auto mx-auto'>
                <p
                className='text-[24px] font-semibold bg-gradient-to-r from-[#2DC300] to-[#082F70] bg-clip-text text-transparent text-center mx-auto px-8 mt-[32px]'>
                    With Advancements In Technology, Green Hydrogen Is Expected To Play A Major Role In Global Decarbonization And The Transition To A Sustainable Energy Future
                </p>
            </div>
        </div>
    )
}

export default Application;
