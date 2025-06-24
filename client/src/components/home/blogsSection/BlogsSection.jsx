import React from 'react'
import { ArrowRight } from 'lucide-react'
import img01 from '../../../assets/blogsImages/img01.svg'
import img02 from '../../../assets/blogsImages/img02.svg'
import img03 from '../../../assets/blogsImages/img03.svg'

const BlogsSection = () => {

    const blogsContext = [
        {id: 0, img: img01, date: {date: 19, month: 'SEP'}, titleLink: 'Construction', head: 'Innovative Construction Techniques Transforming the Industry'},
        {id: 1, img: img02, date: {date: 19, month: 'SEP'}, titleLink: 'Construction', head: 'Innovative Construction Techniques Transforming the Industry'},
        {id: 2, img: img03, date: {date: 19, month: 'SEP'}, titleLink: 'Construction', head: 'Innovative Construction Techniques Transforming the Industry'},
    ]

    return (
        <div
        className='w-[1440px] mx-auto h-screen gap-[80px] flex flex-col justify-center text-[#121212] mb-[80px]'>
            <div
            className='flex justify-center'>
                <h1
                className='text-[38px] font-semibold'>
                    Blogs
                </h1>
            </div>
            <div
            className='gap-[80px] h-[600px] grid grid-cols-3 mx-auto'>
                {blogsContext.map((blog, index, array) => (
                    <div
                    key={blog.id}
                    className='w-[380px] h-[600px] flex flex-col group'>
                        <div
                        className='w-full h-[345px] overflow-hidden'>
                            <img 
                            className='w-full h-fit group-hover:scale-150 ease-in-out duration-700'
                            src={blog.img} alt="" />
                            <div
                            className='absolute z-20 w-[85px] h-[75px] bg-[#F35F24] flex flex-col justify-center items-center translate-x-[275px] translate-y-[-50px]'>
                                <h2
                                className='text-[24px] text-white font-semibold'>
                                   {blog.date.date} 
                                </h2>
                                <p
                                className='text-[13px] text-white font-semibold translate-y-[-8px]'>
                                    {blog.date.month}
                                </p>

                            </div>
                        </div>
                        <div
                        className='w-full h-[255px] flex flex-col justify-center gap-[20px] pt-[20px]'>
                            <div>
                                <u>
                                <a 
                                className='text-[#515151] text-[14px] font-light translate-y-[200px]'
                                href={blog.titleLink}>
                                    {blog.titleLink}
                                </a>
                                </u>
                            </div>
                            <div
                            className='text-[#121212] text-[20px] font-semibold pr-[100px] w-[full] h-[120px] group-hover:text-[#E34147]'>
                                {blog.head}
                            </div>
                            <hr />
                            <div
                            className='flex items-center mt-[20px]'>
                                <a className='text-[15px] text-[#515151] mr-[12px] font-semibold' href={blog.titleLink}>READ MORE</a><ArrowRight className='w-[16px] h-[16px] text-[#F35F24]'/>
                            </div>
                            
                        </div> 

                    </div>
                ))}
            </div>
        
        </div>
    )
}

export default BlogsSection;
