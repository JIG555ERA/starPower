import React from 'react';
import { ArrowRight } from 'lucide-react';
import img01 from '../../../assets/blogsImages/img01.svg';
import img02 from '../../../assets/blogsImages/img02.svg';
import img03 from '../../../assets/blogsImages/img03.svg';

const BlogsSection = () => {
  const blogsContext = [
    {
      id: 0,
      img: img01,
      date: { date: 19, month: 'SEP' },
      titleLink: 'Construction',
      head: 'Innovative Construction Techniques Transforming the Industry',
    },
    {
      id: 1,
      img: img02,
      date: { date: 19, month: 'SEP' },
      titleLink: 'Construction',
      head: 'Innovative Construction Techniques Transforming the Industry',
    },
    {
      id: 2,
      img: img03,
      date: { date: 19, month: 'SEP' },
      titleLink: 'Construction',
      head: 'Innovative Construction Techniques Transforming the Industry',
    },
  ];

  return (
    <div className="w-full lg:h-[500px] max-w-[1440px] mx-auto px-4 gap-[80px] flex flex-col justify-center text-[#121212] lg:mt-[0px] mt-[40px]">
      {/* Heading */}
      <div className="flex justify-center">
        <h1 className="text-[38px] font-semibold">Blogs</h1>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] lg:gap-[80px]">
        {blogsContext.map((blog) => (
          <div
            key={blog.id}
            className="w-full max-w-[380px] h-[600px] flex flex-col group relative mx-auto"
          >
            {/* Image */}
            <div className="w-full h-[345px] overflow-hidden relative">
              <img
                className="w-full h-fit group-hover:scale-150 ease-in-out duration-700"
                src={blog.img}
                alt=""
              />
            </div>

            {/* Date Badge */}
            <div className="absolute z-10 bg-[#F35F24] w-[85px] h-[75px] flex flex-col justify-center items-center shadow-lg
                right-[20px] top-[245px] sm:right-[25px] sm:top-[295px]">
              <h2 className="text-[24px] text-white font-semibold">
                {blog.date.date}
              </h2>
              <p className="text-[13px] text-white font-semibold -translate-y-[6px]">
                {blog.date.month}
              </p>
            </div>

            {/* Content */}
            <div className="w-full h-[255px] flex flex-col justify-center gap-[20px] pt-[20px] px-2 sm:px-0">
              <div>
                <u>
                  <a
                    className="text-[#515151] text-[14px] font-light"
                    href={blog.titleLink}
                  >
                    {blog.titleLink}
                  </a>
                </u>
              </div>

              <div className="text-[#121212] text-[20px] font-semibold pr-[20px] h-[120px] group-hover:text-[#E34147]">
                {blog.head}
              </div>

              <hr />

              <div className="flex items-center mt-[20px]">
                <a
                  className="text-[15px] text-[#515151] mr-[12px] font-semibold"
                  href={blog.titleLink}
                >
                  READ MORE
                </a>
                <ArrowRight className="w-[16px] h-[16px] text-[#F35F24]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
