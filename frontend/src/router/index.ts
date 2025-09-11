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
    meta: { title: 'SKS DEVELOPERS (PVT) LTD - Advanced Construction Services' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'About Us - SKS DEVELOPERS (PVT) LTD' }
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: { title: 'Our Services - SKS DEVELOPERS (PVT) LTD' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: { title: 'Our Projects - SKS DEVELOPERS (PVT) LTD' }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: { title: 'Latest News - SKS DEVELOPERS (PVT) LTD' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { title: 'Contact Us - SKS DEVELOPERS (PVT) LTD' }
  },
  // Service detail routes
  {
    path: '/services/engineering',
    name: 'ServiceEngineering',
    component: ServiceDetail,
    meta: { title: 'Engineering Services - SKS DEVELOPERS (PVT) LTD' }
  },
  {
    path: '/services/architecture',
    name: 'ServiceArchitecture',
    component: ServiceDetail,
    meta: { title: 'Architecture Services - SKS DEVELOPERS (PVT) LTD' }
  },
  {
    path: '/services/management',
    name: 'ServiceManagement',
    component: ServiceDetail,
    meta: { title: 'Project Management - SKS DEVELOPERS (PVT) LTD' }
  },
  {
    path: '/services/finishing',
    name: 'ServiceFinishing',
    component: ServiceDetail,
    meta: { title: 'Finishing Services - SKS DEVELOPERS (PVT) LTD' }
  },
  {
    path: '/services/renovation',
    name: 'ServiceRenovation',
    component: ServiceDetail,
    meta: { title: 'Renovation Services - SKS DEVELOPERS (PVT) LTD' }
  },
  {
    path: '/services/infrastructure',
    name: 'ServiceInfrastructure',
    component: ServiceDetail,
    meta: { title: 'Infrastructure Development - SKS DEVELOPERS (PVT) LTD' }
  },
  // Blog article routes
  {
    path: '/blog/modern-construction-techniques',
    name: 'BlogModernConstruction',
    component: BlogArticle,
    meta: { title: 'Modern Construction Techniques - SKS DEVELOPERS (PVT) LTD' }
  },
  {
    path: '/blog/sustainable-building-practices',
    name: 'BlogSustainableBuilding',
    component: BlogArticle,
    meta: { title: 'Sustainable Building Practices - SKS DEVELOPERS (PVT) LTD' }
  },
  {
    path: '/blog/project-management-excellence',
    name: 'BlogProjectManagement',
    component: BlogArticle,
    meta: { title: 'Project Management Excellence - SKS DEVELOPERS (PVT) LTD' }
  },
  {
    path: '/blog/interior-design-trends',
    name: 'BlogInteriorDesign',
    component: BlogArticle,
    meta: { title: 'Interior Design Trends - SKS DEVELOPERS (PVT) LTD' }
  },
  // Other pages
  {
    path: '/careers',
    name: 'Careers',
    component: Careers,
    meta: { title: 'Careers - SKS DEVELOPERS (PVT) LTD' }
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
    meta: { title: 'Our Team - SKS DEVELOPERS (PVT) LTD' }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
    meta: { title: 'Privacy Policy - SKS DEVELOPERS (PVT) LTD' }
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms,
    meta: { title: 'Terms of Service - SKS DEVELOPERS (PVT) LTD' }
  },
  {
    path: '/sitemap',
    name: 'Sitemap',
    component: Sitemap,
    meta: { title: 'Site Map - SKS DEVELOPERS (PVT) LTD' }
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
