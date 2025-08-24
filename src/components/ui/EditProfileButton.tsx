'use client';
import React from 'react'
import { Pencil } from 'lucide-react';
import Button from './Button';

const EditProfileButton: React.FC = () => {
    return (
        <Button>
            <Pencil size={22} color='var(--icon-primary)' />
        </Button>
    )
}

export default EditProfileButton;