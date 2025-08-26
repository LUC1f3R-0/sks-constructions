<template>
  <div 
    class="scroll-to-top"
    :class="{ 'visible': isVisible }"
    @click="scrollToTop"
    title="Scroll to top"
  >
    <i class="fas fa-chevron-up"></i>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background-color: var(--primary-color);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition-default);
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  z-index: 1000;
  box-shadow: 0 5px 20px rgba(255, 95, 19, 0.3);
  
  &:hover {
    background-color: var(--secondary-color);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 95, 19, 0.4);
  }
  
  &.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  i {
    font-size: 18px;
  }
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    
    i {
      font-size: 16px;
    }
  }
}
</style>
