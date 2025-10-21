<template>
  <div class="lottie-loader" :class="{ 'fullscreen': fullscreen, 'overlay': overlay }">
    <div class="loader-content">
      <DotLottieVue 
        :style="{ height: size + 'px', width: size + 'px' }" 
        autoplay 
        loop 
        :src="lottieSrc" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'

interface Props {
  size?: number
  fullscreen?: boolean
  overlay?: boolean
  showText?: boolean
  title?: string
  subtitle?: string
  lottieSrc?: string
}

withDefaults(defineProps<Props>(), {
  size: 300,
  fullscreen: false,
  overlay: false,
  showText: false,
  title: '',
  subtitle: '',
  lottieSrc: 'https://lottie.host/2c0d6ef0-5781-41eb-8808-3852d3d2ba8a/xIkICkGEaf.lottie'
})
</script>

<style lang="scss" scoped>
.lottie-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  
  &.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--dark-blue-1) 0%, var(--dark-blue-2) 100%);
    z-index: 9999;
    padding: 0;
  }
  
  &.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    z-index: 1000;
    padding: 0;
  }
  
  // Responsive sizing for mobile devices
  @media (max-width: 768px) {
    .loader-content {
      transform: scale(0.8);
    }
  }
  
  @media (max-width: 576px) {
    .loader-content {
      transform: scale(0.6);
    }
  }
  
  @media (max-width: 480px) {
    .loader-content {
      transform: scale(0.5);
    }
  }
}

.loader-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

// Animation for the loader
.lottie-loader {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
