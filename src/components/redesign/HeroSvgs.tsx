import React from "react";

export const Blob: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width="543"
    // height="460"
    viewBox={"0 0 543 460"}
    fill="none"
    aria-hidden={true}
    className={"absolute mix-blend-multiply h-auto max-w-[238px] s:max-w-[543px] aspect-[543/460]"}
  >
    <g filter="url(#a)">
      <path
        fill="#fff"
        d="M534 335c-6 10-12 18-19 24a140 140 0 0 1-89 37l-30 2h-5a249 249 0 0 0-80 19l-45 21a513 513 0 0 1-31 12 177 177 0 0 1-58 9c-30-1-58-14-91-44v-1l-14-14C1 314-46 208 72 138 153 91 198-3 311 0c213 7 253 281 223 335Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width="542.5"
        height="461.3"
        x="0"
        y="0"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.298039 0 0 0 0 0.333333 0 0 0 0 0.356863 0 0 0 0.2 0" />
        <feBlend in2="shape" result="effect1_innerShadow_1379_3494" />
      </filter>
    </defs>
  </svg>
);

export const Clippy: React.FC = () => {
  return (
    <svg className={"absolute w-0 h-0"}>
      <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
        <path d="M0.984,0.73 c-0.011,0.022,-0.022,0.039,-0.035,0.052 a0.258,0.305,0,0,1,-0.164,0.081 l-0.055,0.004 h-0.009 a0.459,0.542,0,0,0,-0.147,0.041 l-0.083,0.046 a0.945,1,0,0,1,-0.057,0.026 a0.326,0.386,0,0,1,-0.107,0.02 c-0.055,-0.002,-0.107,-0.03,-0.168,-0.096 v-0.002 l-0.026,-0.03 C0.002,0.684,-0.085,0.453,0.133,0.301 C0.282,0.198,0.365,-0.007,0.573,0 c0.392,0.015,0.466,0.612,0.411,0.73"></path>
      </clipPath>
    </svg>
  );
};
