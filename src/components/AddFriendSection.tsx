'use client';
import React, { type JSX, useState } from 'react'
import SearchInput from './ui/SearchInput';
import { AtSign, UserPlus } from 'lucide-react';

type User = {
    name: string;
    userName: string;
    image?: string;

}

const AddFriendSection: React.FC = () => {

    const users: User[] = [
        {
          name: 'Alice Johnson',
          userName: 'alice_j',
          image: 'alice.jpg'
        },
        {
          name: 'Bob Smith',
          userName: 'bob_smith42',
          image: 'bob.png'
        },
        {
          name: 'Carlos Rivera',
          userName: 'c_rivera88',
          image: 'carlos.jpg'
        },
        {
          name: 'Diana Lee',
          userName: 'diana.lee',
          image: 'diana.png'
        },
        {
          name: 'Ethan Patel',
          userName: 'ethanpatel99',
          image: 'ethan.jpg'
        },
        {
            name: 'Alice Johnson',
            userName: 'alice_j',
            image: 'alice.jpg'
          },
          {
            name: 'Bob Smith',
            userName: 'bob_smith42',
            image: 'bob.png'
          },
          {
            name: 'Carlos Rivera',
            userName: 'c_rivera88',
            image: 'carlos.jpg'
          },
          {
            name: 'Diana Lee',
            userName: 'diana.lee',
            image: 'diana.png'
          },
          {
            name: 'Ethan Patel',
            userName: 'ethanpatel99',
            image: 'ethan.jpg'
          }
      ];      

    const renderUser = (user: User): JSX.Element => {
        const [onHover, setOnHover] = useState<boolean>(false);
        return (
            <div className={`flex items-center gap-4 w-full
                h-17 p-2 px-3 rounded-lg select-none`}>
                <div className={`bg-gray-300 relative aspect-square h-full rounded-full ${user.image ?? 'p-2'}`}>
                    <img src={user.image ?? 'placeholder.svg'} alt='profile' draggable="false" className='h-full aspect-square object-cover rounded-full' />
                </div>
                <div className='flex flex-col h-full w-full min-w-0'>
                    <div className='flex items-center h-full'>
                        <span className={`messagerName`}>{user.name}</span>
                    </div>
                    <div className='flex items-center gap-1 h-full'>
                        <div className='flex gap-1 items-center min-w-0'>
                            <span className={`message truncate !font-[var(--font-primary)] !text-[var(--primary-blue)]`}> @{user.userName}</span>
                        </div>
                    </div>
                </div>
                <div onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}
                    className='flex items-center justify-center h-9 aspect-square hover:bg-gray-100 cursor-pointer duration-300 rounded-full'>
                    <UserPlus size={20}
                        className={`text-[var(--text-secondary)] ${onHover ? 'scale-105' : 'scale-100'}`} />
                </div>
            </div>
        )
    }
    return (
        <>
            <SearchInput icon={AtSign} placeholder='Search users' />
            <div className='min-h-20 max-h-80 flex flex-col items-center justify-center gap-1 scrollableSecondary !overflow-y-auto'>
                {users && users.length > 0 ?
                    users.map((user, index) => (
                        <React.Fragment key={index}>
                            {renderUser(user)}
                        </React.Fragment>
                    ))
                    :
                    <div className='flex flex-col items-center gap-3'>
                        <p className='text-xs text-[var(--text-secondary)] min-w-60 max-w-90 text-center'>Search for users and add them as friends to be able to chat with them.</p>
                    </div>
                }
            </div>
        </>
    )
}

export default AddFriendSection