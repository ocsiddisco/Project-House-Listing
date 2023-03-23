import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HouseView from "../views/HouseDetailView.vue";
import FormView from "../views/FormView.vue";
import AboutView from "../views/AboutView.vue";
import PageNotFoundView from "../views/PageNotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/form",
      name: "form",
      component: FormView,
    },
    {
      path: "/house/:id",
      name: "house",
      component: HouseView,
    },
    {
      path: "/:catchAll(.*)*",
      name: "PageNotFound",
      component: PageNotFoundView,
    },
  ],
});

// Vue Router for Vue 3 uses a custom RegEx. The value of path contains
//  this new RegEx, which is telling Vue to render PageNotFound.vue for
//   every route, unless the route is already defined.
//   The catchAll in this route refers to a dynamic segment within
//   Vue Router, and (.*) is a regular expression that captures any string.

export default router;
