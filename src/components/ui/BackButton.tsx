'use client';
import React from 'react'
import { handleProfileClick, handleEditProfileClick } from '@/util/NavigationFunctions';
import { ArrowLeft } from 'lucide-react';
import Button from './Button';

type BackButtonProps = {
    backTo?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ backTo = 'chatsSection' }) => {
    return (
        <Button onClick={
            backTo === 'chatsSection' ? handleProfileClick
                : backTo === 'profileSection' ? handleEditProfileClick
                    : () => { throw new Error(`Page is not found.`) }
        }>
            <ArrowLeft color='var(--icon-primary)' />
        </Button >
    )
}

export default BackButton;