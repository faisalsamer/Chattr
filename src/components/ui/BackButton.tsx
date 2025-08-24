'use client';
import React from 'react'
import { handleProfileClick } from '@/util/MenuFunctions';
import { ArrowLeft } from 'lucide-react';
import Button from './Button';

const BackButton: React.FC = () => {
    return (
        <Button onClick={handleProfileClick}>
            <ArrowLeft color='var(--icon-primary)' />
        </Button>
    )
}

export default BackButton;