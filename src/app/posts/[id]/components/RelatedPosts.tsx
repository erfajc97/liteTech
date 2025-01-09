import RigthArrowIcon from '@/assets/svg/RigthArrowIcon';
import { Button } from '@nextui-org/react';
import React from 'react';

const RelatedPosts = () => {
  return (
    <div className='container max-w-screen-2xl mx-auto flex gap-2 w-full'>
      <div className='flex items-center justify-between w-full'>
        <p className='text-2xl font-semibold pb-5'>Related Posts</p>
        <Button className='bg-transparent'>
          <p>New postl</p>
          <RigthArrowIcon color="#9C73F7" width={44} height={44} />
        </Button>
      </div>
    </div >
  );
};

export default RelatedPosts;