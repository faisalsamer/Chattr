'use client';
import React, { useState, useEffect } from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
    maxLength?: number;
    max?: number;
    defaultValue?: string;
    required?: boolean;
    onChangeValue?: () => void;
    buttonVisible?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
    const {
        className = '',
        placeholder,
        maxLength,
        max,
        defaultValue = '',
        required,
        onChangeValue,
        buttonVisible = false,
        ...rest
    } = props;

    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [isHover, setIsHover] = useState<boolean>(false);
    const [input, setInput] = useState<string>(defaultValue);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        if (onChangeValue && !buttonVisible) {
            onChangeValue();
        }
        setInput(e.target.value);
    }

    return (
        <div className='relative'>
            <span className={`absolute -translate-y-1/2 left-4 bg-white px-1 duration-200
            ${isFocus || input ? 'text-xs top-0 z-10' : 'text-sm top-1/2 z-0'}
            ${isFocus || isHover ? 'text-[var(--primary-blue)]' : 'text-gray-400'}`}>
                {placeholder}
            </span>
            <span className='absolute bottom-0 translate-y-1/2 right-2 text-xs text-gray-400 bg-white px-1 z-10'>
                {maxLength ? maxLength - input.length : ''}
            </span>
            <input {...{ max, maxLength, required }} {...rest}
                value={input} onChange={handleInput} autoComplete="off"
                onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}
                className={`relative ring-1 ring-gray-300 
            w-full h-10 px-5 text-sm caret-[var(--primary-blue)]
            focus:ring-2 focus:ring-[var(--primary-blue)] focus:duration-0
            hover:duration-300 hover:ring-[var(--primary-blue)]
            outline-none rounded-md ${className}`} />
        </div>
    )
}

export default Input;