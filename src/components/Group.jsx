import React, { useState } from 'react';

const Group = () => {
  const [selected, setSelected] = useState('Refer');

  const handleClick = (item) => {
    setSelected(item);
  };

  const items = ['Refer', 'Benefits', 'FAQs', 'Support'];

  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-[500px] flex justify-evenly items-center h-12 bg-col1 rounded-[38px] mt-10 text-lg '>
        {items.map((item) => (
          <div key={item} onClick={() => handleClick(item)} className='flex flex-col items-center cursor-pointer'>
            <p className={selected === item ? 'text-[#1A73E8]' : ''}>{item}</p>
            {selected === item && <div className='w-[6px] h-[6px] rounded-full bg-[#1A73E8] mt-1'></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Group;
