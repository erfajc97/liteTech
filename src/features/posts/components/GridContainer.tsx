import React from 'react';
import { Post } from '../types';
import TagCard from './TagCard';
import Image from 'next/image';

const GridContainer = ({ posts, isReverse }: { posts: Post[], isReverse?: boolean }) => {
  return (
    <div className={`lg:flex ${isReverse && 'flex-row-reverse'} lg:items-center justify-center lg:py-10 py-5`}>
      {posts?.slice(0, 1).map((post: Post) => (
        <div className='relative flex-1' key={post.id}>
          <Image
            src={post.image}
            alt={post.title}
            width={1000}
            height={830}
            className="w-full lg:h-[1000px] min-h-[400px] object-cover"
            priority
          />
          <TagCard id={post.id} tag={post.tags || ""} title={post.title || ""} readTime={post.timeToRead || ""} isWhite />
        </div>
      ))}
      <div className='flex-1'>
        {posts?.slice(1, 3).map((post: Post) => (
          <div className='relative p-5 flex-1' key={post.id}>
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={300}
              className="w-full lg:h-[480px] min-h-[400px] object-cover"
              priority
            />
            <TagCard id={post.id} tag={post.tags || ""} title={post.title || ""} readTime={post.timeToRead || ""} isWhite />
          </div>
        ))}
      </div>

    </div>
  );
};

export default GridContainer;