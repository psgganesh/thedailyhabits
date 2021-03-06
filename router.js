import Vue from 'vue'
import Router from 'vue-router'
import { scrollBehavior } from '~/utils'

Vue.use(Router)

const Landing = () => import('~/pages/index').then(m => m.default || m);
const HomePage = () => import('~/pages/home').then(m => m.default || m);
const HabitCreateHome = () => import('~/pages/habit/create/index').then(m => m.default || m);
const HabitCreateFromTemplate = () => import('~/pages/habit/create/index').then(m => m.default || m);
const HabitCreateFromCustomInput = () => import('~/pages/habit/create/index').then(m => m.default || m);


const HabitUpdateHome = () => import('~/pages/habit/update/index').then(m => m.default || m);
const HabitUpdateFromTemplate = () => import('~/pages/habit/update/index').then(m => m.default || m);
const HabitUpdateFromCustomInput = () => import('~/pages/habit/update/index').then(m => m.default || m);

const routes = [

  { path: '/', name: 'landing', component: Landing },
  { path: '/home', name: 'home', component: HomePage },
  { path: '/habit/create', name: 'habit-create', component: HabitCreateHome },
  { path: '/habit/create/template', name: 'habit-create-template', component: HabitCreateFromTemplate },
  { path: '/habit/create/custom', name: 'habit-create-custom-input', component: HabitCreateFromCustomInput },
  { path: '/habit/update/template', name: 'habit-update-template', component: HabitUpdateFromCustomInput },
  { path: '/habit/update/custom', name: 'habit-update-custom-input', component: HabitUpdateFromCustomInput },

]

export function createRouter() {
  return new Router({
    routes,
    scrollBehavior,
    mode: 'history'
  })
}
