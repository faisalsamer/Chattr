import React from 'react'
import BackButton from './ui/BackButton';
import LogoutButton from './ui/LogoutButton';
import Image from 'next/image';
import { UserRound, AtSign, Mail } from 'lucide-react';
import fontStyle from './styles/fonts.module.css'
import ActiveRippleLayer from './ui/ActiveRippleLayer';
import EditProfileButton from './ui/EditProfileButton';


const ProfileSection: React.FC = () => {
    const profileDetailsItems = [
        {
            icon: UserRound,
            detail: 'Faisal Samer Mohammed Hael Al-Madhehagi',
            title: 'Name'
        },
        {
            icon: AtSign,
            detail: '@fsm_3455',
            title: 'Username'
        },
        {
            icon: Mail,
            detail: 'faisalalmdhgi@gmail.com',
            title: 'Email'
        }
    ]

    return (
        <div id='profileSection' className='section flex flex-col !h-screen'>
            <div className='flex justify-between items-center p-3'>
                <div className='flex items-center gap-4'>
                    <BackButton />
                    <h1>Profile</h1>
                </div>
                <div className='flex items-center lg:gap-1'>
                    <EditProfileButton />
                    <LogoutButton />
                </div>
            </div>
            <div className='flex-1 overflow-y-scroll scrollable'>
                <div className='relative aspect-[1/1] w-full'>
                    <Image src={'/FaisalPhoto.jpg'} fill className='object-contain' alt='Profile Photo' />
                </div>
                <div className='flex flex-col gap-1 p-3 px-2'>
                    {
                        profileDetailsItems.map((item, index) => (
                            <div key={index}
                                className='relative flex items-center gap-3 hover:bg-[var(--bg-hover-gray)] p-2 px-3 rounded-md overflow-hidden cursor-pointer'>
                                <div className="flex items-center h-8 aspect-square">
                                    <item.icon strokeWidth={2} size={25} color='var(--icon-primary)' />
                                </div>
                                <div className='flex flex-col overflow-hidden'>
                                    <span className={`${fontStyle.messagerName} !text-sm truncate`}>{item.detail}</span>
                                    <span className={`${fontStyle.message}`}>{item.title}</span>
                                </div>
                                <ActiveRippleLayer title={item.title} detail={item.detail} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileSection;
