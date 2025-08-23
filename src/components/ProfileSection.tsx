import React from 'react'
import BackButton from './ui/BackButton';
import LogoutButton from './ui/LogoutButton';

const ProfileSection: React.FC = () => {
    return (
        <div id='profileSection' className='profileSection p-3 px-3'>
            <div className='flex justify-between items-center'>
                <BackButton />
                <div className='flex items-center '>
                    <LogoutButton />
                </div>
            </div>
        </div>
    )
}

export default ProfileSection;
