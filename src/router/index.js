import { createRouter, createWebHistory } from "vue-router";
import Home from "@/Pages/Home.vue";
import Pokemon from "@/Pages/Pokemon.vue";

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      { path: "", component: Home, meta: { title: "Home" }},
      { path: '/pokemon/:name', props: true, name: 'Pokemon', component: Pokemon, meta:{ title: "Detalhes" } },
  
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const baseTitle = "Pokedex";
  document.title = to.meta.title
    ? `${baseTitle} | ${to.meta.title}`
    : baseTitle;
  next();
});

export default router;
