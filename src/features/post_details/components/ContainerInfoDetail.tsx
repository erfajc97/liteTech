import FacebookIcon from '@/assets/svg/FacebookIcon';
import LInkedInIcon from '@/assets/svg/LInkedInIcon';
import XIcon from '@/assets/svg/XIcon';
import React from 'react';
import MostViewed from '@/features/posts/components/MostViewed';
import InfoDetail from './InfoDetail';

const ContainerInfoDetail = () => {
  const socialLinks = [
    <LInkedInIcon key={1} color='black' />,
    <FacebookIcon key={2} color='black' />,
    <XIcon key={3} color='black' />,
  ]
  return (
    <div className='container max-w-screen-2xl mx-auto flex gap-2'>
      <div className='flex-1 hidden lg:block mt-10'>
        <p className='text-2xl font-semibold pb-5'>Share on</p>
        <div className='flex items-center gap-5'>
          {socialLinks.map((link, index) => (
            <div key={index}>{link}</div>
          ))}
        </div>
      </div>
      <div className='flex-2 mt-10 px-5'>
        <InfoDetail />
      </div>
      <div className='flex-1 hidden lg:block'><MostViewed colorText='black' /></div>
    </div>
  );
};

export default ContainerInfoDetail;