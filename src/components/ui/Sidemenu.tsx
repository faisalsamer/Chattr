'use client';
import { type JSX, useState, useRef, useEffect } from 'react'
import { type LucideIcon, Menu, User, UserPlus, Users, Bell } from 'lucide-react';
import { useClickAway } from 'react-use';
import fontStyles from '../styles/fonts.module.css';
import { handleProfileClick } from '@/util/NavigationFunctions';
import { useRipples } from '@/hooks/useRipples';
import RippleAnimation from './RippleAnimation';
import Button from './Button';
import MenuContainer from './MenuContainer';
import PortableDialog from './PortableDialog';
import AddFriendSection from '../AddFriendSection';
import FriendRequests from '../FriendRequests';

const Sidemenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // To 
  const [isMenuHidden, setIsMenuHidden] = useState<boolean>(false); // To use hidden when navigation
  const menuRef = useRef<HTMLInputElement>(null);
  const { ripples, createRipple } = useRipples();
  const [isAddFriendDialogOpen, setIsAddFriendDialogOpen] = useState<boolean>(false);
  const [isFriendRequestsDialogOpen, setIsFriendRequestsDialogOpen] = useState<boolean>(false);

  const menuItems: { icon: LucideIcon; label: string, onClick?: () => void }[] = [
    {
      icon: User,
      label: 'Profile',
      onClick: handleProfileClick,
    },
    {
      icon: UserPlus,
      label: 'Add Friends',
      onClick: () => setIsAddFriendDialogOpen(true)
    },
    {
      icon: Users,
      label: 'Friend Requests',
      onClick: () => setIsFriendRequestsDialogOpen(true)
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

      <MenuContainer ref={menuRef} isMenuHidden={isMenuHidden} isMenuOpen={isMenuOpen}>
        {menuList()}
      </MenuContainer>

      <PortableDialog title='Add a friend' isOpen={isAddFriendDialogOpen} setIsOpen={setIsAddFriendDialogOpen} >
        <AddFriendSection />
      </PortableDialog>

      <PortableDialog title='Friend requests' isOpen={isFriendRequestsDialogOpen} setIsOpen={setIsFriendRequestsDialogOpen} >
        <FriendRequests />
      </PortableDialog>
    </div>
  )
}

export default Sidemenu;