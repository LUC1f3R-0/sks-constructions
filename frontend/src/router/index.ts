import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Services from '@/views/Services.vue'
import Projects from '@/views/Projects.vue'
import Blog from '@/views/Blog.vue'
import Contact from '@/views/Contact.vue'
import ServiceDetail from '@/views/ServiceDetail.vue'
import BlogArticle from '@/views/BlogArticle.vue'
import Careers from '@/views/Careers.vue'
import Team from '@/views/Team.vue'
import Privacy from '@/views/Privacy.vue'
import Terms from '@/views/Terms.vue'
import Sitemap from '@/views/Sitemap.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'SKS Constructions - Advanced Construction Services' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'About Us - SKS Constructions' }
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: { title: 'Our Services - SKS Constructions' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: { title: 'Our Projects - SKS Constructions' }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: { title: 'Latest News - SKS Constructions' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { title: 'Contact Us - SKS Constructions' }
  },
  // Service detail routes
  {
    path: '/services/engineering',
    name: 'ServiceEngineering',
    component: ServiceDetail,
    meta: { title: 'Engineering Services - SKS Constructions' }
  },
  {
    path: '/services/architecture',
    name: 'ServiceArchitecture',
    component: ServiceDetail,
    meta: { title: 'Architecture Services - SKS Constructions' }
  },
  {
    path: '/services/management',
    name: 'ServiceManagement',
    component: ServiceDetail,
    meta: { title: 'Project Management - SKS Constructions' }
  },
  {
    path: '/services/finishing',
    name: 'ServiceFinishing',
    component: ServiceDetail,
    meta: { title: 'Finishing Services - SKS Constructions' }
  },
  {
    path: '/services/renovation',
    name: 'ServiceRenovation',
    component: ServiceDetail,
    meta: { title: 'Renovation Services - SKS Constructions' }
  },
  {
    path: '/services/infrastructure',
    name: 'ServiceInfrastructure',
    component: ServiceDetail,
    meta: { title: 'Infrastructure Development - SKS Constructions' }
  },
  // Blog article routes
  {
    path: '/blog/modern-construction-techniques',
    name: 'BlogModernConstruction',
    component: BlogArticle,
    meta: { title: 'Modern Construction Techniques - SKS Constructions' }
  },
  {
    path: '/blog/sustainable-building-practices',
    name: 'BlogSustainableBuilding',
    component: BlogArticle,
    meta: { title: 'Sustainable Building Practices - SKS Constructions' }
  },
  {
    path: '/blog/project-management-excellence',
    name: 'BlogProjectManagement',
    component: BlogArticle,
    meta: { title: 'Project Management Excellence - SKS Constructions' }
  },
  {
    path: '/blog/interior-design-trends',
    name: 'BlogInteriorDesign',
    component: BlogArticle,
    meta: { title: 'Interior Design Trends - SKS Constructions' }
  },
  // Other pages
  {
    path: '/careers',
    name: 'Careers',
    component: Careers,
    meta: { title: 'Careers - SKS Constructions' }
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
    meta: { title: 'Our Team - SKS Constructions' }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
    meta: { title: 'Privacy Policy - SKS Constructions' }
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms,
    meta: { title: 'Terms of Service - SKS Constructions' }
  },
  {
    path: '/sitemap',
    name: 'Sitemap',
    component: Sitemap,
    meta: { title: 'Site Map - SKS Constructions' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to: any, _from: any, savedPosition: any) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update page title
router.beforeEach((to: any, _from: any, next: any) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router
