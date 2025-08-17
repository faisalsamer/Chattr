'use client';
import { type JSX, useState, useRef, useEffect } from 'react'
import { type LucideIcon, Menu, User, UserPlus, Users, Bell } from 'lucide-react';
import { useClickAway } from 'react-use';
import animationStyles from '../styles/animations.module.css';
import fontStyles from '../styles/fonts.module.css';
const Sidemenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLInputElement>(null);
  const [ripples, setRipples] = useState<{ x: number; y: number; size: number; id: number }[]>([])
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const menuItems: { icon: LucideIcon; label: string }[] = [
    {
      icon: User,
      label: 'Profile'
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

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>, isAll: boolean) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const size = isAll ?
      Math.max(rect.width, rect.height)
      :
      Math.max(rect.width, rect.height) / 2
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    const newRipple = { x, y, size, id: Date.now() }

    setRipples(prev => [...prev, newRipple])

    const timeoutId = setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 400);  // match duration

    timeouts.current.push(timeoutId);
  }

  useEffect(() => {
    return () => {
      timeouts.current.forEach(clearTimeout);
    }
  }, [])

  useClickAway(menuRef, () => {
    setIsMenuOpen(false);
  });

  const menuList = (): JSX.Element => {
    return (
      <nav className='w-60'>
        {menuItems.map((item, index) => (
          <ul key={index}
            className='hover:bg-[rgba(126,126,126,0.1)] active:scale-[98%] active:transition-all active:duration-100
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
      <button
        onClick={(e) => {
          !isMenuOpen && createRipple(e, false)
          setIsMenuOpen(prev => !prev)
        }}
        className={`
            ${isMenuOpen ? 'bg-[var(--bg-hover-gray)]' : 'cursor-pointer'} hover:bg-[var(--bg-hover-gray)] 
            flex items-center justify-center outline-none
            h-full aspect-square rounded-full relative overflow-hidden`}
      >
        <Menu />
        {ripples.map(r => (
          <span
            key={r.id}
            className={`absolute rounded-full bg-black/20 ${animationStyles['animate-ripple']}`}
            style={{
              left: r.x,
              top: r.y,
              width: r.size,
              height: r.size
            }}
          />
        ))}
      </button>

      <div ref={menuRef} className={`${isMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}
        
        absolute left-1/2 top-[100%] z-1000
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