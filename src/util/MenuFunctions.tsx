import { profile } from "console";

export const handleProfileClick = (): void => {
  let visible = false;
  // Chats Section Animation
  const chatsSection = document.getElementById('chatsSection');
  if (chatsSection) {
    visible = !chatsSection.classList.contains('out');
    chatsSection.style.transitionDelay = visible ? '0s' : '0s';
    // Toggle the 'animate' class on the SSR element
    chatsSection.classList.toggle('out');
  }

  // Profile Section Animation
  const profileSection = document.getElementById('profileSection');
  if (profileSection) {
    visible = profileSection.classList.contains('in');
    profileSection.style.transitionDelay = visible ? '0s' : '0.1s';
    if (visible) {
      setTimeout(() => {
        profileSection.style.zIndex = '-1000';
      }, 300);
    } else {
      profileSection.style.zIndex = '1000';
    }

    // Toggle the 'animate' class on the SSR element
    profileSection.classList.toggle('in');
  }
};