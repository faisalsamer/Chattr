'use client';
import React, { type JSX, useState } from 'react'
import { Check, X, UserPlus } from 'lucide-react';

type User = {
    name: string;
    userName: string;
    image?: string;
    requestTime: string;
}

const FriendRequests: React.FC = () => {
    const users: User[] = [
        {
          name: 'Alice Johnson',
          userName: 'alice_j',
          image: 'alice.jpg',
          requestTime: '2 hours ago'
        },
        {
          name: 'Bob Smith',
          userName: 'bob_smith42',
          image: 'bob.png',
          requestTime: '2 hours ago'
        },
        {
          name: 'Carlos Rivera',
          userName: 'c_rivera88',
          image: 'carlos.jpg',
          requestTime: '2 hours ago'
        },
        {
          name: 'Diana Lee',
          userName: 'diana.lee',
          image: 'diana.png',
          requestTime: '2 hours ago'
        },
        {
          name: 'Ethan Patel',
          userName: 'ethanpatel99',
          image: 'ethan.jpg',
          requestTime: '2 hours ago'
        },
        {
            name: 'Alice Johnson',
            userName: 'alice_j',
            image: 'alice.jpg',
            requestTime: '2 hours ago'
          },
          {
            name: 'Bob Smith',
            userName: 'bob_smith42',
            image: 'bob.png',
            requestTime: '2 hours ago'
          },
          {
            name: 'Carlos Rivera',
            userName: 'c_rivera88',
            image: 'carlos.jpg',
            requestTime: '2 hours ago'
          },
          {
            name: 'Diana Lee',
            userName: 'diana.lee',
            image: 'diana.png',
            requestTime: '2 hours ago'
          },
          {
            name: 'Ethan Patel',
            userName: 'ethanpatel99',
            image: 'ethan.jpg',
            requestTime: '2 hours ago'
          }
      ];      

    const renderUser = (user: User): JSX.Element => {
        const [checkOnHover, setCheckOnHover] = useState<boolean>(false);
        const [xOnHover, setXOnHover] = useState<boolean>(false);
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
                            <span className={`message truncate !font-[var(--font-primary)] !text-xs !text-[var(--primary-blue)]`}> @{user.userName},</span>
                            <span className='message truncate !text-xs !font-[var(--font-primary)]'>{user.requestTime}</span>
                        </div>
                    </div>
                </div>
                <div className='flex gap-1'>
                    <div onMouseEnter={() => setCheckOnHover(true)} onMouseLeave={() => setCheckOnHover(false)}
                        className='flex items-center justify-center h-7 aspect-square bg-blue-50 cursor-pointer duration-300 rounded-full'>
                        <Check size={18} strokeWidth={2.3}
                            className={`text-blue-500 ${checkOnHover ? 'scale-105' : 'scale-100'}`} />
                    </div>
                    <div onMouseEnter={() => setXOnHover(true)} onMouseLeave={() => setXOnHover(false)}
                        className='flex items-center justify-center h-7 aspect-square bg-red-50 cursor-pointer duration-300 rounded-full'>
                        <X size={18} strokeWidth={2.3}
                            className={`text-red-500 ${xOnHover ? 'scale-105' : 'scale-100'}`} />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className='min-h-20 max-h-80 flex flex-col gap-1 scrollableSecondary !overflow-y-auto'>
                {users && users.length > 0 ?
                    users.map((user, index) => (
                        <React.Fragment key={index}>
                            {renderUser(user)}
                        </React.Fragment>
                    ))
                    :
                    <div className='flex flex-col justify-center items-center gap-3 h-full'>
                        <p className='text-xs text-[var(--text-secondary)] min-w-60 max-w-90 text-center'>You currently have no friend requests.</p>
                    </div>
                }
            </div>
        </>
    )
}

export default FriendRequests;