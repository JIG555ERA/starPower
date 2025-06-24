import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import leftArrowIcon from '../../../assets/icons/leftArrowIcon.svg'
import rightArrowIcon from '../../../assets/icons/rightArrowIcon.svg'

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2  rounded-full hover:scale-105 transition"
  >
    {/* <ArrowLeft className="w-6 h-6 text-gray-800" /> */}
    <img src={leftArrowIcon} alt="" />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2  rounded-full hover:scale-105 transition"
  >
    {/* <ArrowRight className="w-6 h-6 text-gray-800" /> */}
    <img src={rightArrowIcon} alt="" />
  </button>
);

const CustomerTestimonialsSection = ({ deviceType = "desktop" }) => {
  const employeeContext = [
    { id: 0, name: 'Rahul Mehta', position: 'Project Manager, Infrastructure Development Firm' },
    { id: 1, name: 'Tony Stark', position: 'CEO, Stark Industries' },
    { id: 2, name: 'Banner', position: 'Lead Research Team' },
    { id: 3, name: 'Peter Parker', position: 'AI Engineer' },
  ];

  return (
    <section className="w-full px-4 md:px-12 lg:px-20 my-20 text-[#121212] lg:mt-[200px]">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-[38px] font-semibold">
          Customer Testimonials
        </h1>
      </div>

      {/* Static Description */}
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-center text-gray-600 text-lg md:text-xl font-light">
          The expertise and professionalism displayed throughout the project were exceptional. The team ensured smooth execution, delivering a high-quality and energy-efficient solution that exceeded our expectations.
        </p>
      </div>

      {/* Carousel */}
      <div className="max-w-2xl mx-auto relative">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={deviceType !== "mobile"}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="ease-in-out 0.5s"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          deviceType={deviceType}
          itemClass="carousel-item-padding-40-px"
        >
          {employeeContext.map((emp) => (
            <div
              key={emp.id}
              className="text-center px-6 py-8 rounded-xl transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{emp.name}</h2>
              <p className="text-md text-gray-600">{emp.position}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CustomerTestimonialsSection;
