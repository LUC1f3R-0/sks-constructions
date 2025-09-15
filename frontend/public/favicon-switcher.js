// Animated Favicon Switcher
// This script creates animation by rapidly switching between different favicon states

(function() {
  // Create different states of the favicon for animation
  const faviconStates = [
    // State 1: Normal
    'data:image/svg+xml;base64,' + btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="#2563eb"/>
        <circle cx="16" cy="16" r="14" fill="white"/>
        <text x="16" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2563eb">SKS</text>
      </svg>
    `),
    // State 2: Slightly larger
    'data:image/svg+xml;base64,' + btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="#1e40af"/>
        <circle cx="16" cy="16" r="14" fill="white"/>
        <text x="16" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#1e40af">SKS</text>
      </svg>
    `),
    // State 3: Different color
    'data:image/svg+xml;base64,' + btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="#84cc16"/>
        <circle cx="16" cy="16" r="14" fill="white"/>
        <text x="16" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#84cc16">SKS</text>
      </svg>
    `),
    // State 4: Back to normal
    'data:image/svg+xml;base64,' + btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="#2563eb"/>
        <circle cx="16" cy="16" r="14" fill="white"/>
        <text x="16" y="22" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2563eb">SKS</text>
      </svg>
    `)
  ];
  
  let currentIndex = 0;
  let animationInterval;
  
  function updateFavicon() {
    const favicon = document.querySelector('link[rel="icon"]');
    const appleTouchIcon = document.querySelector('link[rel="apple-touch-icon"]');
    
    if (favicon && appleTouchIcon) {
      favicon.href = faviconStates[currentIndex];
      appleTouchIcon.href = faviconStates[currentIndex];
      currentIndex = (currentIndex + 1) % faviconStates.length;
    }
  }
  
  function startAnimation() {
    // Clear any existing animation
    if (animationInterval) {
      clearInterval(animationInterval);
    }
    
    // Start animation - change every 500ms for smooth effect
    animationInterval = setInterval(updateFavicon, 500);
  }
  
  function stopAnimation() {
    if (animationInterval) {
      clearInterval(animationInterval);
      animationInterval = null;
    }
  }
  
  // Start animation when page loads
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(startAnimation, 1000); // Start after 1 second
  });
  
  // Stop animation when tab is not visible (to save resources)
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      stopAnimation();
    } else {
      startAnimation();
    }
  });
  
  // Also start animation on page focus
  window.addEventListener('focus', startAnimation);
  window.addEventListener('blur', stopAnimation);
})();
