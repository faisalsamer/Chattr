'use client';
import React from 'react'

type ButtonLayerProps = {
    children?: React.ReactNode;
    className?: string;
}

const ButtonLayer: React.FC<ButtonLayerProps> = ({ children, className = '' }) => {
    return (
        <button className={`absolute inset-0
        flex items-center justify-center cursor-pointer ${className}`}>
            {children}
        </button>
    )
}

export default ButtonLayer;