import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-[1080px] flex flex-row justify-between items-center p-3'>
                <div className='flex flex-row gap-[32px]'>
                    <img src={logo} alt="" className='w-[125px]' />
                    <button className='bg-col2 text-white px-[16px] py-[8px] rounded-md flex justify-center items-center gap-1'>Courses
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 4.79082L9.96875 0.818945C10.2625 0.525195 10.7375 0.525195 11.0281 0.818945C11.3187 1.1127 11.3187 1.5877 11.0281 1.88145L6.53125 6.38145C6.24687 6.66582 5.79062 6.67207 5.49687 6.40332L0.96875 1.88457C0.821875 1.7377 0.75 1.54395 0.75 1.35332C0.75 1.1627 0.821875 0.968946 0.96875 0.82207C1.2625 0.528321 1.7375 0.528321 2.02812 0.82207L6 4.79082Z" fill="white" />
                        </svg>

                    </button>
                </div>
                <div className='flex justify-center items-center gap-8 text-text2'>
                    <h2>Refer & Earn</h2>
                    <div className='flex gap-8'>
                        <h2>Resoures</h2>
                        <h2>About us</h2>
                    </div>


                    <button className='bg-btn1 px-[16px] py-[8px] rounded-md '>Login</button>
                    <button className='bg-col2 px-[16px] py-[8px] rounded-md text-white '>Try for free</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
