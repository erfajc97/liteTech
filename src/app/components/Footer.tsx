import FacebookIcon from '@/assets/svg/FacebookIcon';
import LInkedInIcon from '@/assets/svg/LInkedInIcon';
import LogoIcon from '@/assets/svg/LogoIcon';
import XIcon from '@/assets/svg/XIcon';
import React from 'react';

const Footer = () => {

  const socialLinks = [
    <LInkedInIcon key={1} />,
    <FacebookIcon key={2} />,
    <XIcon key={3} />,
  ]
  return (
    <div className='bg-[#9C73F7] p-10 lg:p-14 container max-w-screen-2xl mx-auto '>
      <div className='flex flex-col gap-y-5 lg:flex-row w-full justify-center items-center lg:justify-between'>
        <div className='flex items-center gap-2'>
          <LogoIcon />
          <p className='text-2xl font-bold text-white'>Lite-tech</p>
        </div>
        <div className='flex items-center gap-5'>
          {socialLinks.map((link, index) => (
            <div key={index}>{link}</div>
          ))}
        </div>
      </div>
      <div>
        <p className='mt-10 text-white text-base text-center lg:text-left'>© Copyright Lite-Tech.<br className='lg:hidden' /> <br className='lg:hidden' /> All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;