import { Button } from '@nextui-org/react';
import React from 'react';

const Subscribe = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-around gap-5 text-2xl lg:text-3xl bg-[#9C73F7] p-10 '>
      <p className='text-white '>Sign up for our newsletter <span className='font-bold'>and get daily updates</span>  </p>
      <Button className='bg-[#D8F34E] text-black rounded-none text-lg lg:text-2xl lg:p-8 p-6'>Subscribe</Button>
    </div>
  );
};

export default Subscribe;