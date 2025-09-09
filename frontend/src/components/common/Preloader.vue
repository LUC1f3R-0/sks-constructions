<template>
  <div class="preloader">
    <div class="preloader-content">
      <div class="preloader-logo">
        <img src="/company_logo.svg" alt="SKS Constructions" class="preloader-logo-image" />
        <div class="preloader-logo-text">
          <span class="logo-title">SKS</span>
          <span class="logo-subtitle">CONSTRUCTIONS</span>
        </div>
      </div>
      <div class="preloader-spinner">
        <div class="spinner-circle"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No additional logic needed for preloader
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--light-gray-2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.45s ease-out;
}

.preloader-content {
  text-align: center;
}

.preloader-logo {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  
  .preloader-logo-image {
    max-width: 120px;
    height: auto;
  }
  
  .preloader-logo-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    
    .logo-title {
      font-family: var(--font-secondary, 'Arial', sans-serif);
      font-size: 32px;
      font-weight: 700;
      color: var(--primary-color, #ff5f13);
      line-height: 1;
      text-align: center;
    }
    
    .logo-subtitle {
      font-size: 12px;
      font-weight: 600;
      color: var(--text-gray, #666);
      letter-spacing: 2px;
      text-transform: uppercase;
      text-align: center;
    }
  }
}

.preloader-spinner {
  position: relative;
  width: 60px;
  height: 60px;
  margin: 0 auto;
}

.spinner-circle {
  width: 100%;
  height: 100%;
  border: 3px solid var(--light-gray-1);
  border-top: 3px solid var(--primary-color);
  border-radius: 50%;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
