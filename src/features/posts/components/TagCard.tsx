'use client'
import ReadIcon from '@/assets/svg/ReadIcon';
import RigthArrowIcon from '@/assets/svg/RigthArrowIcon';
import { Button, Link } from '@nextui-org/react';
import React from 'react';

interface TagCardProps {
  tag: string;
  title: string;
  readTime: string;
  isWhite?: boolean;
  id: string;
  disabled?: boolean;
  isRelated?: boolean;
}

const TagCard = ({ tag, title, readTime, isWhite, id, disabled, isRelated }: TagCardProps) => {
  return (
    <div className={`absolute bottom-8 ${isRelated ? 'lg:bottom-5' : 'lg:bottom-14'} md:left-10 left-1/2 transform -translate-x-1/2 md:translate-x-5 z-40`}>
      <div className={` max-w-[220px] p-2 ${isRelated ? 'lg:p-2' : 'lg:p-4'} ${isWhite ? 'bg-white' : 'bg-black'}`}>
        <div className={`bg-[#D8F34E] rounded-full ${isRelated ? 'lg:p-1' : 'lg:p-2'} p-1`}>
          <p className="text-black text-[12px] lg:text-sm text-center font-bold">{tag}</p>
        </div>
      </div>
      <div className={` ${isRelated ? 'min-w-[200px] lg:max-w-[350px]' : 'min-w-[250px] lg:max-w-[440px]'}  p-2 ${isRelated ? 'lg:p-2' : 'lg:p-4'}  ${isWhite ? 'bg-white' : 'bg-black'}`}>
        <p className={` max-w-[480px] text-base ${isRelated ? 'lg:text-2xl' : 'lg:text-4xl'} font-bold leading-normal ${isWhite ? 'text-black' : 'text-white'}`}>
          {title}
        </p>
        <div className="flex items-center justify-between gap-2 mt-2 lg:mt-8">
          <Link className={`${disabled ? 'hidden' : ''}`} href={`/posts/${id}`}>
            <Button endContent={<RigthArrowIcon color="#9C73F7" width={44} height={44} />} className="bg-transparent">
              <p className={`text-base ${isRelated ? 'lg:text-2xl' : 'lg:text-3xl'} font-bold ${isWhite ? 'text-black' : 'text-white'}`}>Read</p>
            </Button>
          </Link>
          <div className='flex items-center gap-2'>
            <ReadIcon className='w-5 lg:w-10 h-5 lg:h-10' />
            <p className='text-[#595959] text-base lg:text-2xl'>{readTime} min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagCard;