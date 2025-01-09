import React, { Suspense } from 'react';
import { getOnePostByIdServices } from '@/features/posts/services/getOnePostByIdServices';
import BannerSkeleton from '@/app/components/skeleton/BannerSkeleton';
import Image from 'next/image';
import TagCard from '@/features/posts/components/TagCard';
import ContainerInfoDetail from './components/ContainerInfoDetail';
import RelatedPosts from './components/RelatedPosts';


const page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const response = await getOnePostByIdServices({ id });
  const post = response?.data?.response;
  return (
    <div className='pt-14 relative -top-20'>
      <div className='relative'>

        <Suspense fallback={<BannerSkeleton />}>
          {post ? (
            <>
              <Image
                src={post?.image || ""}
                alt={post?.title || ""}
                width={1200}
                height={830}
                className="w-full md:max-h-[800px] h-[500px] object-cover"
                priority
              />
              <TagCard id={post?.id || ""} tag={post?.tags || ""} title={post?.title || ""} readTime={post?.timeToRead || ""} isWhite disabled />
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

export default page;