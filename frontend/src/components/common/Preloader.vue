<template>
  <div class="preloader">
    <div class="preloader-content">
      <div class="preloader-logo">
        <img src="https://via.placeholder.com/200x80/ff5f13/ffffff?text=SKS+Constructions" alt="SKS Constructions" />
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
  
  img {
    max-width: 200px;
    height: auto;
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
