export const handleProfileClick = (): void => {
  // Chats Section Animation
  const chatsSection = document.getElementById('chatsSection');
  if (chatsSection) {
    // Toggle the 'animate' class on the SSR element
    chatsSection.classList.toggle('slide-out');
  }

  // Profile Section Animation
  const profileSection = document.getElementById('profileSection');
  if (profileSection) {
    const slideIn = profileSection.classList.contains('slide-in');
    profileSection.style.transitionDelay = slideIn ? '0s' : '0.1s';
    if (slideIn) {
      setTimeout(() => {
        profileSection.style.zIndex = '-1000';
      }, 300);
    } else {
      profileSection.style.zIndex = '1000';
    }

    // Toggle the 'animate' class on the SSR element
    profileSection.classList.toggle('slide-in');
  }
};


export const handleEditProfileClick = (): void => {
  // Chats Section Animation
  const profileSection = document.getElementById('profileSection');
  if (profileSection) {
    // Toggle the 'animate' class on the SSR element
    profileSection.classList.toggle('slide-out');
  }

  // Profile Section Animation
  const editProfileSection = document.getElementById('editProfileSection');
  if (editProfileSection) {
    const slideIn = editProfileSection.classList.contains('slide-in');
    editProfileSection.style.transitionDelay = slideIn ? '0s' : '0.1s';
    if (slideIn) {
      setTimeout(() => {
        editProfileSection.style.zIndex = '-1000';
      }, 300);
    } else {
      editProfileSection.style.zIndex = '1001';
    }

    // Toggle the 'animate' class on the SSR element
    editProfileSection.classList.toggle('slide-in');
  }
};