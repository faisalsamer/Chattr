'use client';
import React from 'react'

type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    onClick?: (() => void) | ((e:React.MouseEvent<HTMLButtonElement>) => void);
}

const Button: React.FC<ButtonProps> = ({ children, className = '', onClick }) => {
    return (
        <button
            className={`hover:bg-[var(--bg-hover-gray)] 
        flex items-center justify-center outline-none duration-200
        h-10 aspect-square rounded-full relative overflow-hidden cursor-pointer
        ${className}`}
        onMouseDown={onClick}
        >
            {children}
        </button>
    )
}

export default Button;