'use client';
import React from 'react'
import { ScrollArea } from './shadcn/scroll-area'

type ScrollBarProps = {
  children?: React.ReactNode;
}

const ScrollBar: React.FC<ScrollBarProps> = ({ children }) => {
  return (
    <div className='flex-1 min-h-0'>
      <ScrollArea className='h-full w-full'>
        {children}
      </ScrollArea>
    </div>
  )
}

export default ScrollBar;