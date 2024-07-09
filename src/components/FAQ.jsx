import React from 'react'

const FAQ = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center relative my-40'>
                <div className='mt-8  text-3xl font-bold '>
                    <h2>Frequently Asked <span className='text-col2'>Questions</span></h2>
                </div>
                <div className='flex flow-row justify-center items-center gap-[100px] mt-20 '>
                    <div className='flex flex-col gap-4'>
                        <div className='border-2  border-r-col5 flex justify-center items-center shadow-custom rounded-[7px] w-[259px] h-[68px]'>
                            <p className='text-col2 font-bold'>Eligibility</p>
                        </div>
                        <div  className='border-2 bg-white border-col6 flex justify-center items-center  rounded-[7px] w-[259px] h-[68px]'>
                            <p className='text-col6 font-bold'>How To Use?</p>
                        </div>
                        <div className='border-2 bg-white border-col6 flex justify-center items-center  rounded-[7px] w-[259px] h-[68px]'>
                            <p className='text-col6 font-bold'>Terms & Condition</p>
                        </div>
                    </div>
                    <div className='w-[920px] space-y-10'>
                        <details >
                            <summary className='flex flex-row justify-start items-center font-bold text-col2  gap-5'>Do I need to have prior Product Management and Project Management experience to enroll in the program?
                                <svg className='rotate-180' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.40982 7.40997L5.99982 2.82997L10.5898 7.40997L11.9998 5.99997L5.99982 -2.67029e-05L-0.000183105 5.99997L1.40982 7.40997Z" fill="black" fill-opacity="0.54" />
                                </svg>

                            </summary>
                            <p className='mt-10'>No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it
                                suitable for individuals from any field of work.</p>
                        </details>
                        <details>
                            <summary className='flex flex-row justify-start items-center font-bold  gap-5'>What is the minimum system configuration required?
                                <svg className='rotate-180' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.40982 7.40997L5.99982 2.82997L10.5898 7.40997L11.9998 5.99997L5.99982 -2.67029e-05L-0.000183105 5.99997L1.40982 7.40997Z" fill="black" fill-opacity="0.54" />
                                </svg>

                            </summary>
                            <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quas id deleniti corporis error, mollitia quasi obcaecati dolor beatae animi deserunt ea, velit asperiores modi saepe. Laboriosam cupiditate esse dolore?</p>
                        </details>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
