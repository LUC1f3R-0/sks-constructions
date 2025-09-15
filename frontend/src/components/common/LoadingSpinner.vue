<template>
  <Preloader v-if="isLoading" />
</template>

<script setup lang="ts">
import Preloader from './Preloader.vue'

interface Props {
  isLoading?: boolean
}

withDefaults(defineProps<Props>(), {
  isLoading: true
})
</script>
