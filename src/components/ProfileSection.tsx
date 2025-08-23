'use client';
import React from 'react'
import { handleProfileClick } from '@/util/MenuFunctions';

const ProfileSection: React.FC = () => {
    return (
        <div id='profileSection' className='profileSection'>
            <button onClick={handleProfileClick} className='border p-2 cursor-pointer'>Back</button>
            Profile
        </div>
    )
}

export default ProfileSection;
