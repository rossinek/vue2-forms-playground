import Vue from 'vue'
import VueRouter from 'vue-router'

import PlainForm from '../views/forms/PlainForm.vue'
import PlainFormWithEvents from '../views/forms/PlainFormWithEvents.vue'
import TwoWayBinding from '../views/forms/TwoWayBinding.vue'
import CustomInput from '../views/forms/CustomInput.vue'

import ValidationOnSubmit from '../views/validation/OnSubmit.vue'
import ValidationWhileTyping from '../views/validation/WhileTyping.vue'
import ValidationAfterInput from '../views/validation/AfterInput.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: { name: 'plain-form' }
  },
  {
    path: '/forms/plain-form',
    name: 'plain-form',
    component: PlainForm
  },
  {
    path: '/forms/plain-form-with-events',
    name: 'plain-form-with-events',
    component: PlainFormWithEvents
  },
  {
    path: '/forms/two-way-binding',
    name: 'two-way-binding',
    component: TwoWayBinding
  },
  {
    path: '/forms/custom-input',
    name: 'custom-input',
    component: CustomInput
  },
  {
    path: '/validation/on-submit',
    name: 'validation-on-submit',
    component: ValidationOnSubmit
  },
  {
    path: '/validation/while-typing',
    name: 'validation-while-typing',
    component: ValidationWhileTyping
  },
  {
    path: '/validation/after-input',
    name: 'validation-after-input',
    component: ValidationAfterInput
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
