# Lottie Loader Components

This project now includes beautiful Lottie animation loaders for enhanced user experience during loading states.

## Components

### 1. LoadingSpinner.vue
The main loading component used for the initial page load.

**Usage:**
```vue
<template>
  <LoadingSpinner :is-loading="isLoading" />
</template>

<script setup>
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
</script>
```

### 2. LottieLoader.vue
A flexible, reusable Lottie loader component for various loading scenarios.

**Props:**
- `size` (number, default: 150): Size of the Lottie animation in pixels
- `fullscreen` (boolean, default: false): Makes the loader cover the entire screen
- `overlay` (boolean, default: false): Creates an overlay effect over content
- `showText` (boolean, default: true): Shows/hides the text below the animation
- `title` (string, default: 'Loading...'): Main title text
- `subtitle` (string, default: 'Please wait while we prepare everything for you'): Subtitle text
- `lottieSrc` (string, default: construction animation URL): Custom Lottie animation URL

## Usage Examples

### Fullscreen Loader
```vue
<LottieLoader 
  :fullscreen="true"
  :size="200"
  title="Loading SKS Constructions"
  subtitle="Building excellence, one project at a time..."
/>
```

### Overlay Loader
```vue
<div class="content-container" style="position: relative;">
  <p>Your content here</p>
  <LottieLoader 
    :overlay="true"
    :size="100"
    title="Processing..."
    subtitle="Please wait"
  />
</div>
```

### Inline Loader
```vue
<LottieLoader 
  :size="80"
  title="Loading Data"
  subtitle="Fetching information..."
/>
```

### Custom Animation
```vue
<LottieLoader 
  :fullscreen="true"
  :size="150"
  title="Custom Animation"
  subtitle="Using a different Lottie file"
  lottie-src="https://your-custom-lottie-url.lottie"
/>
```

## Installation

The Lottie loader components are already installed and configured in this project:

```bash
npm install @lottiefiles/dotlottie-vue
```

## Features

- ✅ Beautiful Lottie animations
- ✅ Multiple display modes (fullscreen, overlay, inline)
- ✅ Customizable size and text
- ✅ Responsive design
- ✅ TypeScript support
- ✅ Vue 3 Composition API
- ✅ Custom animation URLs support

## Default Animation

The default Lottie animation used is a construction-themed animation:
```
https://lottie.host/2c0d6ef0-5781-41eb-8808-3852d3d2ba8a/xIkICkGEaf.lottie
```

## Integration

The loading components are automatically integrated into the main App.vue for the initial page load. You can also use them throughout your application for:

- Form submissions
- Data fetching
- File uploads
- API calls
- Page transitions
- Any async operations

## Styling

The components use the project's CSS variables for consistent theming:
- `--primary-color`: #ff5f13
- `--dark-blue-1`: #021a47
- `--dark-blue-2`: #00235b
- `--white`: #ffffff

## Performance

- Lottie animations are lightweight and optimized
- Components are tree-shakeable
- Minimal bundle size impact
- Smooth animations with hardware acceleration

## Browser Support

- Modern browsers with ES6+ support
- Mobile browsers
- Progressive enhancement for older browsers
