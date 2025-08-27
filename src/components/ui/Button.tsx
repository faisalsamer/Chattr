'use client';
import React from 'react'
import { useRipples } from '@/hooks/useRipples';
import RippleAnimation from './RippleAnimation';

type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    onClick?: (() => void) | ((e: React.MouseEvent<HTMLButtonElement>) => void);
    isUseRipple?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', onClick, isUseRipple = true }) => {
    const { ripples, createRipple } = useRipples();
    return (
        <button
            className={`hover:bg-[var(--bg-hover-gray)] 
        flex items-center justify-center outline-none duration-200
        h-10 aspect-square rounded-full relative overflow-hidden cursor-pointer
        ${className}`}
            onMouseDown={(e) => {
                onClick?.(e);
                isUseRipple && createRipple(e, false);
            }
            }
        >
            {children}
            {isUseRipple && <RippleAnimation ripples={ripples} />}
        </button>
    )
}

export default Button;