"use client"
import React, { Suspense } from 'react';
import BannerSkeleton from '@/app/components/skeleton/BannerSkeleton';
import Image from 'next/image';
import TagCard from '@/features/posts/components/TagCard';
import ContainerInfoDetail from './components/ContainerInfoDetail';
import RelatedPosts from './components/RelatedPosts';
import { usePostDetail } from './hooks/usePostDetail';

const PostDetail = () => {
  const { onePost } = usePostDetail();
  return (
    <div className='pt-14 relative -top-20'>
      <div className='relative'>

        <Suspense fallback={<BannerSkeleton />}>
          {onePost ? (
            <>
              <Image
                src={onePost?.image || ""}
                alt={onePost?.title || ""}
                width={1200}
                height={830}
                className="w-full md:max-h-[800px] h-[500px] object-cover"
                priority
              />
              <TagCard id={onePost?.id || ""} tag={onePost?.tags || ""} title={onePost?.title || ""} readTime={onePost?.timeToRead || ""} isWhite disabled />
            </>
          ) : (
            <BannerSkeleton />
          )}
        </Suspense>
      </div>
      <ContainerInfoDetail />
      <RelatedPosts />
    </div>
  );
};

export default PostDetail;