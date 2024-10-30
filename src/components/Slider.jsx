import React from 'react'

const Slider = () => {
    return (
        <div className='w-[100%] h-[100vh] bg-[coral] flex relative'>
            {/* left arrow */}
            <div className='bg-[#fff7f7] w-[50px] h-[50px] justify-center flex align-middle items-center rounded-3xl absolute top-0 bottom-0 m-auto left-[10px] cursor-pointer '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

            </div>
            {/* right arrow */}
            <div className='bg-[#fff7f7] w-[50px] h-[50px] justify-center flex align-middle items-center rounded-3xl absolute top-0 bottom-0 m-auto right-[10px]  cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>


            </div>
        </div>
    )
}

export default Slider
