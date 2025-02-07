import type { FunctionComponent } from "@/common/types";

// interface ButtonProps {
//   children: React.ReactNode;
//   variant?: 'primary' | 'secondary';
//   onClick?: () => void;
//   type?: 'button' | 'submit';
//   className?: string;
// }

// export const Button = ({ 
//   children, 
//   variant = 'primary', 
//   onClick, 
//   type = 'button',
//   className = ''
// }: ButtonProps): FunctionComponent => {
//   const baseStyles = "px-6 py-2 rounded-lg font-medium transition-colors";
//   const variantStyles = {
//     primary: "bg-green-600 text-white hover:bg-green-700",
//     secondary: "bg-white text-green-600 border-2 border-green-600 hover:bg-green-50"
//   };

//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className={`${baseStyles} ${variantStyles[variant]} ${className}`}
//     >
//       {children}
//     </button>
//   );
// }; 

import  { ButtonHTMLAttributes } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'forest' | 'sage' | 'earth';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export const Button = ({ 
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  ...props
}: ButtonProps): FunctionComponent => {
  const buttonClass = `button-pushable ${variant} ${size} ${className}`;

  return (
    <button className={buttonClass} role="button" onClick={onClick} {...props}>
      <span className="button-shadow"></span>
      <span className="button-edge"></span>
      <span className="button-front">
        {children}
      </span>
    </button>
  );
};

export default Button;