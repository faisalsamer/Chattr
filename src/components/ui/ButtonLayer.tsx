'use client';
import React from 'react'

type ButtonLayerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode;
    className?: string;
}

const ButtonLayer: React.FC<ButtonLayerProps> = (props) => {
    const { children, className = '', ...rest } = props;
    return (
        <button {...rest}
            className={`absolute inset-0
        flex items-center justify-center cursor-pointer ${className}`}>
            {children}
        </button>
    )
}

export default ButtonLayer;