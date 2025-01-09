import React from 'react';

interface RightArrowIconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const RigthArrowIcon = ({ width = 24, height = 24, color = "#D8F34E" }: RightArrowIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12L3 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RigthArrowIcon;