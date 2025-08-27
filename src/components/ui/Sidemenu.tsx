'use client';
import { type JSX, useState, useRef, useEffect } from 'react'
import { type LucideIcon, Menu, User, UserPlus, Users, Bell } from 'lucide-react';
import { useClickAway } from 'react-use';
import fontStyles from '../styles/fonts.module.css';
import { handleProfileClick } from '@/util/NavigationFunctions';
import { useRipples } from '@/hooks/useRipples';
import RippleAnimation from './RippleAnimation';
import Button from './Button';

const Sidemenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // To 
  const [isMenuHidden, setIsMenuHidden] = useState<boolean>(false); // To use hidden when navigation
  const menuRef = useRef<HTMLInputElement>(null);
  const { ripples, createRipple } = useRipples();

  const menuItems: { icon: LucideIcon; label: string, onClick?: () => void }[] = [
    {
      icon: User,
      label: 'Profile',
      onClick: handleProfileClick,
    },
    {
      icon: UserPlus,
      label: 'Add Friends'
    },
    {
      icon: Users,
      label: 'Friend Requests'
    },
    {
      icon: Bell,
      label: 'Notifications'
    }
  ];

  useEffect(() => {
    setIsMenuHidden(false);
  }, [isMenuHidden]);

  useClickAway(menuRef, () => {
    setIsMenuOpen(false);
  });

  const menuList = (): JSX.Element => {
    return (
      <nav className='w-60'>
        {menuItems.map((item, index) => (
          <ul key={index}
            onClick={() => {
              item.onClick?.();
              setIsMenuHidden(true);
              setIsMenuOpen(false);
            }}
            className='hover:bg-[var(--bg-hover-gray)] active:scale-[98%] active:transition-all active:duration-100
                      flex items-center gap-3 
                       p-2 m-1 cursor-pointer rounded-lg'>
            <item.icon height={18} />
            <span className={fontStyles.menuText}>{item.label}</span>
          </ul>
        ))}

      </nav>
    )
  };

  return (
    <div ref={menuRef} className='relative h-full'>
      <Button
        onClick={(e) => {
          !isMenuOpen && createRipple(e, false)
          setIsMenuOpen(prev => !prev)
        }}
        className={`
            ${isMenuOpen ? '!bg-[var(--bg-hover-gray)] !cursor-default' : '!cursor-pointer'}`}
        isUseRipple={false}
      >
        <Menu />
        <RippleAnimation ripples={ripples} />
      </Button>

      <div ref={menuRef} className={`${isMenuHidden && 'hidden'}
      ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-80 opacity-0 pointer-events-none duration-50'} ease-out
        absolute left-0 top-[120%] z-1000
        rounded-xl bg-white/65
        origin-top-left transition-all duration-200
        backdrop-blur-md shadow-lg border border-white/20
        py-2 animate-fade-in select-none`}>
        {menuList()}
      </div>
    </div>
  )
}

export default Sidemenu;