import React from 'react';

interface LogoIconProps {
  color?: string;
  width?: number | string;
  height?: number | string;
}

const LogoIcon = ({ color = "#D8F34E", width = 29, height = 28 }: LogoIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="28.1074"
        y="12.0684"
        width="3.86207"
        height="28.1077"
        transform="rotate(90 28.1074 12.0684)"
        fill={color}
      />
      <rect
        x="15.9924"
        y="28"
        width="3.87692"
        height="28"
        transform="rotate(-180 15.9924 28)"
        fill={color}
      />
      <rect
        width="3.8695"
        height="28.0539"
        transform="matrix(-0.708462 0.705749 -0.708462 -0.705749 25.3633 22.5342)"
        fill={color}
      />
      <rect
        width="3.8695"
        height="28.0539"
        transform="matrix(-0.708462 -0.705749 0.708462 -0.705749 5.48633 25.2646)"
        fill={color}
      />
    </svg>
  );
};

export default LogoIcon;