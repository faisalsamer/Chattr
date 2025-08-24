'use client';
import React from 'react'
import { useRipples } from '@/hooks/useRipples';
import RippleAnimation from './RippleAnimation';
import { toast } from "sonner"

type Props = {
    title: string;
    detail: string;
}


const ActiveRippleLayer: React.FC<Props> = ({ title, detail }) => {
    const { ripples, createRipple } = useRipples();
    const toastStyle = {
        className: "!bg-card !w-fit !text-card-foreground border-border",
        duration: 2000
    }

    const copyToClipboard = (title: string, detail: string) => {
        navigator.clipboard.writeText(detail)
            .then(() => {
                toast.success(`${title} was copied`, {
                    className: toastStyle.className,
                    duration: toastStyle.duration
                });
            })
            .catch(() => {
                toast.error(`Failed to copy ${title}`, {
                    className: toastStyle.className,
                    duration: toastStyle.duration
                })
            })
    }


    return (
        <button onClick={(e) => {
            createRipple(e, false);
            copyToClipboard(title, detail);
        }}
            className='absolute inset-0 cursor-pointer'>
            <RippleAnimation ripples={ripples} />
        </button>
    )
}

export default ActiveRippleLayer;