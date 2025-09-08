<template>
  <section class="blog-section section-padding">
    <div class="container-fluid">
      <!-- Section Title -->
      <div class="row">
        <div class="col-12">
          <div class="section-header text-center">
            <h2 class="section-title text-white">
              <span class="section-title-back">Our Blog</span>
              Latest News
            </h2>
            <p class="section-subtitle text-white">
              Stay updated with the latest construction trends, industry insights, and project updates
            </p>
          </div>
        </div>
      </div>

      <!-- Blog Grid -->
      <div class="row">
        <div 
          v-for="(post, index) in blogPosts" 
          :key="index"
          class="col-lg-6 col-md-6 col-sm-12"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="blog-card">
            <div class="blog-image">
              <img :src="post.image" :alt="post.title" class="hover-scale" />
              <div class="date-badge">
                <span class="date-day">{{ post.date.day }}</span>
                <span class="date-month">{{ post.date.month }}</span>
              </div>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <span class="blog-category">{{ post.category }}</span>
                <span class="blog-date">{{ post.date.full }}</span>
              </div>
              <h3 class="blog-title">
                <router-link :to="post.link">{{ post.title }}</router-link>
              </h3>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
              <router-link :to="post.link" class="read-more">
                Read More <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Posts Button -->
      <div class="row">
        <div class="col-12 text-center">
          <router-link to="/blog" class="btn btn-outline" data-aos="fade-up">
            View All Posts
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const blogPosts = [
  {
    title: "Modern Construction Techniques: Building the Future",
    excerpt: "Explore the latest innovations in construction technology and how they're revolutionizing the industry. From 3D printing to sustainable materials, discover what's shaping the future of construction.",
    category: "Construction",
    date: {
      day: "15",
      month: "Dec",
      full: "December 15, 2024"
    },
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    link: "/blog/modern-construction-techniques"
  },
  {
    title: "Sustainable Building Practices: Eco-Friendly Construction",
    excerpt: "Learn about sustainable building practices and how they're becoming the standard in modern construction. Discover eco-friendly materials and energy-efficient design principles.",
    category: "Sustainability",
    date: {
      day: "12",
      month: "Dec",
      full: "December 12, 2024"
    },
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    link: "/blog/sustainable-building-practices"
  },
  {
    title: "Project Management Excellence: Keys to Success",
    excerpt: "Discover the essential elements of successful project management in construction. From planning to execution, learn the strategies that ensure on-time and on-budget delivery.",
    category: "Management",
    date: {
      day: "10",
      month: "Dec",
      full: "December 10, 2024"
    },
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    link: "/blog/project-management-excellence"
  },
  {
    title: "Interior Design Trends: Creating Beautiful Spaces",
    excerpt: "Explore the latest interior design trends that are transforming residential and commercial spaces. From minimalist aesthetics to bold statements, see what's trending in 2024.",
    category: "Design",
    date: {
      day: "08",
      month: "Dec",
      full: "December 8, 2024"
    },
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    link: "/blog/interior-design-trends"
  }
]
</script>

<style lang="scss" scoped>
.blog-section {
  background-color: var(--dark-blue-2);
  color: var(--white);
}

.section-header {
  margin-bottom: 80px;
  
  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
}

.section-title {
  color: var(--white) !important;
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.8) !important;
}

.blog-card {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 0;
  overflow: hidden;
  margin-bottom: 30px;
  transition: var(--transition-default);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
    
    .blog-image img {
      transform: scale(1.1);
    }
  }
}

.blog-image {
  position: relative;
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition-slow);
  }
}

.date-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: var(--primary-color);
  padding: 15px;
  text-align: center;
  border-radius: 5px;
  
  .date-day {
    display: block;
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    color: var(--white);
  }
  
  .date-month {
    display: block;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--white);
    margin-top: 5px;
  }
}

.blog-content {
  padding: 30px;
}

.blog-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
}

.blog-category {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--primary-color);
  background-color: rgba(255, 95, 19, 0.1);
  padding: 5px 10px;
  border-radius: 3px;
}

.blog-date {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
}

.blog-title {
  margin-bottom: 15px;
  
  a {
    font-size: 20px;
    font-weight: 700;
    color: var(--white);
    text-decoration: none;
    line-height: 1.4;
    transition: var(--transition-default);
    
    &:hover {
      color: var(--primary-color);
    }
    
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
}

.blog-excerpt {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 20px;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: var(--transition-default);
  
  i {
    font-size: 12px;
    transition: var(--transition-default);
  }
  
  &:hover {
    color: var(--white);
    
    i {
      transform: translateX(5px);
    }
  }
}

.btn {
  margin-top: 50px;
  
  @media (max-width: 768px) {
    margin-top: 30px;
  }
}
</style>
