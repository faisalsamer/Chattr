export const handleProfileClick = (): void => {
  // Chats Section Animation
  const chatsSection = document.getElementById('chatsSection');
  if (chatsSection) {
    const Out = !chatsSection.classList.contains('out');
    chatsSection.style.transitionDelay = Out ? '0s' : '0s';
    // Toggle the 'animate' class on the SSR element
    chatsSection.classList.toggle('out');
  }

  // Profile Section Animation
  const profileSection = document.getElementById('profileSection');
  if (profileSection) {
    const In = profileSection.classList.contains('in');
    profileSection.style.transitionDelay = In ? '0s' : '0.1s';
    if (In) {
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