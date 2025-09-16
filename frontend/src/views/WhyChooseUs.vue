<template>
  <div class="why-choose-us-page">
    <Header />
    
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1 class="page-title" data-aos="fade-up">Why Choose SKS Developers?</h1>
            <p class="page-subtitle" data-aos="fade-up" data-aos-delay="100">
              Discover what makes us the preferred choice for construction projects across Sri Lanka
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <WhyChooseUsSection />
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection.vue'

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

<style scoped>
.why-choose-us-page {
  min-height: 100vh;
}

.page-header {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  padding: 180px 0 80px;
  color: white;
  text-align: center;
  margin-top: 0;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 0;
}

/* Responsive Design */
@media (max-width: 1400px) {
  .page-header {
    padding: 160px 0 80px;
  }
}

@media (max-width: 1200px) {
  .page-header {
    padding: 150px 0 80px;
  }
}

@media (max-width: 992px) {
  .page-header {
    padding: 140px 0 80px;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 120px 0 60px;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 576px) {
  .page-header {
    padding: 100px 0 60px;
  }
  
  .page-title {
    font-size: 2rem;
  }
}
</style>