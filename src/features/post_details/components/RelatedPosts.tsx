'use client'
import RigthArrowIcon from '@/assets/svg/RigthArrowIcon';
import TagCard from '@/features/posts/components/TagCard';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { usePostDetail } from '../hooks/usePostDetail';

const RelatedPosts = () => {

  const { handleNextPosts, currentIndex, posts } = usePostDetail()
  return (
    <div className="container max-w-screen-2xl mx-auto px-5">
      <div className="flex gap-2 w-full">
        <div className='flex items-center justify-between w-full'>
          <p className='text-2xl font-semibold pb-5'>Related Posts</p>
          <Button className='bg-transparent' onPress={handleNextPosts}>
            <p>New post</p>
            <RigthArrowIcon color="#9C73F7" width={44} height={44} />
          </Button>
        </div>
      </div>
      <div className='flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory'>
        {posts?.slice(currentIndex, currentIndex + 3).map((post) => (
          <div
            className='relative flex-shrink-0 w-full lg:w-1/3 max-w-[350px] lg:max-w-none snap-center'
            key={post.id}
          >
            <div className='aspect-w-16 aspect-h-9 w-full'>
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={330}
                className="w-full h-[330px] object-cover"
                priority
              />
            </div>
            <TagCard
              id={post.id}
              tag={post.tags || ""}
              title={post.title || ""}
              readTime={post.timeToRead || ""}
              isWhite
              isRelated
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;