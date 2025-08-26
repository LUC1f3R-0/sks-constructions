<template>
  <div id="app">
    <!-- Preloader -->
    <Preloader v-if="isLoading" />
    
    <!-- Main App Content -->
    <div v-show="!isLoading">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Preloader from '@/components/common/Preloader.vue'

const isLoading = ref(true)

onMounted(() => {
  // Simulate preloader for 2 seconds
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;400;500;600;700;800;900&family=Teko:wght@300;400;500;600;700&display=swap');
@import 'bootstrap/dist/css/bootstrap.min.css';
@import '@fortawesome/fontawesome-free/css/all.min.css';
@import 'aos/dist/aos.css';

// Global CSS Variables
:root {
  // Colors
  --primary-color: #ff5f13;
  --secondary-color: #f27420;
  --dark-blue-1: #021a47;
  --dark-blue-2: #00235b;
  --dark-blue-3: #0e132a;
  --white: #ffffff;
  --light-gray-1: #f5f5f5;
  --light-gray-2: #f7f7fd;
  --text-black: #16161a;
  --text-gray: #677294;
  
  // Typography
  --font-primary: 'Barlow', sans-serif;
  --font-secondary: 'Teko', sans-serif;
  --body-font-size: 16px;
  --body-line-height: 24px;
  
  // Spacing
  --section-padding-top: 183px;
  --section-padding-bottom: 170px;
  
  // Transitions
  --transition-default: 0.3s ease-out;
  --transition-slow: 0.5s ease-out;
}

// Global Reset and Base Styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-primary);
  font-size: var(--body-font-size);
  line-height: var(--body-line-height);
  color: var(--text-black);
  background-color: var(--white);
  overflow-x: hidden;
}

// Typography
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-primary);
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-title {
  font-family: var(--font-secondary);
  font-size: 70px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 50px;
  }
  
  @media (max-width: 576px) {
    font-size: 40px;
  }
}

.section-title-back {
  font-family: var(--font-secondary);
  font-size: 140px;
  font-weight: 700;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-gray);
  position: absolute;
  top: -20px;
  left: 0;
  z-index: -1;
  opacity: 0.1;
  
  @media (max-width: 768px) {
    font-size: 80px;
  }
  
  @media (max-width: 576px) {
    font-size: 60px;
  }
}

// Buttons
.btn {
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 15px 30px;
  border-radius: 0;
  transition: var(--transition-default);
  border: none;
  cursor: pointer;
  
  &.btn-primary {
    background-color: var(--primary-color);
    color: var(--white);
    
    &:hover {
      background-color: var(--secondary-color);
      transform: scale(1.05);
    }
  }
  
  &.btn-secondary {
    background-color: var(--white);
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    
    &:hover {
      background-color: var(--primary-color);
      color: var(--white);
      transform: scale(1.05);
    }
  }
  
  &.btn-outline {
    background-color: transparent;
    color: var(--white);
    border: 2px solid var(--white);
    
    &:hover {
      background-color: var(--white);
      color: var(--primary-color);
      transform: scale(1.05);
    }
  }
}

// Container
.container-fluid {
  padding-left: 15px;
  padding-right: 15px;
}

// Section Spacing
.section-padding {
  padding-top: var(--section-padding-top);
  padding-bottom: var(--section-padding-bottom);
  
  @media (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  
  @media (max-width: 576px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}

// Animations
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

// Utility Classes
.text-primary {
  color: var(--primary-color) !important;
}

.text-secondary {
  color: var(--secondary-color) !important;
}

.bg-primary {
  background-color: var(--primary-color) !important;
}

.bg-secondary {
  background-color: var(--secondary-color) !important;
}

.bg-dark-blue {
  background-color: var(--dark-blue-2) !important;
}

.animate-float {
  animation: float 2s ease-in-out infinite;
}

.animate-heartbeat {
  animation: heartbeat 1s ease-in-out infinite;
}

.animate-rotate {
  animation: rotate 30s linear infinite;
}

// Hover Effects
.hover-scale {
  transition: var(--transition-slow);
  
  &:hover {
    transform: scale(1.1);
  }
}

.hover-lift {
  transition: var(--transition-default);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
}

// Responsive Utilities
@media (max-width: 1200px) {
  .container-fluid {
    max-width: 1140px;
  }
}

@media (max-width: 992px) {
  .container-fluid {
    max-width: 960px;
  }
}

@media (max-width: 768px) {
  .container-fluid {
    max-width: 720px;
  }
}

@media (max-width: 576px) {
  .container-fluid {
    max-width: 540px;
  }
}

@media (max-width: 320px) {
  .container-fluid {
    max-width: 100%;
  }
}
</style>
