<template>
  <div class="service-detail-page">
    <Header />
    <div class="container-fluid section-padding">
      <div class="row">
        <div class="col-12">
          <h1>{{ serviceTitle }}</h1>
          <p>{{ serviceDescription }}</p>
          <div class="service-content">
            <h2>What We Offer</h2>
            <ul>
              <li v-for="feature in serviceFeatures" :key="feature">{{ feature }}</li>
            </ul>
            <h2>Why Choose Us</h2>
            <p>{{ whyChooseUs }}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

const route = useRoute()

const serviceData = {
  engineering: {
    title: 'Engineering Services',
    description: 'Comprehensive engineering solutions for construction projects.',
    features: [
      'Structural engineering and design',
      'Civil engineering services',
      'Mechanical and electrical engineering',
      'Project feasibility studies',
      'Quality assurance and control'
    ],
    whyChooseUs: 'Our experienced engineering team ensures that every project meets the highest standards of safety, efficiency, and innovation.'
  },
  architecture: {
    title: 'Architecture Services',
    description: 'Creative and functional architectural design solutions.',
    features: [
      'Building design and planning',
      'Interior architecture',
      'Sustainable design solutions',
      '3D modeling and visualization',
      'Building code compliance'
    ],
    whyChooseUs: 'We combine aesthetic appeal with functional design to create spaces that inspire and serve their purpose effectively.'
  },
  management: {
    title: 'Project Management',
    description: 'Professional project management services for construction projects.',
    features: [
      'Project planning and scheduling',
      'Budget management and cost control',
      'Risk assessment and mitigation',
      'Quality management',
      'Stakeholder communication'
    ],
    whyChooseUs: 'Our project management expertise ensures timely delivery, cost efficiency, and superior quality in every project.'
  },
  finishing: {
    title: 'Finishing Services',
    description: 'High-quality finishing and interior work for your projects.',
    features: [
      'Interior finishing and decoration',
      'Flooring and tiling',
      'Painting and wall treatments',
      'Carpentry and joinery',
      'Final inspections and handover'
    ],
    whyChooseUs: 'Attention to detail and quality craftsmanship in every finishing touch to bring your vision to life.'
  },
  renovation: {
    title: 'Renovation Services',
    description: 'Transform existing spaces with our renovation expertise.',
    features: [
      'Home and office renovations',
      'Structural modifications',
      'Modernization and upgrades',
      'Energy efficiency improvements',
      'Custom renovation solutions'
    ],
    whyChooseUs: 'We breathe new life into existing spaces while preserving their character and improving functionality.'
  },
  infrastructure: {
    title: 'Infrastructure Development',
    description: 'Large-scale infrastructure and development projects.',
    features: [
      'Road and bridge construction',
      'Utility infrastructure',
      'Commercial developments',
      'Industrial facilities',
      'Public infrastructure projects'
    ],
    whyChooseUs: 'Our infrastructure expertise supports community development and economic growth through reliable, sustainable construction.'
  }
}

const serviceType = computed(() => route.params.service as string)
const serviceInfo = computed(() => serviceData[serviceType.value as keyof typeof serviceData])

const serviceTitle = computed(() => serviceInfo.value?.title || 'Service Not Found')
const serviceDescription = computed(() => serviceInfo.value?.description || 'The requested service could not be found.')
const serviceFeatures = computed(() => serviceInfo.value?.features || [])
const whyChooseUs = computed(() => serviceInfo.value?.whyChooseUs || '')
</script>

<style scoped>
.service-detail-page {
  min-height: 100vh;
}

.service-content {
  margin-top: 2rem;
}

.service-content h2 {
  color: #2c3e50;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.service-content ul {
  list-style-type: disc;
  margin-left: 2rem;
  margin-bottom: 2rem;
}

.service-content li {
  margin-bottom: 0.5rem;
  color: #555;
}
</style>
