<template>
  <LottieLoader 
    v-if="isLoading"
    :fullscreen="true"
    :size="400"
  />
</template>

<script setup lang="ts">
import LottieLoader from './LottieLoader.vue'

interface Props {
  isLoading?: boolean
}

withDefaults(defineProps<Props>(), {
  isLoading: true
})
</script>
