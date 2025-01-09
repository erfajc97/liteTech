import React from 'react';

const XIcon = ({ color = "white" }: { color?: string }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.9636 5H20.8771L14.512 12.201L22 22H16.1361L11.544 16.057L6.28953 22H3.37431L10.1824 14.2977L3 5H9.01099L13.1619 10.4322L17.9619 5H17.9636ZM16.9411 20.2738H18.5555L8.13466 6.63549H6.40226L16.9411 20.2738Z" fill={color} />
    </svg>
  );
};

export default XIcon;