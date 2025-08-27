<template>
  <div class="loading-examples">
    <h2>Lottie Loading Examples</h2>
    
    <!-- Fullscreen Loader -->
    <div class="example-section">
      <h3>Fullscreen Loader</h3>
      <button @click="showFullscreen = true" class="btn btn-primary">
        Show Fullscreen Loader
      </button>
      <LottieLoader 
        v-if="showFullscreen"
        :fullscreen="true"
        :size="200"
        title="Loading..."
        subtitle="Please wait while we process your request"
      />
    </div>
    
    <!-- Overlay Loader -->
    <div class="example-section">
      <h3>Overlay Loader</h3>
      <div class="content-box">
        <p>This is some content that will be covered by the overlay loader.</p>
        <button @click="showOverlay = true" class="btn btn-secondary">
          Show Overlay Loader
        </button>
        <LottieLoader 
          v-if="showOverlay"
          :overlay="true"
          :size="100"
          title="Processing..."
          subtitle="Please wait"
        />
      </div>
    </div>
    
    <!-- Inline Loader -->
    <div class="example-section">
      <h3>Inline Loader</h3>
      <button @click="showInline = !showInline" class="btn btn-outline">
        Toggle Inline Loader
      </button>
      <LottieLoader 
        v-if="showInline"
        :size="80"
        title="Loading Data"
        subtitle="Fetching information..."
      />
    </div>
    
    <!-- Custom Lottie Animation -->
    <div class="example-section">
      <h3>Custom Lottie Animation</h3>
      <button @click="showCustom = true" class="btn btn-primary">
        Show Custom Animation
      </button>
      <LottieLoader 
        v-if="showCustom"
        :fullscreen="true"
        :size="150"
        title="Custom Animation"
        subtitle="Using a different Lottie file"
        lottie-src="https://lottie.host/2c0d6ef0-5781-41eb-8808-3852d3d2ba8a/xIkICkGEaf.lottie"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LottieLoader from './LottieLoader.vue'

const showFullscreen = ref(false)
const showOverlay = ref(false)
const showInline = ref(false)
const showCustom = ref(false)

// Auto-hide loaders after 3 seconds
const autoHide = (loaderRef: any) => {
  setTimeout(() => {
    loaderRef.value = false
  }, 3000)
}

// Watch for changes and auto-hide
import { watch } from 'vue'

watch(showFullscreen, (newVal) => {
  if (newVal) autoHide(showFullscreen)
})

watch(showOverlay, (newVal) => {
  if (newVal) autoHide(showOverlay)
})

watch(showCustom, (newVal) => {
  if (newVal) autoHide(showCustom)
})
</script>

<style lang="scss" scoped>
.loading-examples {
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    text-align: center;
    margin-bottom: 40px;
    color: var(--primary-color);
  }
}

.example-section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid var(--light-gray-1);
  border-radius: 10px;
  position: relative;
  
  h3 {
    margin-bottom: 15px;
    color: var(--text-black);
  }
}

.content-box {
  position: relative;
  padding: 20px;
  background: var(--light-gray-1);
  border-radius: 8px;
  min-height: 100px;
  
  p {
    margin-bottom: 15px;
  }
}

.btn {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
