import Image from 'next/image';
import React from 'react';

const MostViewed = ({ colorText = "white" }: { colorText?: string }) => {
  const mostViewedPosts = [
    { id: 1, src: "/png/Image.png", title: "Your TV Sounds Awful. These Soundbars Can Fix That" },
    { id: 2, src: "/png/Image1.png", title: "The Small Company at the Center of 'Gamergate 2.0'" },
    { id: 3, src: "/png/Image2.png", title: "Craig Wright Is Not Bitcoin Creator Satoshi Nakamoto, Judge Declares" },
    { id: 4, src: "/png/Image3.png", title: "Robert F. Kennedy Jr. Targets a Generation of Politically Disaffected, Extremely Online Men" },
  ]
  return (
    <div className={`hidden 2xl:block  mt-14 px-5 ${colorText === "white" ? "2xl:w-[20vw]" : ""}`}>
      <p className={`text-2xl font-bold ${colorText === "white" ? "text-white" : "text-black"}`}>Most viewed</p>
      <div className='flex flex-col gap-4'>
        {mostViewedPosts.map((post) => (
          <div key={post.id} className='flex items-center gap-4 border-b border-[#595959] pb-4'>
            <p className={`${colorText === "white" ? "text-white" : "text-black"}`}>{post.title}</p>
            <Image src={post.src} alt={`Most Viewed Post ${post.id}`} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostViewed;