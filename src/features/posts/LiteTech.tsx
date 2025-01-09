"use client"
import React, { Suspense } from 'react';
import Image from 'next/image';
import usePostsHook from './hooks/usePostsHook';
import AllPosts from './components/AllPosts';
import TagCard from './components/TagCard';
import Topics from './components/Topics';
import BannerSkeleton from '../../app/components/skeleton/BannerSkeleton';

const LiteTech = () => {
  const { bannerPosts, thefirstThreePosts, theRestOfPostsFirstPage, loading, currentPage, setCurrentPage } = usePostsHook();
  return (
    <div className="pt-14">
      <p className='pb-5 text-white text-lg hidden md:block'>Today story</p>
      <div className='relative'>
        <Suspense fallback={<BannerSkeleton />}>
          {loading || !bannerPosts ? (
            <BannerSkeleton />
          ) : (
            <>
              <Image
                src={bannerPosts?.image || ""}
                alt={bannerPosts?.title || ""}
                width={1200}
                height={630}
                className="w-full md:h-auto h-[400px] object-cover"
                priority
              />
              <TagCard id={bannerPosts?.id || ""} tag={bannerPosts?.tags || ""} title={bannerPosts?.title || ""} readTime={bannerPosts?.timeToRead || ""} />
            </>
          )}
        </Suspense>
      </div>
      <Topics />
      <AllPosts theRestOfPosts={theRestOfPostsFirstPage} thefirstThreePosts={thefirstThreePosts} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default LiteTech;