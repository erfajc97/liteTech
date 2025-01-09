import React, { useState } from 'react';
const topics = ["All", "Diversity & Inclusion", "Tech companies", "Crypto", "Security", "Global", "Leaks"];

const Topics = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const handleTopicClick = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  return (
    <div className='flex flex-col lg:items-center md:flex-row gap-3 pt-5'>
      <h3 className='text-white text-lg font-bold mb-2 lg:mb-4'>Topics</h3>
      <div className='flex gap-2 w-[90vw] md:w-[85vw]  overflow-x-auto pb-5'>
        {topics.map((topic, index) => {
          const isSelected = selectedTopics.includes(topic);
          return (
            <div
              className={`${isSelected ? 'bg-[#D8F34E] text-black' : 'bg-black text-[#8C8C8C]'} border border-[#8C8C8C] text-sm lg:text-xl py-2 px-6 cursor-pointer rounded-full flex items-center whitespace-nowrap`}
              key={index}
              onClick={() => handleTopicClick(topic)}
            >
              <p className='text-auto truncate'>{topic}</p>
              {isSelected && (
                <p className="ml-2">x</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Topics;