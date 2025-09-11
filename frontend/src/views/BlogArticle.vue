<template>
  <div class="blog-article-page">
    <Header />
    <div class="container-fluid section-padding">
      <div class="row">
        <div class="col-12">
          <h1>{{ articleTitle }}</h1>
          <div class="article-meta">
            <span class="date">{{ articleDate }}</span>
            <span class="author">By {{ articleAuthor }}</span>
          </div>
          <div class="article-content">
            <p>{{ articleDescription }}</p>
            <div v-html="articleContent"></div>
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

const blogData = {
  'modern-construction-techniques': {
    title: 'Modern Construction Techniques: Building the Future',
    date: 'December 15, 2024',
    author: 'SKS DEVELOPERS (PVT) LTD Team',
    description: 'Explore the latest innovations in construction technology and techniques that are revolutionizing the industry.',
    content: `
      <h2>Introduction</h2>
      <p>The construction industry is experiencing a technological revolution. From 3D printing to modular construction, new techniques are making projects faster, safer, and more sustainable.</p>
      
      <h2>Key Innovations</h2>
      <h3>3D Printing in Construction</h3>
      <p>3D printing technology is being used to create complex building components and even entire structures. This technique reduces waste and allows for intricate designs that would be difficult to achieve with traditional methods.</p>
      
      <h3>Modular Construction</h3>
      <p>Building components are manufactured off-site and assembled on location, reducing construction time and improving quality control.</p>
      
      <h3>Smart Building Materials</h3>
      <p>Self-healing concrete, energy-generating materials, and adaptive facades are changing how we think about building materials.</p>
      
      <h2>Benefits</h2>
      <ul>
        <li>Reduced construction time</li>
        <li>Lower environmental impact</li>
        <li>Improved safety standards</li>
        <li>Enhanced quality control</li>
      </ul>
    `
  },
  'sustainable-building-practices': {
    title: 'Sustainable Building Practices for a Greener Future',
    date: 'December 10, 2024',
    author: 'Environmental Team',
    description: 'Learn about sustainable construction practices that minimize environmental impact while maximizing efficiency.',
    content: `
      <h2>Why Sustainability Matters</h2>
      <p>Sustainable building practices are essential for reducing the construction industry's environmental footprint and creating healthier living spaces.</p>
      
      <h2>Sustainable Materials</h2>
      <h3>Recycled Materials</h3>
      <p>Using recycled steel, concrete, and other materials reduces waste and conserves natural resources.</p>
      
      <h3>Renewable Resources</h3>
      <p>Bamboo, cork, and other rapidly renewable materials offer sustainable alternatives to traditional building materials.</p>
      
      <h2>Energy Efficiency</h2>
      <p>Implementing energy-efficient designs, solar panels, and smart building systems reduces long-term operational costs and environmental impact.</p>
      
      <h2>Water Conservation</h2>
      <p>Rainwater harvesting systems, low-flow fixtures, and greywater recycling help conserve water resources.</p>
    `
  },
  'project-management-excellence': {
    title: 'Project Management Excellence in Construction',
    date: 'December 5, 2024',
    author: 'Project Management Team',
    description: 'Discover the key principles and practices that lead to successful construction project management.',
    content: `
      <h2>Introduction</h2>
      <p>Effective project management is crucial for delivering construction projects on time, within budget, and to the highest quality standards.</p>
      
      <h2>Key Principles</h2>
      <h3>Clear Communication</h3>
      <p>Maintaining open lines of communication between all stakeholders ensures everyone is aligned and informed.</p>
      
      <h3>Risk Management</h3>
      <p>Identifying potential risks early and developing mitigation strategies prevents costly delays and issues.</p>
      
      <h3>Quality Control</h3>
      <p>Implementing rigorous quality control processes ensures that every aspect of the project meets specifications.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Detailed project planning</li>
        <li>Regular progress monitoring</li>
        <li>Stakeholder engagement</li>
        <li>Continuous improvement</li>
      </ul>
    `
  },
  'interior-design-trends': {
    title: 'Interior Design Trends: Creating Modern Living Spaces',
    date: 'November 28, 2024',
    author: 'Design Team',
    description: 'Explore the latest interior design trends that are shaping modern living and working spaces.',
    content: `
      <h2>Current Trends</h2>
      <p>Interior design is constantly evolving, with new trends emerging that reflect changing lifestyles and technological advances.</p>
      
      <h2>Popular Styles</h2>
      <h3>Minimalist Design</h3>
      <p>Clean lines, neutral colors, and functional furniture create serene, uncluttered spaces.</p>
      
      <h3>Biophilic Design</h3>
      <p>Incorporating natural elements like plants, natural light, and organic materials brings nature indoors.</p>
      
      <h3>Smart Home Integration</h3>
      <p>Technology seamlessly integrated into living spaces for convenience and efficiency.</p>
      
      <h2>Color Trends</h2>
      <p>Warm neutrals, earth tones, and bold accent colors are popular choices for creating inviting spaces.</p>
      
      <h2>Materials</h2>
      <p>Sustainable materials, natural textures, and mixed materials create visual interest and environmental responsibility.</p>
    `
  }
}

const articleSlug = computed(() => route.params.slug as string)
const articleInfo = computed(() => blogData[articleSlug.value as keyof typeof blogData])

const articleTitle = computed(() => articleInfo.value?.title || 'Article Not Found')
const articleDate = computed(() => articleInfo.value?.date || '')
const articleAuthor = computed(() => articleInfo.value?.author || '')
const articleDescription = computed(() => articleInfo.value?.description || 'The requested article could not be found.')
const articleContent = computed(() => articleInfo.value?.content || '')
</script>

<style scoped>
.blog-article-page {
  min-height: 100vh;
}

.article-meta {
  margin-bottom: 2rem;
  color: #666;
  font-style: italic;
}

.article-meta .date {
  margin-right: 1rem;
}

.article-content {
  line-height: 1.6;
}

.article-content h2 {
  color: #2c3e50;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.article-content h3 {
  color: #34495e;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.article-content p {
  margin-bottom: 1rem;
  color: #555;
}

.article-content ul {
  margin-left: 2rem;
  margin-bottom: 1rem;
}

.article-content li {
  margin-bottom: 0.5rem;
  color: #555;
}
</style>
