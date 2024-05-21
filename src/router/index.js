import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Dash.vue'
import Tutors from '../components/Tutors.vue'
import Students from '../components/Students.vue'
import Payment from '../components/Payment.vue'
import Paymentv2 from '../components/Paymentv2.vue'



const routes = [
  {
    path: '/Dash',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Dashboard'
    }
  },
  {
    path: '/Tutors', // Corrected path
    name: 'Tutors',
    component: Tutors,
    meta: {
      title: 'Tutor Manager'
    }
  },
  {
    path: '/Students', // Corrected path
    name: 'Students',
    component: Students,
    meta: {
      title: 'Student Manager'
    }
  },
  {
    path: '/Payment', // Corrected path
    name: 'Payment',
    component: Payment,
    meta: {
      title: 'Payment Process'
    }
  },
  {
    path: '/Paymentv2', // Corrected path
    name: 'Paymentv2',
    component: Paymentv2,
    meta: {
      title: 'Payment Process'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) =>{
  document.title = to.meta?.title ?? 'Title'
})

export default router