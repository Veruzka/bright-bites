import React from "react";
import './bb_button.css';

export interface ButtonProps {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    label: string;
    //backgroundColor?: string;
    onClick?: () => void;
  }

export const Button = ({
    primary = false,
    size = 'medium',
    label,
    //backgroundColor,
    ...props
}: ButtonProps) => {
    const mode = primary ? 'primary' : 'secondary';
    return (
        <div>
          <button 
            className={`button ${mode} button--${size} button--${mode}`} 
            {...props}
          >
            {label}
          </button>

        </div>
      );

};