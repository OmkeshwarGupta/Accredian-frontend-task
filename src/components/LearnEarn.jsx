import React from 'react';
import image from '../assets/learnearn.png';
import paper from '../assets/paper.png';

const LearnEarn = ({refer, setRefer}) => {
    
    const clickHandler = () => {
        console.log('clicked')
        console.log(refer)
        setRefer(true)
    }
  return (
    <div className='w-full flex justify-center items-center mt-6'>
      <div className='relative w-[1080px] h-[600px] bg-col1 rounded-[29px] p-10 overflow-hidden  shadow-custom'>
        <div className='flex flex-row justify-between items-center h-full'>
          <div className='flex flex-col justify-center gap-5 '>
            <h1 className='text-7xl font-bold mb-4 w-[400px]'>Let’s Learn & Earn</h1>
            <h3 className='text-4xl mb-6 w-[350px] mt-10'>
              Get a chance to win up-to <span className='text-[#1A73E8] font-bold'>Rs. 15,000</span>
            </h3>
            <button className='bg-col2 px-[16px] py-[8px] rounded-md text-white inline-block  w-[192px] '
            onClick={()=>clickHandler()}
            >Refer Now</button>
          </div>
          <div>
            <img src={image} alt="Learn and Earn" className='scale-140 ' />
          </div>
        </div>
        <div className='absolute top-0 left-14 -scale-x-100  rotate-180  transform -translate-x-12 -translate-y-12'>
          <img src={paper} alt="Paper Icon" className='w-[157px]' />
        </div>
        <div className='absolute top-0 -right-10 rotate-180 transform -translate-x-12 -translate-y-12'>
          <img src={paper} alt="Paper Icon" className='w-[157px]' />
        </div>
        <div className='absolute top-[80px] right-[350px] rotate-180 transform -translate-x-12 -translate-y-12  -z-10 '>
          <img src={paper} alt="Paper Icon" className='w-[157px]' />
        </div>
       
        <div className='absolute top-[300px] -right-10 -scale-x-100  rotate-180  transform -translate-x-12 -translate-y-12 -z-10'>
          <img src={paper} alt="Paper Icon" className='w-[157px]' />
        </div>
        <div className='absolute top-[480px] left-[450px] -scale-x-100   transform -translate-x-12 -translate-y-12'>
          <img src={paper} alt="Paper Icon" className='w-[157px]' />
        </div>
      </div>
    </div>
  );
};

export default LearnEarn;
