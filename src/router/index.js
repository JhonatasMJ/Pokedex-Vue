import { createRouter, createWebHistory } from "vue-router";
import Home from "@/Pages/Home.vue";


const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {path: "", component: Home,    meta: { title: 'Home' }},
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const baseTitle = 'Pokedex'   
  document.title = to.meta.title
    ? `${baseTitle} | ${to.meta.title}`
    : baseTitle
  next()
})

export default router;
