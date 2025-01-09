import { Skeleton } from '@nextui-org/react';
import React from 'react';

const CardSkeleton = () => {
  return (
    <div className="absolute bottom-8 lg:bottom-14 md:left-10 left-1/2 transform -translate-x-1/2 md:translate-x-0 z-40 ">
      <Skeleton className="max-w-[220px] p-2 lg:p-4 bg-slate-400 border-2 border-slate-300 rounded-lg">
        <div className="h-8 rounded-full bg-default-200"></div>
      </Skeleton>

      <Skeleton className="min-w-[250px] lg:max-w-[640px] p-2 lg:p-4 mt-2 bg-slate-400 border-2 border-slate-300 rounded-lg">
        <div className="h-16 rounded-lg bg-default-200"></div>

        <div className="flex items-center justify-between gap-2 mt-2 lg:mt-8">
          <div className="flex items-center gap-2">
            <div className="h-10 w-24 rounded-lg bg-default-200"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-default-200"></div>
            <div className="h-8 w-20 rounded-lg bg-default-200"></div>
          </div>
        </div>
      </Skeleton>
    </div>
  );
};

export default CardSkeleton;