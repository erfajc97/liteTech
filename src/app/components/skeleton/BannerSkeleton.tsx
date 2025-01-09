import React from 'react';
import CardSkeleton from './CardSkeleton';
import { Skeleton } from '@nextui-org/react';

const BannerSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-full md:h-[630px] h-[400px] rounded-lg">
        <div className="h-full w-full rounded-lg bg-default-300">
        </div>
      </Skeleton>
      <CardSkeleton />
    </div>
  );
};

export default BannerSkeleton;