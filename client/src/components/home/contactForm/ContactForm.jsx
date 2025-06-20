import React, { useState } from 'react'


const ContactForm = () => {

    const [ email, setEmail ] = useState('');
    
    const handleSubmit = () => {
        setEmail('')
    }

    return (
        <div
        className='w-auto h-[350px] bg-[#082F70] flex justify-center items-center'>
            <div
            className='grid grid-cols-2 w-[1300px] h-[120px] mx-auto'>
                <div
                className='text-white w-[800px] h-full'>
                    <h1
                    className='text-[42px] font-semibold'>
                        Stay in the loop.
                    </h1>
                    <p
                    className='text-[18px] font-light pt-[15px]'>
                        Keep up to date with new products, all the goss, and anything else you might have missed on twitter.
                    </p>
                </div>
                <div
                className='w-[500px] h-[80px] flex flex-col ml-[150px] mt-[25px]'>
                    <div
                    className='w-full h-[50px] flex justify-between'>
                        <input 
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-[390px] h-full bg-white px-[15px] text-[16px] text-[#121212] rounded-md font-normal'
                        placeholder='Enter your email'
                        type="email" 
                        value={email}/>
                        <button
                        onClick={handleSubmit}
                        className='w-[100px] h-full bg-[#F7F7F7] text-center text-[#121212] font-light rounded-md'>
                            Sign UP
                        </button>
                    </div>
                    <p
                    className='text-[12px] font-normal text-white mt-[15px]'>
                        By clicking Sign Up you're confirming that you agree with our Terms and Conditions.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;
