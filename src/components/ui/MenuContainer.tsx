'use client';
import React, { forwardRef } from 'react';

type MenuContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  isMenuHidden: boolean;
  isMenuOpen: boolean;
  className?: string;
};

const MenuContainer = forwardRef<HTMLDivElement, MenuContainerProps>(
  ({ children, isMenuHidden, isMenuOpen, className = '', ...rest }, ref) => {
    return (
      <div
        ref={ref}
        {...rest}
        className={`${isMenuHidden && 'hidden'}
          ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-80 opacity-0 pointer-events-none duration-50'} ease-out
          absolute left-0 top-[120%] z-1000
          rounded-xl bg-white/65
          origin-top-left transition-all duration-200
          backdrop-blur-md shadow-lg border border-white/20
          py-2 animate-fade-in select-none
          ${className}`}
      >
        {children}
      </div>
    );
  }
);

MenuContainer.displayName = 'MenuContainer';
export default MenuContainer;
