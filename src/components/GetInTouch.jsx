import React from 'react'

const GetInTouch = () => {



    return (
        <div>
            <div className='flex flex-row justify-center items-center mb-40'>
                <div className='bg-col2 w-[1360px] h-[210px]  rounded-xl flex justify-center items-center relative -z-40 overflow-hidden'>
                    <div className='flex flex-row justify-center items-center gap-10 absolute left-20'>
                        <div className='w-[72px] h-[72px] bg-white rounded-xl relative'>
                            <div className='absolute top-3 left-3'>
                                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M47 16.6667C49.5774 16.6667 51.6666 18.756 51.6666 21.3334V30.6667C51.6666 33.2441 49.5774 35.3334 47 35.3334H44.5222C43.374 44.5414 35.519 51.6667 26 51.6667V47C33.7319 47 40 40.732 40 33V19C40 11.2681 33.7319 5.00004 26 5.00004C18.268 5.00004 12 11.2681 12 19V35.3334H4.99998C2.42265 35.3334 0.333313 33.2441 0.333313 30.6667V21.3334C0.333313 18.756 2.42265 16.6667 4.99998 16.6667H7.47772C8.62596 7.45865 16.4809 0.333374 26 0.333374C35.519 0.333374 43.374 7.45865 44.5222 16.6667H47ZM16.1053 34.8315L18.579 30.8737C20.7304 32.2212 23.2742 33 26 33C28.7258 33 31.2696 32.2212 33.4209 30.8737L35.8947 34.8315C33.0261 36.6281 29.6344 37.6667 26 37.6667C22.3656 37.6667 18.9739 36.6281 16.1053 34.8315Z" fill="#1A73E8" />
                                </svg>
                            </div>

                        </div>
                        <div className='text-white font-semibold'>
                            <h2 className='text-3xl '>Want to delve deeper into the program?</h2>
                            <p>Share your details to receive expert insights from our program team!</p>
                        </div>


                    </div>
                    <div className='flex justify-center items-center absolute right-20'>
                        <button className='bg-white text-col2 w-[200px] h-[52px] text-[19px] font-semibold rounded-lg flex justify-center items-center gap-5'>Get in touch
                            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.78827 7L0.823425 2.03906C0.456238 1.67188 0.456238 1.07812 0.823425 0.714844C1.19061 0.351563 1.78436 0.351563 2.15155 0.714844L7.77655 6.33594C8.13202 6.69141 8.13983 7.26172 7.80389 7.62891L2.15546 13.2891C1.97186 13.4727 1.72968 13.5625 1.49139 13.5625C1.25311 13.5625 1.01093 13.4727 0.827332 13.2891C0.460144 12.9219 0.460144 12.3281 0.827332 11.9648L5.78827 7Z" fill="#3B82F6" />
                            </svg>

                        </button>
                        <div>
                        <div className='w-[632px] h-[632px] bg-c1 rounded-full absolute -right-20 -top-16 -z-30'></div>
                        <div  className='w-[515px] h-[515px] bg-c2 rounded-full absolute -right-6 -top-0 -z-20'></div>
                        <div  className='w-[375px] h-[375px] bg-c3 rounded-full absolute right-11 top-16 -z-10'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch
