'use client';
import { useState } from 'react'
import { Search } from 'lucide-react';

const SearchInput: React.FC = () => {
    const [searchInput, setSearchInput] = useState<string>('');

    return (
        <div className='relative select-none'>
            <Search className='absolute top-1/2 -translate-y-1/2 left-1 text-[var(--text-secondary)] h-4' />
            <input
                type='text'
                value={searchInput}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
                placeholder='Search chats..'
                className='bg-white hover:bg-[#fbfbfb] w-full p-1 pl-7 border-1 border-[var(--border-gray)] focus:duration-300 focus:ring ring-[var(--primary-blue)] outline-none rounded-[5px]'
            />
        </div>
    )
}

export default SearchInput