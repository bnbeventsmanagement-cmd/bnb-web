// Utility function to scroll to top of page
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

// Alternative function for instant scroll (no animation)
export const scrollToTopInstant = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto'
  });
};
