import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewNote from '../views/NewNote.vue'
import Notes from '../views/Notes.vue'
// import Tours from '../views/Tours.vue'
// import Locations from '../views/Locations.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'New',
    component: NewNote
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes
  },
//   {
//     path: '/locations',
//     name: 'Locations',
//     component: Locations
//   },
//   {
//     path: '/member/:id',
//     name: 'Member',
//     component: Member
//   }
   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router