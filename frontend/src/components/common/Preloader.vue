<template>
  <div class="preloader">
    <div class="preloader-content">
      <!-- Company Logo -->
      <div class="logo-section">
        <img src="/company_logo.svg" alt="SKS DEVELOPERS (PVT) LTD" class="logo" />
        <h1 class="company-name">SKS CONSTRUCTIONS</h1>
      </div>
      
      <!-- Simple Loading Spinner -->
      <div class="spinner">
        <div class="spinner-ring"></div>
      </div>
      
      <!-- Loading Text -->
      <p class="loading-text">Loading...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Simple preloader - no complex logic needed
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.3s ease-out;
}

.preloader-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
  .logo {
    max-width: 120px;
    height: auto;
  }
  
  .company-name {
    font-family: var(--font-secondary);
    font-size: 28px;
    font-weight: 700;
    color: var(--primary-color);
    margin: 0;
    letter-spacing: 2px;
  }
}

.spinner {
  width: 60px;
  height: 60px;
  position: relative;
}

.spinner-ring {
  width: 100%;
  height: 100%;
  border: 4px solid var(--light-gray-1);
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-gray);
  margin: 0;
}

// Responsive Design
@media (max-width: 768px) {
  .preloader-content {
    gap: 25px;
  }
  
  .logo-section {
    gap: 15px;
    
    .logo {
      max-width: 100px;
    }
    
    .company-name {
      font-size: 24px;
      letter-spacing: 1px;
    }
  }
  
  .spinner {
    width: 50px;
    height: 50px;
  }
  
  .spinner-ring {
    border-width: 3px;
  }
  
  .loading-text {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .preloader-content {
    gap: 20px;
  }
  
  .logo-section {
    gap: 12px;
    
    .logo {
      max-width: 80px;
    }
    
    .company-name {
      font-size: 20px;
    }
  }
  
  .spinner {
    width: 40px;
    height: 40px;
  }
  
  .spinner-ring {
    border-width: 2px;
  }
  
  .loading-text {
    font-size: 13px;
  }
}
</style>
