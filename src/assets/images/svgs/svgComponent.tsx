import { SVGProps } from "react";

const BrandIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="102.000000pt"
    height="163.000000pt"
    viewBox="0 0 102.000000 163.000000"
    preserveAspectRatio="xMidYMid meet"
    {...props} // Spread props to allow external styling and properties
  >
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        x1="510.174"
        y1="10.695"
        x2="510.174"
        y2="1617.203"
        id="gradient-0"
        gradientTransform="matrix(0.999942, 0.010781, -0.000428, 0.039733, -1.606508, 985.22228)"
      >
        <stop
          offset="0"
          style={{ stopColor: "rgb(90.98% 61.569% 23.529%)" }}
        />
        <stop
          offset="1"
          style={{ stopColor: "rgb(142, 166, 4)" }}
        />
      </linearGradient>
    </defs>
    <g
      transform="translate(0.000000,163.000000) scale(0.100000,-0.100000)"
      fill="#E89D3C"
      stroke="#000000"
      strokeWidth="10"
    >
      <path
        d="M670 1589 c-30 -16 -72 -47 -93 -67 -43 -42 -103 -155 -112 -210 -11 -64 -13 -66 -38 -48 -64 46 -124 69 -192 74 -96 6 -139 -6 -143 -40 -4 -38 39 -118 88 -162 61 -55 119 -78 217 -84 61 -3 83 -8 83 -18 0 -10 -14 -14 -44 -14 -107 0 -246 -71 -311 -160 -71 -96 -115 -237 -115 -365 0 -188 108 -388 245 -455 66 -32 182 -39 254 -15 41 13 57 14 93 5 76 -21 177 9 256 75 48 40 103 131 129 212 28 89 31 235 8 328 -25 98 -81 201 -144 264 -76 76 -119 96 -203 96 -95 0 -103 14 -32 61 112 74 184 213 184 353 -1 76 -36 195 -60 198 -8 2 -40 -11 -70 -28z m70 -90 c35 -146 -42 -333 -164 -396 -35 -18 -46 -7 -46 47 0 56 34 116 84 152 47 32 57 54 32 64 -18 7 -62 -16 -100 -51 -15 -14 -29 -25 -31 -23 -9 10 30 102 62 147 37 53 127 126 143 116 4 -3 14 -28 20 -56z m-424 -228 c53 -24 105 -71 130 -116 16 -31 17 -37 4 -45 -19 -13 -76 -12 -120 0 -84 23 -192 124 -176 165 8 22 110 20 162 -4z m221 -331 c27 -12 55 -37 79 -70 38 -53 66 -62 72 -23 2 12 -9 40 -24 63 -15 22 -25 42 -23 45 10 9 83 -15 119 -39 78 -51 158 -178 181 -286 6 -29 9 -104 7 -168 -3 -106 -6 -123 -35 -183 -17 -37 -47 -85 -68 -107 -47 -53 -130 -94 -180 -90 l-37 3 31 38 c40 51 47 75 26 96 -15 15 -18 14 -38 -11 -12 -15 -30 -38 -40 -52 -10 -15 -41 -39 -70 -56 -132 -75 -287 -34 -380 101 -124 180 -120 443 9 620 85 116 256 172 371 119z"
        style={{ fill: "url(#gradient-0)" }}
      />
    </g>
  </svg>
);

const RightArrow = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12l14 0" />
      <path d="M15 16l4 -4" />
      <path d="M15 8l4 4" />
    </svg>

);

interface TechIconProps {
    tech: string;
    className?: string;
  }
  
  type IconMapping = {
    [key: string]: React.FC<SVGProps<SVGSVGElement>>;
  };
  
  const Icons: React.FC<TechIconProps> = ({ tech, className = '' }) => {
    const iconProps: SVGProps<SVGSVGElement> = {
      width: 24,
      height: 24,
      className: `${className}`,
    };
  
    const iconMapping: IconMapping = {
      BrandIcon: BrandIcon,
      RightArrow: RightArrow,
      // Add more mappings as needed
    };
  
    const IconComponent = iconMapping[tech];
  
    if (!IconComponent) {
      // Handle the case where the tech does not have a corresponding icon
      return null; // Or return a default icon or placeholder
    }
  
    return <IconComponent {...iconProps} />;
  };
  
export default Icons;
