import Vue from 'vue'
import VueRouter from 'vue-router'
import PlainForm from '../views/PlainForm.vue'
import PlainFormWithEvents from '../views/PlainFormWithEvents.vue'
import TwoWayBinding from '../views/TwoWayBinding.vue'
import CustomInput from '../views/CustomInput.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'plain-form' }
  },
  {
    path: '/plain-form',
    name: 'plain-form',
    component: PlainForm
  },
  {
    path: '/plain-form-with-events',
    name: 'plain-form-with-events',
    component: PlainFormWithEvents
  },
  {
    path: '/two-way-binding',
    name: 'two-way-binding',
    component: TwoWayBinding
  },
  {
    path: '/custom-input',
    name: 'custom-input',
    component: CustomInput
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
