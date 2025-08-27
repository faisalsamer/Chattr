'use client';
import React, { useState, useRef, useEffect } from 'react'
import type { Ripples } from '@/types/types';

type UseRipples = {
    ripples: Ripples[];
    createRipple: (e: React.MouseEvent<HTMLButtonElement>, isAll: boolean) => void;
}

export const useRipples = (): UseRipples => {
    const [ripples, setRipples] = useState<{ x: number; y: number; size: number; id: number }[]>([])
    const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

    const createRipple = (e: React.MouseEvent<HTMLButtonElement>, isAll: boolean) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const size = isAll ?
            Math.max(rect.width, rect.height)
            :
            Math.max(rect.width, rect.height) / 13
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2
        const newRipple = { x, y, size, id: Date.now() }

        setRipples(prev => [...prev, newRipple])

        const timeoutId = setTimeout(() => {
            setRipples(prev => prev.filter(r => r.id !== newRipple.id));
        }, 470);  // match duration

        timeouts.current.push(timeoutId);
    }

    useEffect(() => {
        return () => {
            timeouts.current.forEach(clearTimeout);
        }
    }, []);

    return { ripples, createRipple };
};