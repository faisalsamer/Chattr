'use client';
import React from 'react'
import type { Ripples } from '@/types/types';

type RippleAnimationProps = {
    ripples: Ripples[];
}

const RippleAnimation: React.FC<RippleAnimationProps> = ({ ripples }) => {
    return (
        <>
            {ripples.map(r => (
                <span
                    key={r.id}
                    className={`animate-ripple absolute rounded-full bg-black/10`}
                    style={{
                        left: r.x,
                        top: r.y,
                        width: r.size,
                        height: r.size
                    }}
                />
            ))}
        </>
    )
}

export default RippleAnimation;