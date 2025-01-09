import React from 'react';

const TopArrowIcon = ({ width = 24, height = 25 }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.5V3.5M12 3.5L20.5 12M12 3.5L3.5 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  );
};

export default TopArrowIcon;