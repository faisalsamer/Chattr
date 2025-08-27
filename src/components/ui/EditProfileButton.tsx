'use client';
import React from 'react'
import { Pencil } from 'lucide-react';
import Button from './Button';
import { handleEditProfileClick } from '@/util/NavigationFunctions';

const EditProfileButton: React.FC = () => {
    return (
        <Button onClick={handleEditProfileClick}>
            <Pencil size={22} color='var(--icon-primary)' />
        </Button>
    )
}

export default EditProfileButton;