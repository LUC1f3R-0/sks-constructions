<template>
  <div id="app">
    <!-- Loading Spinner with Lottie Animation -->
    <LoadingSpinner :is-loading="isLoading" />
    
    <!-- Main App Content -->
    <div v-show="!isLoading">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'

const isLoading = ref(true)

onMounted(() => {
  // Simulate loading for 3 seconds to show the Lottie animation
  setTimeout(() => {
    isLoading.value = false
  }, 3000)
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
  --primary-color: #2563eb; // Professional steel blue for better visibility
  --secondary-color: #84cc16; // Lime green from logo
  --dark-blue-1: #1e3a8a; // Darker blue variant
  --dark-blue-2: #1e40af; // Primary blue
  --dark-blue-3: #1e3a8a; // Dark blue variant
  --white: #ffffff;
  --light-gray-1: #f5f5f5;
  --light-gray-2: #f7f7fd;
  --text-black: #16161a;
  --text-gray: #6b7280; // Gray from logo
  --accent-blue: #3b82f6; // Lighter blue accent
  --accent-green: #a3e635; // Lighter green accent
  
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

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-primary);
  font-size: var(--body-font-size);
  line-height: var(--body-line-height);
  color: var(--text-black);
  background-color: var(--white);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
    background-color: var(--secondary-color);
    color: var(--white);
    
    &:hover {
      background-color: var(--accent-green);
      transform: scale(1.05);
    }
  }
  
  &.btn-secondary {
    background-color: var(--white);
    color: var(--secondary-color);
    border: 2px solid var(--secondary-color);
    
    &:hover {
      background-color: var(--secondary-color);
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
      color: var(--secondary-color);
      transform: scale(1.05);
    }
  }
}

// Container
.container-fluid {
  padding-left: 15px;
  padding-right: 15px;
  max-width: 100%;
  margin: 0 auto;
  
  @media (min-width: 1200px) {
    max-width: 1200px;
    padding-left: 20px;
    padding-right: 20px;
  }
  
  @media (min-width: 1400px) {
    max-width: 1320px;
    padding-left: 25px;
    padding-right: 25px;
  }
}

// Section Spacing
.section-padding {
  padding-top: var(--section-padding-top);
  padding-bottom: var(--section-padding-bottom);
  
  @media (max-width: 1200px) {
    padding-top: 120px;
    padding-bottom: 120px;
  }
  
  @media (max-width: 992px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  
  @media (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  
  @media (max-width: 576px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  
  @media (max-width: 480px) {
    padding-top: 50px;
    padding-bottom: 50px;
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
  color: var(--secondary-color) !important;
}

.text-secondary {
  color: var(--primary-color) !important;
}

.bg-primary {
  background-color: var(--secondary-color) !important;
}

.bg-secondary {
  background-color: var(--primary-color) !important;
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
.text-center {
  text-align: center !important;
}

.text-left {
  text-align: left !important;
}

.text-right {
  text-align: right !important;
}

.d-flex {
  display: flex !important;
}

.d-block {
  display: block !important;
}

.d-none {
  display: none !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row {
  flex-direction: row !important;
}

.w-100 {
  width: 100% !important;
}

.h-100 {
  height: 100% !important;
}

// Responsive Display Utilities
@media (max-width: 768px) {
  .d-md-none {
    display: none !important;
  }
  
  .d-md-block {
    display: block !important;
  }
  
  .d-md-flex {
    display: flex !important;
  }
  
  .text-md-center {
    text-align: center !important;
  }
  
  .flex-md-column {
    flex-direction: column !important;
  }
}

@media (max-width: 576px) {
  .d-sm-none {
    display: none !important;
  }
  
  .d-sm-block {
    display: block !important;
  }
  
  .d-sm-flex {
    display: flex !important;
  }
  
  .text-sm-center {
    text-align: center !important;
  }
  
  .flex-sm-column {
    flex-direction: column !important;
  }
}
</style>
