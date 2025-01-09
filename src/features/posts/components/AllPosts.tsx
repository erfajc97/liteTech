import React from 'react';
import { Post } from '../types';
import '../styless.css';
import GridContainer from './GridContainer';
import { Button } from '@nextui-org/react';
import Subscribe from './Subscribe';
import MostViewed from './MostViewed';

interface AllPostsProps {
  theRestOfPosts: Post[];
  thefirstThreePosts: Post[];
  currentPage: number;
  setCurrentPage: (page: number) => void;

}

const AllPosts = ({ theRestOfPosts, thefirstThreePosts, currentPage, setCurrentPage }: AllPostsProps) => {
  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  }
  const renderGridContainers = (posts: Post[]) => {
    return posts.reduce((acc: JSX.Element[], _, index) => {
      if (index % 3 === 0) {
        const chunk = posts.slice(index, index + 3);
        if (chunk.length > 0) {
          acc.push(<GridContainer key={index} posts={chunk} isReverse={index % 2 === 0} />);
        }
      }
      return acc;
    }, []);
  }
  return (
    <div className='flex'>
      <div className='2xl:w-[76vw]'>
        <div className="flex">
          <GridContainer posts={thefirstThreePosts} />
        </div>
        <Subscribe />
        {renderGridContainers(theRestOfPosts)}
        <div className='flex items-center justify-center mt-5'>
          <Button onPress={handleLoadMore} className='bg-[#D8F34E] text-black rounded-none text-lg lg:text-2xl lg:p-8 p-6'>Load more</Button>
        </div>
      </div>
      <MostViewed />
    </div>
  );
};

export default AllPosts;