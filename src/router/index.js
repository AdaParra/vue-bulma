import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Main'
import Project from '@/components/Shared/Cards/Project/Main'
import Projects from '@/components/Shared/Projects/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/Project/:id/detail', name: 'Project', component: Project, props: true },
    {path: '/Projects', name: 'Projects', component: Projects}
  ]
})
