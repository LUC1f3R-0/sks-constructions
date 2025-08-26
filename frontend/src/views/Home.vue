<template>
  <div class="home-page">
    <!-- Header -->
    <Header />
    
    <!-- Hero Slider -->
    <HeroSlider />
    
    <!-- Services Section -->
    <ServicesSection />
    
    <!-- About Section -->
    <AboutSection />
    
    <!-- Projects Gallery -->
    <ProjectsGallery />
    
    <!-- Contact CTA Section -->
    <ContactCTA />
    
    <!-- Counter Section -->
    <CounterSection />
    
    <!-- Team Section -->
    <TeamSection />
    
    <!-- Testimonial Section -->
    <TestimonialSection />
    
    <!-- Blog Section -->
    <BlogSection />
    
    <!-- Footer -->
    <Footer />
    
    <!-- Scroll to Top -->
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import HeroSlider from '@/components/home/HeroSlider.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import ProjectsGallery from '@/components/home/ProjectsGallery.vue'
import ContactCTA from '@/components/home/ContactCTA.vue'
import CounterSection from '@/components/home/CounterSection.vue'
import TeamSection from '@/components/home/TeamSection.vue'
import TestimonialSection from '@/components/home/TestimonialSection.vue'
import BlogSection from '@/components/home/BlogSection.vue'
import ScrollToTop from '@/components/common/ScrollToTop.vue'

onMounted(() => {
  // Initialize AOS (Animate On Scroll)
  if (typeof window !== 'undefined' && (window as any).AOS) {
    (window as any).AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    })
  }
})
</script>

<style lang="scss" scoped>
.home-page {
  overflow-x: hidden;
}
</style>
