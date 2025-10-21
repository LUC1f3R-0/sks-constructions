// Title Animation Script
// This creates a blinking/rotating effect in the browser title

(function() {
  const originalTitle = document.title;
  const titleVariations = [
    "🏗️ SKS DEVELOPERS (PVT) LTD - Construction Excellence",
    "🔨 SKS DEVELOPERS (PVT) LTD - Construction Excellence", 
    "🏢 SKS DEVELOPERS (PVT) LTD - Construction Excellence",
    "⚡ SKS DEVELOPERS (PVT) LTD - Construction Excellence"
  ];
  
  let currentIndex = 0;
  
  function animateTitle() {
    document.title = titleVariations[currentIndex];
    currentIndex = (currentIndex + 1) % titleVariations.length;
  }
  
  // Start animation every 2 seconds
  setInterval(animateTitle, 2000);
  
  // Restore original title when page is hidden
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      document.title = originalTitle;
    } else {
      animateTitle();
    }
  });
})();
