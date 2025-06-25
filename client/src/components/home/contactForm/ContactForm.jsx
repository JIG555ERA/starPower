import React, { useState } from 'react';

const ContactForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        setEmail('');
    };

    return (
        <div className='w-auto h-auto lg:h-[360px] bg-[#082F70] flex justify-center items-center py-[40px] px-4 '>
            <div className='w-full max-w-[1300px] grid grid-cols-1 lg:grid-cols-2'>
                {/* Left side - text */}
                <div className='text-white w-full lg:w-[800px] h-full'>
                    <h1 className='text-[28px] lg:text-[38px] font-semibold'>
                        Stay in the loop.
                    </h1>
                    <p className='text-[16px] lg:text-[18px] font-light pt-[15px] text-[#F7F7F7]'>
                        Keep up to date with new products, all the goss, and anything else you might have missed on twitter.
                    </p>
                </div>

                {/* Right side - input + button */}
                <div className='w-full lg:w-[500px] h-auto flex flex-col mt-6 lg:ml-[150px] lg:mt-[25px]'>
                    <div className='w-full lg:h-[50px] h-[100px] flex flex-col sm:flex-row justify-between gap-4'>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full sm:w-[390px] lg:h-[50px] h-[100px] bg-white px-[15px] text-[16px] text-[#121212] rounded-md font-normal'
                            placeholder='Enter your email'
                            type='email'
                            value={email}
                        />
                        <button
                            onClick={handleSubmit}
                            className='w-full sm:w-[100px] lg:h-[50px] h-[100px] bg-[#F7F7F7] text-center text-[#121212] font-light rounded-md'
                        >
                            Sign UP
                        </button>
                    </div>
                    <p className='text-[12px] font-normal text-white mt-[15px]'>
                        By clicking Sign Up you're confirming that you agree with our Terms and Conditions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
