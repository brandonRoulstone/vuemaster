import { createRouter, createWebHistory } from 'vue-router'
import IntroView from '../views/IntroView.vue'
import TasksView from '../views/TasksView.vue'
import ReviewsView from '../views/ReviewsView.vue'

const routes = [
  {
    path: '/',
    name: 'intro',
    component: IntroView
  },
  {
    path: '/about',
    name: 'about',
    component: ReviewsView
  },
  {
    path: '/projects',
    name: 'projects',
    component: TasksView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
