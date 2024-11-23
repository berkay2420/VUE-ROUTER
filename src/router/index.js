import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import sourceData from '@/data.json'


const routes = [
  {path: '/', name: 'Home', component: Home},
  // {path: '/brazil', name:'Brazil', component: ()=> import('@/views/Brazil.vue')},
  // {path: '/hawaii', name:'Hawaii', component:()=>import('@/views/Hawaii.vue')},
  // {path: '/jamaica', name:"Jamaica", component: ()=> import('@/views/Jamaica.vue')},
  // {path: '/panama', name:"Panama", component: ()=> import('@/views/Panama.vue')},
  {
    path: '/destination/:id/:slug',
    name:"destination.show",
    component: ()=>import('@/views/DestinationShow.vue'),
    props: route => ({...route.params, id: parseInt(route.params.id)}),
    beforeEnter: (to, from,) => { //handling invalid URLs
      const exists = sourceData.destinations.find(
        destination => destination.id === parseInt(to.params.id)
      )
      if (!exists) return {
        name:'NotFound',
        params:{pathMatch: to.path.split('/').slice(1)},
        query: to.query,
        hash: to.hash
      }
    },
    children: [
      {
        path: ':experienceSlug',
        name:"experience.show",
        component: ()=>import('@/views/ExperienceShow.vue'),
        props: route => ({...route.params, id: parseInt(route.params.id)})
      }

    ]
  },
  {
    path:'/:pathMatch(.*)*',
    name:'NotFound',
    component: ()=>import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.params.experienceSlug !== from.params.experienceSlug) {
      return (
      savedPosition ||
        new Promise((resolve) =>
          setTimeout(() => {
            resolve({ bottom: 0, behavior: 'smooth' })
          }, 300)
        )
      )
    }
  }
  // scrollBehavior(to,from, savedPosition){
  //   return savedPosition || {top:0} 
  // }
})

export default router