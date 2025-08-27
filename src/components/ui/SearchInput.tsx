'use client';
import { useState } from 'react'
import type { LucideIcon } from 'lucide-react';
import { LoaderCircle } from 'lucide-react';

type SearchInputProps = {
    icon: LucideIcon;
    placeholder: string;
    className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ icon: Icon, placeholder, className = '' }) => {
    const [searchInput, setSearchInput] = useState<string>('');
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const iconstyle = `absolute top-1/2 -translate-y-1/2 left-1 h-4 duration-200
    ${isFocus ? 'text-[var(--primary-blue)]' : 'text-[var(--text-muted)]'}`;

    return (
        <div className='relative select-none'>
            {/* <LoaderCircle className={`${iconstyle} !text-[var(--primary-blue)] animate-spin`} /> */}
            <Icon className={iconstyle} />
            <input
                type='text'
                id='asfsafdsafsa'
                name='asfsafdsafsa'
                value={searchInput}
                autoComplete="off"
                spellCheck="false"
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
                placeholder={placeholder}
                className={`bg-white hover:bg-[#fbfbfb] w-full h-8 pl-7 border-1 border-[var(--border-gray)] 
                duration-200 focus:ring ring-[var(--primary-blue)] outline-none rounded-[5px]
                caret-[var(--primary-blue)] text-sm ${className}`}
            />
        </div>
    )
}

export default SearchInput